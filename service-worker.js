const CACHE_NAME = "bill-planner-v4";
const APP_SHELL = [
  "./",
  "./index.html",
  "./style.css",
  "./script.js",
  "./manifest.json",
  "https://cdn.jsdelivr.net/npm/chart.js",
  "https://cdn.jsdelivr.net/npm/tesseract.js@5/dist/tesseract.min.js",
];

const LOCALHOST_NAMES = new Set(["localhost", "127.0.0.1"]);
const CORE_FILES = new Set(["/", "/index.html", "/style.css", "/script.js", "/manifest.json"]);

function isHttpRequest(request) {
  return request.url.startsWith("http://") || request.url.startsWith("https://");
}

function isAppNavigation(request) {
  return request.mode === "navigate";
}

function isSameOriginAppAsset(requestUrl) {
  const path = requestUrl.pathname === "" ? "/" : requestUrl.pathname;
  return requestUrl.origin === self.location.origin && CORE_FILES.has(path);
}

async function networkFirst(request) {
  const cache = await caches.open(CACHE_NAME);

  try {
    const networkResponse = await fetch(request, { cache: "no-store" });
    if (networkResponse && networkResponse.ok) {
      cache.put(request, networkResponse.clone());
    }
    return networkResponse;
  } catch (error) {
    const cachedResponse = await caches.match(request);
    if (cachedResponse) return cachedResponse;

    if (request.mode === "navigate") {
      const fallback = await caches.match("./index.html");
      if (fallback) return fallback;
    }

    throw error;
  }
}

async function staleWhileRevalidate(request) {
  const cache = await caches.open(CACHE_NAME);
  const cachedResponse = await caches.match(request);

  const networkPromise = fetch(request)
    .then(function (networkResponse) {
      if (networkResponse && networkResponse.ok) {
        cache.put(request, networkResponse.clone());
      }
      return networkResponse;
    })
    .catch(function () {
      return null;
    });

  return cachedResponse || networkPromise;
}

self.addEventListener("install", function (event) {
  event.waitUntil(
    caches.open(CACHE_NAME).then(function (cache) {
      return cache.addAll(APP_SHELL);
    })
  );
  self.skipWaiting();
});

self.addEventListener("activate", function (event) {
  event.waitUntil(
    caches.keys()
      .then(function (keys) {
        return Promise.all(
          keys.map(function (key) {
            if (key !== CACHE_NAME) {
              return caches.delete(key);
            }
            return Promise.resolve();
          })
        );
      })
      .then(function () {
        return self.clients.claim();
      })
  );
});

self.addEventListener("fetch", function (event) {
  const request = event.request;

  if (request.method !== "GET") return;
  if (!isHttpRequest(request)) return;

  const requestUrl = new URL(request.url);

  if (isAppNavigation(request) || isSameOriginAppAsset(requestUrl)) {
    event.respondWith(networkFirst(request));
    return;
  }

  event.respondWith(staleWhileRevalidate(request));
});
