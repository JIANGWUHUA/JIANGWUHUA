<template>
        <div class="top">
          <div class="details-left">
            <div class="details-l-img"><img :src="imgl" alt=""></div>
            <div class="details-s-img">
              <img v-for="img in imgs" :key="img" :src="img" alt="" :class="{toggle:img==imgl}" @mouseover="imgl=img">
            </div>
          </div>
          <div class="details-right">
            <div class="details-banner">
               <router-link to="/product/display"><div><img src="../assets/images/single-banner.jpg" alt=""><span>秒杀专区</span></div>
               </router-link>
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
                    <span v-for="(s,i) in sizes" :key="i" :class="{cur:i==size}" @click="size=i">{{s}}</span>
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
                  <router-link to="/payfor"><button>去结账</button></router-link>
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
                sizes: ['500g+-50g','500g+-50g','500g+-50g','500g+-50g500g+-50g500g+-50g'],
                size: 0,
                imgs: [
                  'https://img12.360buyimg.com/n1/jfs/t1/35827/5/743/124060/5caca16aEb6993257/bc0b04546047fdfa.jpg',
                  "https://img12.360buyimg.com/n1/jfs/t1/23312/8/5378/154787/5c3d563aEcaa7d90e/3f6783b52360480d.jpg",
                  'https://img12.360buyimg.com/n1/jfs/t1/32289/26/512/237943/5c3d563aE6891b4f0/4cfcec4e68124df8.jpg',
                  'https://img12.360buyimg.com/n1/jfs/t1/7176/3/13193/184390/5c3d563bE89b58b7c/2e15f3e7128eefd5.jpg',
                  'https://img12.360buyimg.com/n1/jfs/t1/28154/40/5343/193764/5c3d563bEe79d7eba/f750c1755b791a52.jpg'],
                imgl: 'https://img12.360buyimg.com/n1/jfs/t1/35827/5/743/124060/5caca16aEb6993257/bc0b04546047fdfa.jpg',
            }
        },
    }
</script>


<style scoped  src="../assets/css/product.css"></style>
<style lang="scss" scoped></style>