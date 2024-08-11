importScripts('https://storage.googleapis.com/workbox-cdn/releases/6.0.2/workbox-sw.js')










/*
workbox.routing.registerRoute(
    ({request}) => 
      request.destination === 'image', 
      
    new workbox.strategies.CacheFirst()
    
)*/

//window.navigator.standalone


const cacheName = 'cache-v1';
const precacheResources = ['/','/index.html', 'assets/maps/tiles/tiles.js', '/assets/fonts/Press_Start_2P/PressStart2P-Regular.ttf', '/manifest.json', '/assets/tilesets/background-tiles.json', '/assets/tilesets/foreground-tiles.json', '/assets/maps/World_1.map'  ,'/assets/style.css', '/src/main.js', '/src/classes/game/camera.js', '/src/classes/gui/gui-button-element.js', '/src/classes/gui/gui-checkbox-element.js', , '/src/classes/gui/gui-deadspace.js', '/src/classes/gui/gui-element.js', '/src/classes/gui/gui-font.js', , '/src/classes/gui/gui-image-element.js', '/src/classes/gui/gui-renderer.js', '/src/classes/gui/gui-slider-element.js', '/src/classes/gui/gui-style.js', '/src/classes/gui/gui-text-element.js', '/src/classes/touch/touch-handler.js', '/src/classes/aabb.js', '/src/classes/screen.js', '/src/classes/sprite.js', '/src/classes/tile.js', , '/src/classes/tilemap.js', '/src/classes/vector.js', '/src/classes/canvas-transforms.js', '/src/functions/canvas-transforms.js','/src/functions/colors.js', '/src/functions/draw-text.js'];

self.addEventListener('install', (event) => {
  console.log('Service worker install event!');
  event.waitUntil(caches.open(cacheName).then(async(cache) => 
    {
      console.log('ServiceWorker: Caching files:', precacheResources.length, precacheResources);
      try {
        ok = await cache.addAll(precacheResources);
      } catch (err) {
        console.error('sw: cache.addAll');
        for (let i of precacheResources) {
          try {
            ok = await cache.add(i);
          } catch (err) {
            console.warn('sw: cache.add',i);
          }
        }
      }
    }
));
});

self.addEventListener('activate', (event) => {
  
  console.log('Service worker activate event!');
});


// When there's an incoming fetch request, try and respond with a precached resource, otherwise fall back to the network
self.addEventListener('fetch', (event) => {
  test_var = "test"
  
  console.log('Fetch intercepted for:', event.request.url);
  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      if (cachedResponse) {
        return cachedResponse;
      }
      console.log("fail")
      return fetch(event.request);
    }),
  );
});
