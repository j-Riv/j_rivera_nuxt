require('dotenv').config()
const collect = require('collect.js')
import colors from 'vuetify/es5/util/colors'
import { VuetifyProgressiveModule } from 'vuetify-loader'
import axios from 'axios'

export default {
  env: {
    BASE_URL: process.env.BASE_URL,
    COCKPIT_URL: process.env.COCKPIT_URL,
    COCKPIT_POSTS_URL: process.env.COCKPIT_POSTS_URL,
    GMAIL: process.env.GMAIL,
    GMAIL_APP_PASSWORD: process.env.GMAIL_APP_PASSWORD
  },
  /*
  ** Nuxt rendering mode
  ** See https://nuxtjs.org/api/configuration-mode
  */
  mode: 'universal',
  /*
  ** Nuxt target
  ** See https://nuxtjs.org/api/configuration-target
  */
  target: 'server',
  /*
  ** Headers of the page
  ** See https://nuxtjs.org/api/configuration-head
  */
  head: {
    titleTemplate: '%s | ' + 'José Alfredo Rivera Turcios',
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', type: 'text/css', href: 'https://fonts.googleapis.com/css?family=Comfortaa' }
    ]
  },
  /*
  ** Global CSS
  */
  css: [
  ],
  /*
  ** Plugins to load before mounting the App
  ** https://nuxtjs.org/guide/plugins
  */
  router: {
    middleware: 'i18n'
  },
  plugins: [
    '~/plugins/i18n.js',
    { src: '~/plugins/prism', ssr: false }
  ],
  generate: {
    // routes: ['/', '/es', '/about', '/es/about']
    routes: async () => {
      let { data } = await axios.post(process.env.COCKPIT_POSTS_URL,
        JSON.stringify({
          filter: { published: true },
          sort: { _created: -1 },
          populate: 1
        }),
        {
          headers: { 'Content-Type': 'application/json' }
        })
      const collection = collect(data.entries)

      let tags = collection.map(post => post.tags)
        .flatten()
        .unique()
        .map(tag => {
          let payload = collection.filter(item => {
            return collect(item.tags).contains(tag)
          }).all()

          return {
            route: `blog/category/${tag}`,
            payload: payload
          }
        }).all()

      let posts = collection.map(post => {
        return {
          route: post.title_slug,
          payload: post
        }
      }).all()

      let r = ['/', '/es', '/resume', '/es/resume']

      return r.concat(posts).concat(tags)
    }
  },
  /*
  ** Auto import components
  ** See https://nuxtjs.org/api/configuration-components
  */
  components: true,
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    '@nuxtjs/vuetify',
    '@nuxtjs/dotenv'
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/axios', '@nuxtjs/sitemap'
  ],
  sitemap: {
    path: '/sitemap.xml',
    hostname: 'https://j-rivera.com',
    routes: async () => {
      const routes = ['/es', '/es/resume'];
      let { data } = await axios.post(process.env.COCKPIT_POSTS_URL,
        JSON.stringify({
          filter: { published: true },
          sort: { _created: -1 },
          populate: 1
        }),
        {
          headers: { 'Content-Type': 'application/json' }
        })
      return routes.concat(data.entries.map(blog => `blog/${blog.title_slug}`))
    }
  },
  /*
  ** vuetify module configuration
  ** https://github.com/nuxt-community/vuetify-module
  */
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      dark: true,
      themes: {
        dark: {
          primary: colors.red.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3
        }
      }
    },
    progressiveImages: true
  },
  serverMiddleware: [
    '~/api/contact'
  ],
  /*
  ** Build configuration
  ** See https://nuxtjs.org/api/configuration-build/
  */
  build: {
    extend(config, ctx) {
      ctx.loaders.vue.compilerOptions = {
        modules: [VuetifyProgressiveModule]
      }

      /** Alter img loading rules to use vuetify progressive loader */
      const imgRule = config.module.rules.find(
        r => r.test.toString() === '/\\.(png|jpe?g|gif|svg|webp)$/i');
      imgRule.oneOf = [imgRule.use[0]]
      imgRule.oneOf.unshift({
        test: /\.(png|jpe?g|gif)$/,
        resourceQuery: /vuetify-preload/,
        use: [
          'vuetify-loader/progressive-loader',
          {
            loader: 'url-loader',
            options: { limit: 8000 }
          }
        ]
      })
      delete (imgRule.use)
    }
  }
}
