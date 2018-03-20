import Vue from 'vue'
import App from './App'
import router from './router'
import VueLazyLoad from 'vue-lazyload'

Vue.use(VueLazyLoad,{
  error:'./static/error.png',
  loading:'./static/dataimg/3.jpg'
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App),
  data: { eventHub: new Vue() }
})
