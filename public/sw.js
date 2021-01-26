console.log(this);
this.addEventListener('install', function (event) {
  event.waitUntil(
    caches.open('v1').then(cache => {
      console.log(cache);
      return cache.addAll([
        '/api/getName'
      ])
    })
  )
})

this.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request).then(res => {
      return res || fetch(event.request).then(response => {
        console.log('🦆进来了');
        return caches.open('v1').then(cache => {
          cache.put(event.request, response.clone())
          return response
        })
      })
    })
      .catch(() => {
        console.log('🐥进来了');
        return caches.match('/api/getName')
      })
  )
})

this.addEventListener('activate', function () {
  console.log('激活了');
})