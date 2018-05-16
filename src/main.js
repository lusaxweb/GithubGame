import Vue from 'vue'
import App from './App.vue'
import Vuex from 'vuex'
import Vuenut from 'vuenut'
import store from './store'

import 'vuenut/dist/vuenut.css'
Vue.use(Vuenut)




Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
