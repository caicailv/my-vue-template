import Vue from 'vue'
import VueRouter from 'vue-router'
import A from './pages/a.vue'
import B from './pages/b.vue'
Vue.use(VueRouter)

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
router.beforeEach((to, form, next) => {
  console.log('a');
  next()
})
export default router
