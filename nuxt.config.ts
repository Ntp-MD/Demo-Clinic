export default defineNuxtConfig({
  devtools: { enabled: false },

  typescript: {
    strict: true,
    shim: false
  },

  css: ['~/assets/styles/main.css'],

  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1.0',
      title: 'Demo Clinic',
      meta: [
        { name: 'description', content: 'Demo Clinic — Holistic medical wellness and aesthetic care, designed around you.' }
      ],
      link: [
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400;1,600&family=Inter:wght@300;400;500;600&display=swap'
        }
      ]
    }
  },

  compatibilityDate: '2024-04-03'
})
