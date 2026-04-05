const CACHE_NAME = "portfolio-v1";
const STATIC_ASSETS = ["/offline.html", "/assets/logo.png", "/favicon.ico"];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(STATIC_ASSETS);
    }),
  );
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.filter((key) => key !== CACHE_NAME).map((key) => caches.delete(key)),
      );
    }),
  );
  self.clients.claim();
});

self.addEventListener("fetch", (event) => {
  const { request } = event;
  const url = new URL(request.url);

  // 1. Skip non-GET requests or different origins
  if (request.method !== "GET" || url.origin !== self.origin) return;

  // 2. Resource-specific strategies
  // Images -> Stale While Revalidate
  if (
    request.destination === "image" ||
    url.pathname.includes(".png") ||
    url.pathname.includes(".jpg") ||
    url.pathname.includes(".webp")
  ) {
    event.respondWith(staleWhileRevalidate(request));
    return;
  }

  // Static Assets (JS, CSS, Fonts) -> Cache First
  if (
    request.destination === "font" ||
    url.pathname.includes(".js") ||
    url.pathname.includes(".css")
  ) {
    event.respondWith(cacheFirst(request));
    return;
  }

  // Next.js Navigation / Pages -> Network First (with Offline Fallback)
  event.respondWith(networkFirst(request));
});

// Strategies
async function cacheFirst(request) {
  const cache = await caches.open(CACHE_NAME);
  const cached = await cache.match(request);
  return cached || fetch(request);
}

async function staleWhileRevalidate(request) {
  const cache = await caches.open(CACHE_NAME);
  const cached = await cache.match(request);
  const fresh = fetch(request).then((response) => {
    cache.put(request, response.clone());
    return response;
  });
  return cached || fresh;
}

async function networkFirst(request) {
  const cache = await caches.open(CACHE_NAME);
  try {
    const fresh = await fetch(request);
    // Cache the page if it's a valid HTML response
    if (request.mode === "navigate") {
      cache.put(request, fresh.clone());
    }
    return fresh;
  } catch {
    const cached = await cache.match(request);
    if (cached) return cached;

    // Finally, if it's a page navigation, return the offline fallback
    if (request.mode === "navigate") {
      return cache.match("/offline.html");
    }
    return new Response("Offline mode", { status: 503 });
  }
}
