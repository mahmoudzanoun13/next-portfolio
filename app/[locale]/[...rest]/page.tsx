/*
  Because your not-found.tsx is placed inside the [locale] folder, Next.js doesn't natively know it should route unknown URLs (like /en/fake-page) there. Instead, it bypasses the [locale] system completely and hits the default, built-in global unstyled Next.js 404 template.

  The Fix: I just created a wildcard "catch-all" dynamic page at app/[locale]/[...rest]/page.tsx that instantly hits { notFound() }. Now, whenever someone navigates to a URL that doesn't exist under a locale folder, the router catches that request and immediately executes the localized not-found.tsx UI perfectly!
*/

import { notFound } from "next/navigation";

export default function CatchAll() {
  notFound();
}
