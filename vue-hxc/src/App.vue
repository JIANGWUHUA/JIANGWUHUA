<template>
  <div>
    <!-- 主页头部 -->
    <my-header></my-header>

    <!-- 主页身体 -->
    <router-view></router-view>
    <!-- 主页脚部 -->
    <my-footer></my-footer>

    <my-index></my-index>
  </div>
</template>

<script>
import MyFooter from './components/MyFooter.vue'
import MyHeader from './components/MyHeader.vue'
// import MyIndex from './components/MyIndex.vue'
  export default {
  components: { MyHeader, MyFooter},
    
  }
</script>

<style lang="scss" scoped>

</style>
