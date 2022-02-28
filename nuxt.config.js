import colors from 'vuetify/es5/util/colors'

export default {
  srcDir: 'resources/nuxt',
  /*
   ** Nuxt rendering mode
   ** See https://nuxtjs.org/api/configuration-mode
   */
  ssr: false,
  /*
   ** Headers of the page
   ** See https://nuxtjs.org/api/configuration-head
   */
  head: {
    titleTemplate: '%s - ' + process.env.APP_NAME,
    title: process.env.APP_NAME || '',
    meta: [
      { charset: 'utf-8' },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1',
      },
      {
        hid: 'description',
        name: 'description',
        content: process.env.APP_NAME || '',
      },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },
  /*
   ** Customize the progress-bar color
   */
  loading: {
    color: 'green',
    height: '5px',
  },
  /*
   ** Global CSS
   */
  css: ['@mdi/font/scss/materialdesignicons.scss', '~/assets/css/style.scss'],
  /*
   ** Plugins to load before mounting the App
   ** https://nuxtjs.org/guide/plugins
   */
  plugins: [
    '~/plugins/vue-gates',
    '~/plugins/vuetify-datetime-picker',
    '~/plugins/dragable',
    { src: '~/plugins/tiptap-vuetify', mode: 'client' },
  ],
  /*
   ** Auto import components
   ** See https://nuxtjs.org/api/configuration-components
   */
  components: true,
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
    '@nuxtjs/vuetify',
    // '@nuxtjs/web-vitals',
    // '@nuxt/image',
    // '@nuxtjs/google-fonts',
  ],

  // googleFonts: {
  //   families: {
  //     Roboto: [300, 400, 500],
  //   },
  //   display: 'swap',
  // },

  // webVitals: {
  //   // provider: '', // auto detectd
  //   debug: false,
  //   disabled: false
  // },

  /*
   ** Nuxt.js modules
   */
  modules: [
    'nuxt-laravel',
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    '@nuxtjs/auth-next',
    'nuxt-sweetalert2',
    'nuxt-seo-meta',
    '@luxdamore/nuxt-prune-html',
    'nuxt-precompress',
  ],

  auth: {
    localStorage: {
      prefix: process.env.AUTH_PREFIX,
    },
    cookie: {
      prefix: process.env.AUTH_PREFIX,
    },
    strategies: {
      laravelSanctum: {
        provider: 'laravel/sanctum',
        url: '/',
        endpoints: {
          login: {
            url: '/api/auth/login',
          },
          logout: {
            url: '/api/auth/logout',
          },
          user: {
            url: '/api/auth/user',
          },
        },
      },
      local: {
        scheme: 'refresh',
        token: {
          property: 'token',
          global: true,
          maxAge: 60 * 60 * 8,
          // required: true,
          // type: 'Bearer'
        },
        refreshToken: {
          property: 'token',
          data: 'token',
          maxAge: 60 * 60 * 24 * 30,
        },
        user: {
          property: 'user',
          autoFetch: true,
        },
        endpoints: {
          login: { url: '/api/auth/login', method: 'post' },
          logout: { url: '/api/auth/logout', method: 'post' },
          user: { url: '/api/auth/user', method: 'get' },
          refresh: { url: '/api/auth/refresh', method: 'post' },
        },
      },
    },
    redirect: {
      login: '/auth/login',
      logout: '/',
      home: '/dashboard/',
    },
  },
  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en',
    },
  },
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {
    debug: false,
    credentials: true,
    baseURL: process.env.APP_API_URL, // Used as fallback if no runtime config is provided
  },
  /*
   ** vuetify module configuration
   ** https://github.com/nuxt-community/vuetify-module
   */
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    treeShake: true,
    defaultAssets: {
      font: {
        family: 'Roboto',
      },
      icons: 'mdi',
    },
    theme: {
      dark: false,
      themes: {
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3,
        },
        light: {
          secondary: '#243238',
        },
      },
    },
  },
  router: {
    base: '/',
  },
  /*
   ** Build configuration
   ** See https://nuxtjs.org/api/configuration-build/
   */
  build: {
    postcss: {
      plugins: {
        'postcss-url': false,
      },
      preset: {
        autoprefixer: {},
      },
    },
    transpile: ['vuetify/lib', 'tiptap-vuetify'],
  },
}