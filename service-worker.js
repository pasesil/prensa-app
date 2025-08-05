const CACHE_NAME = 'prensa-app-v1';
const ASSETS = ['/', 'index.html', 'styles.css', 'app.js', 'manifest.json'];
self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE_NAME).then(c => c.addAll(ASSETS)));
});
self.addEventListener('fetch', e => {
  e.respondWith(caches.match(e.request).then(r => r || fetch(e.request)).catch(() => caches.match('/')));
});
