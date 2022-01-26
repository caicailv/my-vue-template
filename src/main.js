// import Vue from './js/vue'
import Vue from 'vue'
import App from './App.vue'
import A from './pages/a.vue'
import B from './pages/b.vue'
import VueRouter from 'vue-router'
import myPlugin from './plugin/index'
console.log('VueRouter', VueRouter)
Vue.use(VueRouter)
Vue.use(myPlugin)
let routes = [
  {
    path: '/a',
    component: A,
  },
  {
    path: '/b',
    component: B,
  },
]
let router = new VueRouter({ routes })
new Vue({
  el: '#app',
  render: (h) => h(App),
  router,
}).$mount()
