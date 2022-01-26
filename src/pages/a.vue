<template>
  <div>a</div>  
</template>
<script>
export default {
  created(){
    // console.log(`this._router`,this._routerRoot);
    console.log(`this._router`,this.$options.router);
  }
}
</script>