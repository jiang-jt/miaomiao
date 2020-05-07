import Vue from 'vue'
import Axios from 'axios'
import App from './App.vue'
import router from './router'
import store from './store'
import {Loading} from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.config.productionTip = false

//Axios.defaults.baseURL = "https://douban.uieee.com/v2/movie/"

Vue.prototype.$http = Axios

Vue.filter('setWH', function (url, arg) {
  let res = url.replace(/w\.h/, arg);
  return res
})

// 注册全局组件  start
import Scroller from './components/scroller'
Vue.component('scroller', Scroller)

import loading from './components/loading'
Vue.component('glo-loading', loading)
// 注册全局组件 end

// 注册插件
Vue.use(Loading)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')