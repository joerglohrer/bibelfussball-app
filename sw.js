self.addEventListener('install', (e) => {
    e.waitUntil(
      caches.open('bibel-quiz-cache').then((cache) => {
        return cache.addAll([
          '/',
          '/index.html',
          '/icons/icon-192x192.png',
          '/icons/icon-512x512.png'
        ]);
      })
    );
  });
  
  self.addEventListener('fetch', (e) => {
    e.respondWith(
      caches.match(e.request).then((response) => {
        return response || fetch(e.request);
      })
    );
  });
  