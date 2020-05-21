self.addEventListener('install', function(event) {
  // Perform install steps
var CACHE_NAME = 'my-site-cache-v1';
var urlsToCache = [
  '/assets/webfonts/fa-regular-400.woff2',
  '/assets/webfonts/fa-brands-400.woff2',
  '/index.html',
  '/list.html',
  '/about.html',
  '/resources.html',
  '/assets/images/confused_smiley.jpg',
  '/assets/js/mod.js',
  '/assets/js/filter.js',
  '/assets/js/scrollTop.js',
  '/assets/js/openNav.js',
  '/assets/js/wholeWords.js',
  '/assets/css/style.css',
  '/assets/css/all.css',
  '/assets/css/w3.css',
  '/favicon.ico',
];
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request)
      .then(function(response) {
        // Cache hit - return response
        if (response) {
          return response;
        }

        return fetch(event.request).then(
          function(response) {
            // Check if we received a valid response
            if(!response || response.status !== 200 || response.type !== 'basic') {
              return response;
            }

            // IMPORTANT: Clone the response. A response is a stream
            // and because we want the browser to consume the response
            // as well as the cache consuming the response, we need
            // to clone it so we have two streams.
            var responseToCache = response.clone();

            caches.open(CACHE_NAME)
              .then(function(cache) {
                cache.put(event.request, responseToCache);
              });

            return response;
          }
        );
      })
    );
});

self.addEventListener('activate', function(event) {

  var cacheWhitelist = ['pages-cache-v1', 'blog-posts-cache-v1'];

  event.waitUntil(
    caches.keys().then(function(cacheNames) {
      return Promise.all(
        cacheNames.map(function(cacheName) {
          if (cacheWhitelist.indexOf(cacheName) === -1) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});
