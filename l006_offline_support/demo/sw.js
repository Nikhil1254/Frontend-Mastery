// constants
const CACHE_NAME = "demo/v1"; //app_name/version --> standard practice

const CACHE_FILES = ["index.html", "assets/photo.png", "src/script.js", "manifest.json"];


self.addEventListener("install", (e) => {
  // waitUntil takes a promise and it keeps event alive till the promise is not fullfilled.
  console.log(`installing service worker`)
  e.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      cache.addAll(CACHE_FILES);
    })
  )
})

self.addEventListener("activate", (e) => {
  console.log(`activating service worker.`)
  e.waitUntil(
    caches.keys()
      .then(keys => {
        return Promise.all(keys.map(key => {
          if (key !== CACHE_NAME) {
            return caches.delete(key);
          }
        }))
      })
      .catch(console.log)
  )
})

self.addEventListener("fetch", (e) => {
  // we can intercept network request here
  // 2 approaches to provide offline support
  // 1) make network request and update the cache, use cache as a fallback --> best approach
  // 2) first check in cache and if available return, if not available make network call and update cache as well and return res --> bad (as cache will not be upto date with server data)

  console.log(`request :`, e.request);
  // approach 1 -->
  e.respondWith(
    fetch(e.request)
      .then(res => {
        console.log(`returning from server`);
        const clonedData = res.clone();
        caches.open(CACHE_NAME)
          .then((cache) => {
            cache.add(e.request, clonedData);
          })
        return res;
      })
      .catch((err) => {
        console.log(`returning from cache !`, err);
        caches.match(e.request).then(file => file);
      }))

})