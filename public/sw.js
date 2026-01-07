// Service Worker для кеширования статических ресурсов
const CACHE_NAME = 'star-wars-cache-v1'
const ASSETS_TO_CACHE = ['/star-wars/', '/star-wars/index.html']

// Стратегия кеширования для разных типов ресурсов
const CACHE_STRATEGIES = {
  images: 'cache-first', // Изображения - сначала кеш, потом сеть
  api: 'network-first', // API - сначала сеть, потом кеш
  static: 'cache-first', // Статика (JS, CSS) - сначала кеш
}

// Установка Service Worker
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS_TO_CACHE)
    }),
  )
  self.skipWaiting()
})

// Активация Service Worker
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            return caches.delete(cacheName)
          }
        }),
      )
    }),
  )
  self.clients.claim()
})

// Обработка запросов
self.addEventListener('fetch', (event) => {
  const { request } = event
  const url = new URL(request.url)

  // Пропускаем chrome-extension и другие не-http(s) протоколы
  if (!url.protocol.startsWith('http')) {
    return
  }

  // Определяем стратегию кеширования по типу ресурса
  if (isImageRequest(request)) {
    event.respondWith(cacheFirstStrategy(request))
  } else if (isApiRequest(request)) {
    event.respondWith(networkFirstStrategy(request))
  } else if (isStaticAsset(request)) {
    event.respondWith(cacheFirstStrategy(request))
  } else {
    event.respondWith(networkFirstStrategy(request))
  }
})

// Проверка, является ли запрос изображением
function isImageRequest(request) {
  const url = request.url
  return (
    url.includes('/assets/') &&
    (url.endsWith('.png') ||
      url.endsWith('.jpg') ||
      url.endsWith('.jpeg') ||
      url.endsWith('.gif') ||
      url.endsWith('.webp') ||
      url.endsWith('.svg'))
  )
}

// Проверка, является ли запрос API
function isApiRequest(request) {
  return request.url.includes('swapi.info/api')
}

// Проверка, является ли запрос статическим ресурсом
function isStaticAsset(request) {
  const url = request.url
  return (
    url.includes('/assets/') &&
    (url.endsWith('.js') ||
      url.endsWith('.css') ||
      url.endsWith('.ttf') ||
      url.endsWith('.woff') ||
      url.endsWith('.woff2'))
  )
}

// Стратегия: сначала кеш, потом сеть
async function cacheFirstStrategy(request) {
  const cachedResponse = await caches.match(request)

  if (cachedResponse) {
    return cachedResponse
  }

  try {
    const networkResponse = await fetch(request)

    if (networkResponse && networkResponse.status === 200) {
      const cache = await caches.open(CACHE_NAME)
      cache.put(request, networkResponse.clone())
    }

    return networkResponse
  } catch (error) {
    console.error('Fetch failed:', error)
    throw error
  }
}

// Стратегия: сначала сеть, потом кеш
async function networkFirstStrategy(request) {
  try {
    const networkResponse = await fetch(request)

    if (networkResponse && networkResponse.status === 200) {
      const cache = await caches.open(CACHE_NAME)
      cache.put(request, networkResponse.clone())
    }

    return networkResponse
  } catch (error) {
    const cachedResponse = await caches.match(request)

    if (cachedResponse) {
      return cachedResponse
    }

    throw error
  }
}
