const baseUrl = process.env.BASE_URL

export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  generate: {
    routes: ['/'],
  },

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'example-blog-nuxt',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/stylelint
    '@nuxtjs/stylelint-module',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    'druxt-site'
  ],

  // Druxt: https://druxtjs.org
  druxt: {
    baseUrl,
    // Disable deprecated fields.
    entity: { components: { fields: false }}
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },

  telemetry: true
}
