<template>
<!-- 登陆 -->
     <div class="ldy_login">      
        <div class="center">
            <!-- 图片 -->
            <div class="login_img">
            <img src="../assets/images/logo.jpg" alt="">
            </div>
            <!-- 中间登录框 -->
            <div class="middle">
                <h2>Welcome!</h2>
                <p>感谢选择我们！</p>
                <!-- 用户名 -->
                <input class="but" type="text" v-model="name" placeholder="请输入您的用户名">
                <!-- 密码 -->
                <input class="but" type="password" v-model="pwd" placeholder="请输入您的密码">
                <button @click="Login">确认登录</button>
                 <router-link to="/forgotpwd" class="forget">忘记密码？找回密码</router-link>
            </div>
            
            <!-- 同宽按钮 -->
            <div class="bottom">没有账号<router-link to="/register">点我注册</router-link></div>
            <!-- 最底下文字 -->
            <div class="bottom_text">Organe | © Copyright by <a href=""> Mironcoder</a></div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                name: '',
                pwd:'',
            }
        },
        methods: {
            Login() {
                // console.log(`name:${this.name} pwd:${this.pwd}`)
                // 此处验证用户名name 
                let reg=/^\w{6,15}$/;
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>
<style src="../assets/css/Login.css"></style>