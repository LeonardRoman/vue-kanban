import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import TextareaAutosize from 'vue-textarea-autosize'
import 'normalize.css'
import '@/assets/styles/global.scss'

Vue.use(TextareaAutosize)
Vue.config.productionTip = false

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
