// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: ['@pinia/nuxt'],
  css: ['~/assets/css/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  devServer: {
    port: 3333,
  },
  ssr: false,
  app: {
    baseURL: '/talkiee2/',
    buildAssetsDir: 'assets',
    head: {
      title: 'Talkiee – онлайн кинотеатр',
      link: [{ rel: 'icon', type: 'image/png', href: '/talkiee2/favicon.png' }],
    },
    pageTransition: { name: 'page', mode: 'out-in' },
  },
})
