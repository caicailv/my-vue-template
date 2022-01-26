import mycm from '../components/mycm.vue'
export default {
  install(Vue) {
    Vue.component('mycm', mycm)
    Vue.mixin({
      beforeCreate() {
      },
    })
  },
}
