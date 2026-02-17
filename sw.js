const CACHE = 's1-trainer-v4';
const ASSETS = ['./','./index.html','./styles.css','./app.js','./manifest.webmanifest'];
self.addEventListener('install', (e)=>{
  e.waitUntil(caches.open(CACHE).then(c=>c.addAll(ASSETS)).then(()=>self.skipWaiting()));
});
self.addEventListener('activate', (e)=>{
  e.waitUntil(self.clients.claim());
});
self.addEventListener('fetch', (e)=>{
  const req = e.request;
  e.respondWith(caches.match(req).then(res=>res||fetch(req).then(net=>{
    const copy = net.clone();
    caches.open(CACHE).then(c=>c.put(req, copy)).catch(()=>{});
    return net;
  }).catch(()=>res)));
});
