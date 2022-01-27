// import Vue from './js/vue'
import Vue from 'vue'
import App from './App.vue'
import myPlugin from './plugin/index'
import router from './router'

Vue.use(myPlugin)
new Vue({
  el: '#app',
  render: (h) => h(App),
  router,
}).$mount()
