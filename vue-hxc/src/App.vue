<template>
  <div>
    <!-- 主页 -->
    <my-index></my-index>
    <!-- 购物车 -->
    <my-wishlist></my-wishlist>
  </div>
</template>

<script>
import MyIndex from './components/MyIndex.vue'
  export default {
  components: { MyIndex,},
    
  }
</script>

<style lang="scss" scoped>
@import './assets/css/index.css'
</style>
