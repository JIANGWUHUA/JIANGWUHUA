<template>
    <div>
        <router-link to="/product/details">商品详情</router-link><br>
        <router-link to="/product/display">搜索全部商品</router-link><br>
        <router-link to="/order_invoice">交易成功</router-link><br>
        <router-link to="/order_history">商家订单</router-link>

        <hr>
        <router-view />
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>

</style>