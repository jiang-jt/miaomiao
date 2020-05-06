import Vue from 'vue'
import Axios from 'axios'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

//Axios.defaults.baseURL = "https://douban.uieee.com/v2/movie/"

Vue.prototype.$http = Axios

Vue.filter('setWH', function (url, arg) {
  let res = url.replace(/w\.h/, arg);
  return res
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')