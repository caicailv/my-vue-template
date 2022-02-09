// import Vue from './js/vue'
import Vue from 'vue'
import App from './App.vue'
import store from './store'
setTimeout(() => {
  store.commit("changeA",223)
}, 1000);
new Vue({
  el: '#app',
  render: (h) => h(App),
  store,
}).$mount()
