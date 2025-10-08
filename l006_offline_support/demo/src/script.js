// check if service worker supported or not by our browser

if (navigator.serviceWorker) {
  // Register the service worker.
  navigator.serviceWorker.register("sw.js")
    .then(res => console.log("Service worker registred successfully."))
    .catch(err => console.log(`Error registering service worker: `, err))
}

