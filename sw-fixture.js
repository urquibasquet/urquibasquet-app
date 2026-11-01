// Service worker mínimo (sin caché): solo permite que Android ofrezca "Instalar app".
self.addEventListener('install', function () { self.skipWaiting(); });
self.addEventListener('activate', function (e) { e.waitUntil(self.clients.claim()); });
self.addEventListener('fetch', function () {});
