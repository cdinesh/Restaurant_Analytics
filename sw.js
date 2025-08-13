/* Service Worker for Restaurant_Analytics (GitHub Pages project)
 * Scope/base path is /Restaurant_Analytics/
 * Strategy:
 *  - Cache-first for same-origin static assets under the base path
 *  - Network-first for navigations (with cached fallback)
 *  - Clean old caches on activate
 */

const BASE_PATH = "/Restaurant_Analytics/";
const CACHE_VERSION = "v1.0.0"; // bump to force an update
const RUNTIME_CACHE = `ra-runtime-${CACHE_VERSION}`;

// Try to pre-warm the cache with the app shell (best-effort)
const APP_SHELL = [
  `${BASE_PATH}`,
  `${BASE_PATH}index.html`,
  `${BASE_PATH}manifest.webmanifest`,
  `${BASE_PATH}favicon.ico`
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    (async () => {
      const cache = await caches.open(RUNTIME_CACHE);
      // Use allSettled so missing files (e.g., favicon) don't fail install
      await Promise.allSettled(APP_SHELL.map((url) => cache.add(url)));
      await self.skipWaiting();
    })()
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    (async () => {
      // Delete old caches
      const keys = await caches.keys();
      await Promise.all(
        keys
          .filter((k) => k.startsWith("ra-runtime-") && k !== RUNTIME_CACHE)
          .map((k) => caches.delete(k))
      );
      await self.clients.claim();
    })()
  );
});

self.addEventListener("fetch", (event) => {
  const { request } = event;

  // Only handle GET
  if (request.method !== "GET") return;

  const url = new URL(request.url);
  const isSameOrigin = url.origin === self.location.origin;
  const isUnderBase = url.pathname.startsWith(BASE_PATH);

  // For top-level navigations: network-first, fallback to cache, then a minimal offline page
  if (request.mode === "navigate") {
    event.respondWith(
      (async () => {
        try {
          const response = await fetch(request);
          // Cache a copy of successful navigations (best-effort)
          const cache = await caches.open(RUNTIME_CACHE);
          cache.put(request, response.clone());
          return response;
        } catch (err) {
          const cache = await caches.open(RUNTIME_CACHE);
          const cached = await cache.match(request) || await cache.match(`${BASE_PATH}index.html`);
          return cached || new Response(
            "<!doctype html><meta charset='utf-8'><title>Offline</title><h1>Offline</h1><p>Content is unavailable right now.</p>",
            { headers: { "Content-Type": "text/html; charset=utf-8" } }
          );
        }
      })()
    );
    return;
  }

  // For same-origin assets under the project path: stale-while-revalidate
  if (isSameOrigin && isUnderBase) {
    event.respondWith(
      (async () => {
        const cache = await caches.open(RUNTIME_CACHE);
        const cached = await cache.match(request);
        const networkPromise = fetch(request)
          .then((response) => {
            // Cache successful responses
            if (response && response.status === 200 && response.type === "basic") {
              cache.put(request, response.clone());
            }
            return response;
          })
          .catch(() => undefined);

        // Return cached immediately if present; otherwise wait for network
        return cached || networkPromise || fetch(request);
      })()
    );
    return;
  }

  // Default: pass-through (e.g., third-party requests/CDNs)
  // You can add more runtime caching routes here if needed.
});

