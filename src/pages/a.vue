<template>
  <div>a
    <button @click="push">tototo</button>
    </div>  
</template>
<script>
export default {
  methods:{
    push(){
      this.$router.push({
        path:'/a',
      })
    }

  },
  created(){
  }
}
</script>