//@ts-nocheck 
import pkg from './package.json'

console.log(process.env)


export default {
  mode: 'universal',

  env: {
  },

  server: {
    port: 8080, // default: 3000
  },

  generate: {
  },

  router: {
  },
  /*
   ** Headers of the page
   */
  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },

  /**
   * Customize the progress-bar color
   */
  loading: { color: '#fff' },

  /*
   ** Global CSS
   */
  css: [],

  /*
   ** Plugins to load before mounting the App
   */
  plugins: [  ],

  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    // Doc: https://bootstrap-vue.js.org/docs/
    'bootstrap-vue/nuxt',
  ],

  fontawesome: {
    imports : [{
      set: '@fortawesome/free-solid-svg-icons',
      icons: ['fas']
    }],

    component: 'fa'
  },

  /*
   ** Axios module configuration
   */
  axios: {

    // See https://github.com/nuxt-community/axios-module#options
    debug: true
  }
}
