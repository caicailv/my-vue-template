import Vuex from 'vuex'
import Vue from 'vue'
Vue.use(Vuex)

let store = new Vuex.Store({
  state: {
    a: '2',
    b:'3'
  },
  mutations: {
    changeA(state) {
      state.a = 2
    },
    changeB(state) {
      state.a = 3
    },
  },
  actions: {
    getA(state) {
      setTimeout(() => {
        state.commit('changeA')
      }, 500)
    },
  },
  getters: {
    state2(state) {
      return state + '哈哈哈哈'
    },
  },
})
console.log('store', store)
export default store
