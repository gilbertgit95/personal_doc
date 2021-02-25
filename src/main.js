import Vue from 'vue'
import App from './layouts/App.vue'

import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'

import router from './router'
import store from './store'

Vue.config.productionTip = false

Vue.use(VueMaterial)

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
