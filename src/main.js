import Vue from './js/vue'

const child1 = {
  template: `<div>child1</div>`,
  created(){
    console.log('child1 created');
  }

}

const child2 = {
  template: `<div>child2</div>`,
  created(){
    console.log('child2 created');
  }
}

new Vue({
  el: '#app',
  data() {
    return {
      currentTabComponent: child1,
      flag: true,
    }
  },
  created() {
    setInterval(() => {
      this.flag = !this.flag
      this.currentTabComponent = this.flag ? child2 : child1
    }, 500)
  },
  template: `
  <div>
  <keepAlive>
    <Component :is="currentTabComponent" />
  </keepAlive>
  </div>
  
  `,
}).$mount()
