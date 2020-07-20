import Vue from 'vue'
import App from './App'
// 如果是文件夹，会自动查找文件中的index文件，可省略index.js
import router from './router'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
