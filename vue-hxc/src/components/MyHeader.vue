<template>
 <div class="my-Header">
    <!-- 第一板块 -->
    <div class="nav_huo1">
        <div class="banxin">  
           <div class="huo_1dropdown">
              <h3 class="huo_1btn">西安</h3>
              <div class="dropdown_content">
                  <a href="#" class="dropdown_content_a">雁塔区</a>
                  <a href="#" class="dropdown_content_a">碑林区</a>
                  <a href="#" class="dropdown_content_a">长安区</a>
                  <a href="#" class="dropdown_content_a">未央区</a>
                  <a href="#" class="dropdown_content_a">高新区</a>
                  <a href="#" class="dropdown_content_a">西咸新区</a>
              </div>
            </div> 
            <ul>
              <li><router-link to="/login">登录</router-link></li>
              <li><a href="#">注册</a></li>
              <li><a href="#">联系客服</a></li>
              <li><a href="#">关于我们</a></li>
            </ul>
         </div> 
    </div>
        <!-- 第二板块 -->
    <div class="nav_huo2">
        <div class="banxin">
            <div class="nav_huo2_1">
                <a href="#"><img src="../assets/images/logo.jpg" alt="" class="logo"></a>
                <input type="text" placeholder="西红柿/鸡蛋">
                <a href="#"><button>搜索</button></a>
                <ul>
                    <li><a href="#"><img src="../assets/images/icon/购物车.png" alt=""></a></li>
                    <li><a href="#">购物车</a></li>
                    <li><a href="#"><img src="../assets/images/user.png" alt=""></a></li>
                    <li><a href="#">&nbsp;江南</a></li>
                </ul>
            </div>
            <div class="nav_bar">
                <div class="banxin">
                    <!-- <span><hr></span> -->
                    <ul class="nav_f">
                        <li class="dropword_1">
                            <a href="#" class="dropbtn_1">Home</a>
                            <div class="dropword_content_1">
                                <a href="#">主页</a>
                            </div>
                        </li>
                        <li><a href="#">Shop</a></li>
                        <li><a href="#">Category</a></li>
                        <li><a href="#">Pages</a></li>
                        <li><a href="#">Authentic</a></li>
                    </ul>
                    <ul class="nav_r">
                        <li>
                            <p><a href="#">&nbsp;huixuancai@wangcai.com</a></p>
                        </li>
                        <li>
                            <a href="#"><img src="../assets/images/icon/邮箱.png" alt=""></a>
                        </li>
                        <li>
                            <p><a href="#">&nbsp;156  9196  9361</a></p>
                        </li>
                        <li>
                            <a href="#"><img src="../assets/images/icon/209电话-圆框.png" alt=""></a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div> 
</div>
</template>

<script>
  export default {
    
  }
</script>

<style lang="scss" scoped>

</style>
<style src="../assets/css/index.css">

</style>