import { version, frckl as config } from '../../package.json';

// Update 'version' if you need to refresh the cache
const baseUrl = 'https://webgefrickel.de';
const cacheVersion = version; // gets replaced with package.version
const assetsPath = config.dest.replace(config.root, '/');
const alwaysCache = [
  '/',
  '/offline',
  '/contact',
  `${assetsPath}img/404.png`,
  `${assetsPath}js/main.min.js`,
  `${assetsPath}css/main.min.css`,
  `${assetsPath}img/sprite.svg`
];

const neverCache = [
  '/panel',
  '/serviceworker.js',
  '/micropub.php'
];

// Store core files in a cache (including a page to display when offline)
const updateStaticCache = () => caches.open(cacheVersion)
  .then(cache => cache.addAll(alwaysCache));

self.addEventListener('install', e => {
  e.waitUntil(updateStaticCache());
});

self.addEventListener('activate', e => {
  // Remove caches whose name is no longer valid
  e.waitUntil(caches.keys()
    .then(keys => Promise.all(
      keys
        .filter(key => key.indexOf(cacheVersion) !== 0)
        .map(key => caches.delete(key))
    ))
  );
});

self.addEventListener('fetch', e => {
  let request = e.request;

  // Always fetch non-GET requests from the network
  if (request.method !== 'GET') {
    e.respondWith(fetch(request).catch(() => caches.match('/offline')));
    return;
  }

  // if we have a reqest, that matches in neverCache, always return from network
  if (neverCache.some(item => (new RegExp(`\\b${item}\\b`)).test(request.url.replace(baseUrl, '')))) {
    e.respondWith(fetch(request).catch(() => caches.match('/offline')));
    return;
  }

  // For HTML requests, try the network first, fall back to the cache, finally the offline page
  if (request.headers.get('Accept').indexOf('text/html') !== -1) {
    // Fix for Chrome bug: https://code.google.com/p/chromium/issues/detail?id=573937
    if (request.mode !== 'navigate') {
      request = new Request(request.url, {
        method: 'GET',
        headers: request.headers,
        mode: request.mode === 'navigate' ? 'cors' : request.mode,
        credentials: request.credentials,
        redirect: request.redirect
      });
    }

    e.respondWith(fetch(request)
      .then(response => {
        const responseClone = response.clone();

        // Stash a copy of this page in the cache
        caches.open(cacheVersion)
          .then(cache => {
            cache.put(request, responseClone);
          });

        return response;
      })

      .catch(() => caches.match(request)
        .then(response => response || caches.match('/offline'))
      )
    );
    return;
  }

  // For non-HTML requests, look in the cache first, fall back to the network
  e.respondWith(caches.match(request)
    .then(response => response || fetch(request)
      .catch(() => {
        // If the request is for an image, show an offline placeholder
        if (request.headers.get('Accept').indexOf('image') !== -1) {
          return new Response(`
            <svg width="400" height="300" role="img" aria-labelledby="offline-title"
              viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">
              <title id="offline-title">Offline</title>
              <g fill="none" fill-rule="evenodd">
                <path fill="#D8D8D8" d="M0 0h400v300H0z"/>
                <text fill="#9B9B9B" font-family="Arial, sans-serif" font-size="72" font-weight="bold">
                  <tspan x="93" y="172">offline</tspan>
                </text>
              </g>
            </svg>`,
            {
              headers: {
                'Content-Type': 'image/svg+xml'
              }
            }
          );
        }

        return false;
      })
    )
  );
});
