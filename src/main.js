import Vue from 'vue'
import App from './App'
import router from './router'
import VueLazyLoad from 'vue-lazyload'
import vueTap from 'v-tap'
import Grid from 'vue-js-grid'

Vue.use(vueTap)
Vue.use(Grid)
Vue.use(VueLazyLoad,{
  loading:'./static/dataimg/cover.jpg'
})

window.Hls = require('hls.js')

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App),
  data: { eventHub: new Vue() }
})
