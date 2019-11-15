import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueNativeSock from 'vue-native-websocket'
import '@/assets/scss/tailwind.scss'

Vue.use(VueNativeSock, 'wss://echo.websocket.org', { store, format: 'json' })

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
