// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: true,
  typescript: {
    strict: true
  },
  devtools: { enabled: true },
  components: false,
  modules: ['nuxt-viewport', 'nuxt-swiper'],
  app: {
    head: {
      htmlAttrs: { lang: 'ru' },
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      title: 'Благотворительный Фонд',
      link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.png' }]
    }
  },
  css: ['~/assets/scss/global.scss', '~/assets/scss/fonts.scss'],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@import "~/assets/scss/variables.scss";'
        }
      }
    }
  },
  viewport: {
    breakpoints: {
      desktop: 1160,
      tablet: 768,
      mobile: 600
    }
  },
  runtimeConfig: {
    public: {
      vkUrl: 'https://vk.com/darinadezhduu'
    }
  }
})
