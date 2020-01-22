// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

router.beforeEach((to, form, next) => {
  document.title = to.name
  next()
})

import WebpageloversTree from 'webpagelovers-tree'

Vue.use(WebpageloversTree)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {App},
  template: '<App/>'
})
