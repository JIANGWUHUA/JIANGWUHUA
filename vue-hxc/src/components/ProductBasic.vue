<template>
        <div class="top">
          <div class="details-left">
            <div class="details-l-img"><img src="../assets/images/product/01.jpg" alt=""></div>
            <div class="details-s-img">
              <img src="../assets/images/product/01.jpg" alt=""  class="toggle">
              <img src="../assets/images/product/02.jpg" alt="" >
              <img src="../assets/images/product/03.jpg" alt="" >
              <img src="../assets/images/product/04.jpg" alt="" >
              <img src="../assets/images/product/05.jpg" alt="" >
            </div>
          </div>
          <div class="details-right">
            <div class="details-banner">
               <a href="#"><div><img src="../assets/images/single-banner.jpg" alt=""><span>秒杀专区</span></div>
               </a>
            </div>
            <div class="details-card">
              <h2>密刺黄瓜500g+-50g</h2>
              <div>
                <ul>
                  <li><span>评分:</span><span class="xing">★★★★★</span></li>
                  <li class="details-piece">
                    价格：
                    <del>￥4.69</del>
                    <span>￥2.59</span>
                  </li>
                  <li>
                <div class="bj">
                   <div><span>规格:</span></div>
                  <div class="size">
                    <span class="cur">500g+-50g</span>
                    <span>500g+-50g</span>
                    <span>500g+-50g</span>
                    <span>500g+-50g500g+-50g500g+-50g</span>
                  </div>
                </div>
                  </li>
                </ul>
              </div>
              <div class="details-serve">
                <p><a href="#">服务保障:</a></p>
                <ul>
                  <li>限时秒杀</li>
                  <li>破损无忧</li>
                  <li>质量保障</li>
                  <li>正规发票</li>
                  <li>爱心公益计划</li>
                  <li>7天价保</li>
                </ul>
              </div>
              <div>
                <div class="details-serve">
                  <a href="#"><span>分享</span>
                  <div class="details-share"><img src="../assets/images/product/share.svg" alt=""></div>
                  </a>
                  <ul>
                    <li><div><img src="../assets/images/product/xinlang.svg" alt=""></div></li>
                    <li><div><img src="../assets/images/product/weixin.svg" alt=""></div></li>
                    <li><div><img src="../assets/images/product/email.svg" alt=""></div></li>
                  </ul>
                </div>
              </div>
              <div class="details-btn">
                <div class="btn1">
                  <button @click="v++"  :class="{active:v!=0}">加入购物车</button>
                  <div :class="{active:v==0}"><span @click="v--">-</span><input type="text" :value="v" oninput="value=value.replace(/[^\d]/g,'')"><span @click="v++">+</span></div>
                  <button @click="love=!love"><span class="g" :class="{love:love==true}">❤</span><span v-show="love==false">收藏</span><span v-show="love==true">已收藏</span></button>
                </div>
                <div class="btn2">
                  <a href="#"><button>立即购买</button></a>
                </div>
              </div>
            </div>
          </div>
        </div>
</template>

<script>
    export default {
        data() {
            return {
                v: 0,
                love:false,
            }
        },
    }
</script>


<style scoped  src="../assets/css/product.css"></style>
<style lang="scss" scoped></style>