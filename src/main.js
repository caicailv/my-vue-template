import Vue from 'vue'
import App from './App.vue'
import mycm from './components/mycm.vue'
console.log('App', App)
Vue.component('mycm',mycm)
window.vm = new Vue({
  render: (h) => h(App),
}).$mount('#app')
