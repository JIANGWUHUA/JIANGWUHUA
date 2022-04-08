<template>
    <div>
        <router-link to="/product/details">商品详情</router-link><br>
        <router-link to="/product/display">搜索全部商品</router-link>
        <hr>
        <router-link to="/login">登陆</router-link>
        <router-link to="/login">注册</router-link>
        <router-link to="/login">忘记密码？找回密码</router-link>
        <router-link to="/payfor">支付</router-link>
        <router-link to="/profile">个人信息</router-link>
        <router-view />
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>

</style>