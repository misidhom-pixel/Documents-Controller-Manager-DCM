
```javascript
const CACHE_NAME = 'taranem-app-v2';
const ASSETS = ['./','./index.html','https://fonts.googleapis.com/css2?family=Cairo:wght@400;700&display=swap'];
self.addEventListener('install', (e) => { e.waitUntil(caches.open(CACHE_NAME).then((cache) => { return cache.addAll(ASSETS); })); });
self.addEventListener('activate', (e) => { e.waitUntil(caches.keys().then((keys) => { return Promise.all(keys.filter(key => key !== CACHE_NAME).map(key => caches.delete(key))); })); });
self.addEventListener('fetch', (e) => { e.respondWith(caches.match(e.request).then((response) => { return response || fetch(e.request); })); });
```