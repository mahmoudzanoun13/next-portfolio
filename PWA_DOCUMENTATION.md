# PWA Deep Architecture & Implementation Guide

This document provides a line-by-line technical breakdown of the Progressive Web App (PWA) infrastructure implemented in the portfolio.

---

## 1. `public/sw.js` (The Service Worker)

The Service Worker acts as a network proxy, managing how assets are cached and served.

| Line  | Code                                        | Explanation                                                                                                                                                                                          |
| :---- | :------------------------------------------ | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1     | `const CACHE_NAME = "portfolio-v1";`        | Defines the versioned cache bucket. Changing this name forces a browser cache refresh.                                                                                                               |
| 2     | `const STATIC_ASSETS = [...]`               | An array of critical files (Logo, Offline page) to be cached immediately on installation.                                                                                                            |
| 4-11  | `self.addEventListener("install", ...)`     | Triggered when the browser first sees the SW. It pre-fetches and saves the `STATIC_ASSETS`.                                                                                                          |
| 13-22 | `self.addEventListener("activate", ...)`    | Triggered after installation. It cleans up old cache versions and claims current client control.                                                                                                     |
| 24-55 | `self.addEventListener("fetch", ...)`       | **The Core Engine.** Intercepts every network request and decides which strategy to use based on file type.                                                                                          |
| 29    | `if (url.origin !== self.origin) return;`   | Security check: Only manage requests belonging to your domain, letting external APIs pass through naturally.                                                                                         |
| 33-41 | `if (request.destination === "image" ...)`  | Uses **Stale-While-Revalidate** for images. Returns the cached version immediately while fetching a new one in the background.                                                                       |
| 44-51 | `if (request.destination === "font" ...)`   | Uses **Cache-First** for JS/CSS/Fonts. These files rarely change after a build, so they are served instantly from disk.                                                                              |
| 54    | `event.respondWith(networkFirst(request));` | Catch-all for HTML pages. Priority: Network -> Cache -> Offline Fallback.                                                                                                                            |
| 58-62 | `async function cacheFirst(...)`            | Logic to check the cache; if not found, it goes to the network once.                                                                                                                                 |
| 64-72 | `async function staleWhileRevalidate(...)`  | Logic to serve from cache and update the cache in the background for the next visit.                                                                                                                 |
| 74-93 | `async function networkFirst(...)`          | Logic to try the network first for up-to-date content. If the network fails (offline), it returns the last known cached page. If no cache exists, it serves the **Offline Fallback page** (line 89). |

---

## 2. `components/pwa/pwa-registry.tsx` (Bootstrapper)

This component bridge the Gap between React and the Browser's Service Worker API.

| Line  | Code                                    | Explanation                                                                                                        |
| :---- | :-------------------------------------- | :----------------------------------------------------------------------------------------------------------------- |
| 1     | `"use client";`                         | Marks this as a client-side component (required for `navigator` and `useEffect`).                                  |
| 6-21  | `useEffect(() => { ... }, []);`         | Runs once when the application hydrations on the client.                                                           |
| 9     | `"serviceWorker" in navigator`          | Feature detection: Checks if the user's browser supports Service Workers.                                          |
| 10    | `process.env.NODE_ENV === "production"` | **Safety Gate.** Ensures background caching only runs in production to avoid stale code issues during development. |
| 12-13 | `.register("/sw.js")`                   | Tells the browser to look for the SW file in the public root and begin its lifecycle.                              |
| 23    | `return null;`                          | This component has no UI; it exists purely for the side-effect of registration.                                    |

---

## 3. `hooks/use-pwa.ts` (Installation Manager)

This hook manages the "Add to Home Screen" behavior natively.

| Line  | Code                                              | Explanation                                                                                                                   |
| :---- | :------------------------------------------------ | :---------------------------------------------------------------------------------------------------------------------------- |
| 6-13  | `interface BeforeInstallPromptEvent ...`          | TypeScript definitions for the non-standard (but widely supported) installation event.                                        |
| 16-17 | `const [deferredPrompt, setDeferredPrompt] = ...` | Stores the browser's "Install" event so we can trigger it later via a custom button.                                          |
| 18    | `const [isInstallable, setIsInstallable] = ...`   | State to track if the "Download App" button should even be visible to the user.                                               |
| 21-26 | `const handler = (e: Event) => { ... }`           | Listening for the `beforeinstallprompt` event. We call `preventDefault()` to stop the browser from showing the generic popup. |
| 31-38 | `const checkDisplayMode = () => { ... }`          | Checks if the user is **already** using the PWA in standalone mode. If they are, we hide the install buttons.                 |
| 38    | `requestAnimationFrame(...)`                      | Schedules the check for the next frame. This avoids React 19's "Cascading Render" warnings by deferring the state update.     |
| 46-56 | `const install = async () => { ... }`             | The function tied to your "Download" buttons. It opens the native Android/iOS/Chrome install dialog.                          |
| 50    | `await deferredPrompt.userChoice;`                | Waits for the user to click "Install" or "Cancel" in the system dialog.                                                       |
| 58    | `return { install, isInstallable };`              | Exposes the functionality to any UI component (Navbar, Hero, Footer).                                                         |
