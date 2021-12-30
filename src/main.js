import Vue from 'vue'
import App from './App.vue'
console.log('App', App)
window.vm = new Vue({
  render: (h) => h(App),
}).$mount('#app')
