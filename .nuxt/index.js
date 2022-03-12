import Vue from 'vue'
import Vuex from 'vuex'
import Meta from 'vue-meta'
import ClientOnly from 'vue-client-only'
import NoSsr from 'vue-no-ssr'
import { createRouter } from './router.js'
import NuxtChild from './components/nuxt-child.js'
import NuxtError from '..\\nuxt\\layouts\\error.vue'
import Nuxt from './components/nuxt.js'
import App from './App.js'
import { setContext, getLocation, getRouteData, normalizeError } from './utils'
import { createStore } from './store.js'

/* Plugins */

import nuxt_plugin_plugin_d79d8d04 from 'nuxt_plugin_plugin_d79d8d04' // Source: .\\components\\plugin.js (mode: 'all')
import nuxt_plugin_plugin_a631b994 from 'nuxt_plugin_plugin_a631b994' // Source: .\\vuetify\\plugin.js (mode: 'all')
import nuxt_plugin_plugin_6be43332 from 'nuxt_plugin_plugin_6be43332' // Source: .\\nuxt-seo-meta\\plugin.js (mode: 'all')
import nuxt_plugin_srcplugin774ba1e9_5dc974b4 from 'nuxt_plugin_srcplugin774ba1e9_5dc974b4' // Source: .\\src.plugin.774ba1e9.js (mode: 'client')
import nuxt_plugin_workbox_d03e6906 from 'nuxt_plugin_workbox_d03e6906' // Source: .\\workbox.js (mode: 'client')
import nuxt_plugin_metaplugin_238a1a06 from 'nuxt_plugin_metaplugin_238a1a06' // Source: .\\pwa\\meta.plugin.js (mode: 'all')
import nuxt_plugin_iconplugin_1a3acf1e from 'nuxt_plugin_iconplugin_1a3acf1e' // Source: .\\pwa\\icon.plugin.js (mode: 'all')
import nuxt_plugin_axios_55447aa1 from 'nuxt_plugin_axios_55447aa1' // Source: .\\axios.js (mode: 'all')
import nuxt_plugin_vuegates_72bed74b from 'nuxt_plugin_vuegates_72bed74b' // Source: ..\\nuxt\\plugins\\vue-gates (mode: 'all')
import nuxt_plugin_vuetifydatetimepicker_cdb158aa from 'nuxt_plugin_vuetifydatetimepicker_cdb158aa' // Source: ..\\nuxt\\plugins\\vuetify-datetime-picker (mode: 'all')
import nuxt_plugin_dragable_7e1b63f8 from 'nuxt_plugin_dragable_7e1b63f8' // Source: ..\\nuxt\\plugins\\dragable (mode: 'all')
import nuxt_plugin_vuetifymoney_56b8af0b from 'nuxt_plugin_vuetifymoney_56b8af0b' // Source: ..\\nuxt\\plugins\\vuetify-money (mode: 'all')
import nuxt_plugin_tiptapvuetify_576a6ddf from 'nuxt_plugin_tiptapvuetify_576a6ddf' // Source: ..\\nuxt\\plugins\\tiptap-vuetify (mode: 'client')
import nuxt_plugin_auth_2fc4d66f from 'nuxt_plugin_auth_2fc4d66f' // Source: .\\auth.js (mode: 'all')

// Component: <ClientOnly>
Vue.component(ClientOnly.name, ClientOnly)

// TODO: Remove in Nuxt 3: <NoSsr>
Vue.component(NoSsr.name, {
  ...NoSsr,
  render (h, ctx) {
    if (process.client && !NoSsr._warned) {
      NoSsr._warned = true

      console.warn('<no-ssr> has been deprecated and will be removed in Nuxt 3, please use <client-only> instead')
    }
    return NoSsr.render(h, ctx)
  }
})

// Component: <NuxtChild>
Vue.component(NuxtChild.name, NuxtChild)
Vue.component('NChild', NuxtChild)

// Component NuxtLink is imported in server.js or client.js

// Component: <Nuxt>
Vue.component(Nuxt.name, Nuxt)

Object.defineProperty(Vue.prototype, '$nuxt', {
  get() {
    const globalNuxt = this.$root.$options.$nuxt
    if (process.client && !globalNuxt && typeof window !== 'undefined') {
      return window.$nuxt
    }
    return globalNuxt
  },
  configurable: true
})

Vue.use(Meta, {"keyName":"head","attribute":"data-n-head","ssrAttribute":"data-n-head-ssr","tagIDKeyName":"hid"})

const defaultTransition = {"name":"page","mode":"out-in","appear":true,"appearClass":"appear","appearActiveClass":"appear-active","appearToClass":"appear-to"}

const originalRegisterModule = Vuex.Store.prototype.registerModule

function registerModule (path, rawModule, options = {}) {
  const preserveState = process.client && (
    Array.isArray(path)
      ? !!path.reduce((namespacedState, path) => namespacedState && namespacedState[path], this.state)
      : path in this.state
  )
  return originalRegisterModule.call(this, path, rawModule, { preserveState, ...options })
}

async function createApp(ssrContext, config = {}) {
  const router = await createRouter(ssrContext, config)

  const store = createStore(ssrContext)
  // Add this.$router into store actions/mutations
  store.$router = router

  // Create Root instance

  // here we inject the router and store to all child components,
  // making them available everywhere as `this.$router` and `this.$store`.
  const app = {
    head: {"titleTemplate":"%s - TIZ CRM","title":"TIZ CRM","meta":[{"charset":"utf-8"},{"name":"viewport","content":"width=device-width, initial-scale=1"},{"hid":"description","name":"description","content":"TIZ CRM"},{"hid":"charset","charset":"utf-8"},{"hid":"mobile-web-app-capable","name":"mobile-web-app-capable","content":"yes"},{"hid":"og:type","name":"og:type","property":"og:type","content":"website"},{"hid":"og:description","name":"og:description","property":"og:description","content":"\u003Cp align=\"center\"\u003E\u003Ca href=\"https:\u002F\u002Flaravel.com\" target=\"_blank\"\u003E\u003Cimg src=\"https:\u002F\u002Fraw.githubusercontent.com\u002Flaravel\u002Fart\u002Fmaster\u002Flogo-lockup\u002F5%20SVG\u002F2%20CMYK\u002F1%20Full%20Color\u002Flaravel-logolockup-cmyk-red.svg\" width=\"400\"\u003E\u003C\u002Fa\u003E\u003C\u002Fp\u003E"}],"link":[{"rel":"icon","type":"image\u002Fx-icon","href":"\u002Ffavicon.ico"},{"rel":"stylesheet","type":"text\u002Fcss","href":"https:\u002F\u002Ffonts.googleapis.com\u002Fcss?family=Roboto:100,300,400,500,700,900&display=swap"},{"rel":"stylesheet","type":"text\u002Fcss","href":"https:\u002F\u002Fcdn.jsdelivr.net\u002Fnpm\u002F@mdi\u002Ffont@latest\u002Fcss\u002Fmaterialdesignicons.min.css"},{"hid":"shortcut-icon","rel":"shortcut icon","href":"\u002F_nuxt\u002Ficons\u002Ficon_64x64.ce3f9f.png"},{"hid":"apple-touch-icon","rel":"apple-touch-icon","href":"\u002F_nuxt\u002Ficons\u002Ficon_512x512.ce3f9f.png","sizes":"512x512"},{"rel":"manifest","href":"\u002F_nuxt\u002Fmanifest.072a91ca.json","hid":"manifest"}],"style":[],"script":[],"htmlAttrs":{"lang":"en"}},

    store,
    router,
    nuxt: {
      defaultTransition,
      transitions: [defaultTransition],
      setTransitions (transitions) {
        if (!Array.isArray(transitions)) {
          transitions = [transitions]
        }
        transitions = transitions.map((transition) => {
          if (!transition) {
            transition = defaultTransition
          } else if (typeof transition === 'string') {
            transition = Object.assign({}, defaultTransition, { name: transition })
          } else {
            transition = Object.assign({}, defaultTransition, transition)
          }
          return transition
        })
        this.$options.nuxt.transitions = transitions
        return transitions
      },

      err: null,
      dateErr: null,
      error (err) {
        err = err || null
        app.context._errored = Boolean(err)
        err = err ? normalizeError(err) : null
        let nuxt = app.nuxt // to work with @vue/composition-api, see https://github.com/nuxt/nuxt.js/issues/6517#issuecomment-573280207
        if (this) {
          nuxt = this.nuxt || this.$options.nuxt
        }
        nuxt.dateErr = Date.now()
        nuxt.err = err
        // Used in src/server.js
        if (ssrContext) {
          ssrContext.nuxt.error = err
        }
        return err
      }
    },
    ...App
  }

  // Make app available into store via this.app
  store.app = app

  const next = ssrContext ? ssrContext.next : location => app.router.push(location)
  // Resolve route
  let route
  if (ssrContext) {
    route = router.resolve(ssrContext.url).route
  } else {
    const path = getLocation(router.options.base, router.options.mode)
    route = router.resolve(path).route
  }

  // Set context to app.context
  await setContext(app, {
    store,
    route,
    next,
    error: app.nuxt.error.bind(app),
    payload: ssrContext ? ssrContext.payload : undefined,
    req: ssrContext ? ssrContext.req : undefined,
    res: ssrContext ? ssrContext.res : undefined,
    beforeRenderFns: ssrContext ? ssrContext.beforeRenderFns : undefined,
    ssrContext
  })

  function inject(key, value) {
    if (!key) {
      throw new Error('inject(key, value) has no key provided')
    }
    if (value === undefined) {
      throw new Error(`inject('${key}', value) has no value provided`)
    }

    key = '$' + key
    // Add into app
    app[key] = value
    // Add into context
    if (!app.context[key]) {
      app.context[key] = value
    }

    // Add into store
    store[key] = app[key]

    // Check if plugin not already installed
    const installKey = '__nuxt_' + key + '_installed__'
    if (Vue[installKey]) {
      return
    }
    Vue[installKey] = true
    // Call Vue.use() to install the plugin into vm
    Vue.use(() => {
      if (!Object.prototype.hasOwnProperty.call(Vue.prototype, key)) {
        Object.defineProperty(Vue.prototype, key, {
          get () {
            return this.$root.$options[key]
          }
        })
      }
    })
  }

  // Inject runtime config as $config
  inject('config', config)

  if (process.client) {
    // Replace store state before plugins execution
    if (window.__NUXT__ && window.__NUXT__.state) {
      store.replaceState(window.__NUXT__.state)
    }
  }

  // Add enablePreview(previewData = {}) in context for plugins
  if (process.static && process.client) {
    app.context.enablePreview = function (previewData = {}) {
      app.previewData = Object.assign({}, previewData)
      inject('preview', previewData)
    }
  }
  // Plugin execution

  if (typeof nuxt_plugin_plugin_d79d8d04 === 'function') {
    await nuxt_plugin_plugin_d79d8d04(app.context, inject)
  }

  if (typeof nuxt_plugin_plugin_a631b994 === 'function') {
    await nuxt_plugin_plugin_a631b994(app.context, inject)
  }

  if (typeof nuxt_plugin_plugin_6be43332 === 'function') {
    await nuxt_plugin_plugin_6be43332(app.context, inject)
  }

  if (process.client && typeof nuxt_plugin_srcplugin774ba1e9_5dc974b4 === 'function') {
    await nuxt_plugin_srcplugin774ba1e9_5dc974b4(app.context, inject)
  }

  if (process.client && typeof nuxt_plugin_workbox_d03e6906 === 'function') {
    await nuxt_plugin_workbox_d03e6906(app.context, inject)
  }

  if (typeof nuxt_plugin_metaplugin_238a1a06 === 'function') {
    await nuxt_plugin_metaplugin_238a1a06(app.context, inject)
  }

  if (typeof nuxt_plugin_iconplugin_1a3acf1e === 'function') {
    await nuxt_plugin_iconplugin_1a3acf1e(app.context, inject)
  }

  if (typeof nuxt_plugin_axios_55447aa1 === 'function') {
    await nuxt_plugin_axios_55447aa1(app.context, inject)
  }

  if (typeof nuxt_plugin_vuegates_72bed74b === 'function') {
    await nuxt_plugin_vuegates_72bed74b(app.context, inject)
  }

  if (typeof nuxt_plugin_vuetifydatetimepicker_cdb158aa === 'function') {
    await nuxt_plugin_vuetifydatetimepicker_cdb158aa(app.context, inject)
  }

  if (typeof nuxt_plugin_dragable_7e1b63f8 === 'function') {
    await nuxt_plugin_dragable_7e1b63f8(app.context, inject)
  }

  if (typeof nuxt_plugin_vuetifymoney_56b8af0b === 'function') {
    await nuxt_plugin_vuetifymoney_56b8af0b(app.context, inject)
  }

  if (process.client && typeof nuxt_plugin_tiptapvuetify_576a6ddf === 'function') {
    await nuxt_plugin_tiptapvuetify_576a6ddf(app.context, inject)
  }

  if (typeof nuxt_plugin_auth_2fc4d66f === 'function') {
    await nuxt_plugin_auth_2fc4d66f(app.context, inject)
  }

  // Lock enablePreview in context
  if (process.static && process.client) {
    app.context.enablePreview = function () {
      console.warn('You cannot call enablePreview() outside a plugin.')
    }
  }

  // Wait for async component to be resolved first
  await new Promise((resolve, reject) => {
    // Ignore 404s rather than blindly replacing URL in browser
    if (process.client) {
      const { route } = router.resolve(app.context.route.fullPath)
      if (!route.matched.length) {
        return resolve()
      }
    }
    router.replace(app.context.route.fullPath, resolve, (err) => {
      // https://github.com/vuejs/vue-router/blob/v3.4.3/src/util/errors.js
      if (!err._isRouter) return reject(err)
      if (err.type !== 2 /* NavigationFailureType.redirected */) return resolve()

      // navigated to a different route in router guard
      const unregister = router.afterEach(async (to, from) => {
        if (process.server && ssrContext && ssrContext.url) {
          ssrContext.url = to.fullPath
        }
        app.context.route = await getRouteData(to)
        app.context.params = to.params || {}
        app.context.query = to.query || {}
        unregister()
        resolve()
      })
    })
  })

  return {
    store,
    app,
    router
  }
}

export { createApp, NuxtError }
