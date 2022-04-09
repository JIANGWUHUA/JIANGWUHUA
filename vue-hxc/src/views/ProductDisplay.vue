<template>
  <div class="gjm">
    <div class="display-page">
      <div class="center">
        <!-- 商品导航 -->
        <div class="top">
          <div class="class">
            <div>
              <div>
                <h3>蔬菜</h3>
              </div>
              <ul>
                <li><router-link to="/product/details">西兰花西兰花西兰花</router-link></li>
                <li><router-link to="/product/details">茄子</router-link></li>
                <li><a href="">芦笋</a></li>
                <li><a href="">菜花</a></li>
                <li><a href="">胡萝卜</a></li>
              </ul>
            </div>
          </div>
          <div class="class">
            <div>
              <div><h3>水果</h3></div>
              <ul>
                <li><a href="">苹果</a></li>
                <li><a href="">橙子</a></li>
                <li><a href="">香蕉</a></li>
                <li><a href="">榴莲</a></li>
                <li><a href="">樱桃</a></li>
              </ul>
            </div>
          </div>
          <div class="class">
            <div>
              <div><h3>海产品</h3></div>
              <ul>
                <li><a href="">龙虾</a></li>
                <li><a href="">章鱼</a></li>
                <li><a href="">草鱼</a></li>
                <li><a href="">螃蟹</a></li>
                <li><a href="">三文鱼</a></li>
              </ul>
            </div>
          </div>
          <div class="class">
            <div>
              <div><h3>肉类</h3></div>
              <ul>
                <li><a href="">鸡腿</a></li>
                <li><a href="">牛肉</a></li>
                <li><a href="">猪前腿</a></li>
                <li><a href="">瘦肉</a></li>
                <li><a href="">整鸭</a></li>
              </ul>
            </div>
          </div>
          <div class="class">
            <div>
              <div><h3>快餐食品</h3></div>
              <ul>
                <li><a href="">汉堡</a></li>
                <li><a href="">三明治</a></li>
                <li><a href="">甜甜圈</a></li>
                <li><a href="">披萨</a></li>
                <li><a href="">面包</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div class="breadcrumb">
            <div>
                <router-link to="/">首页</router-link>
                <span>></span>
                <span>全部结果</span>
            </div>
        </div>
        <div class="display-item">
          <ul>
            <li>
              <div class="card-item">
                <div class="card">
                  <div class="card-top">
                    <div class="card-img">
                      <router-link to="/product/details"><img src="../assets/images/product/01.jpg" alt=""></router-link>
                    </div>
                    <div class="card-hide">
                      <div class="card-top-left">
                        <span>秒杀</span>
                      </div>
                      <div class="card-top-right">
                        <span @click="love=!love" :class="{love:love==true}">❤</span>
                      </div>
                    </div>
                  </div>
                  <div class="card-body">
                    <router-link to="/product/details" class="card-name">密刺黄瓜500g+-50</router-link><br>
                    <p>
                      <del>￥4.69</del>
                      <span>￥2.59</span>
                    </p>
                    <div>
                      <div class="btn">
                        <button @click="v++"  :class="{active:v!=0}">加入购物车</button>
                        <div :class="{active:v==0}">
                          <span class="minus"  @click="v--">-</span>
                          <input type="text" v-model="v" oninput="value=value.replace(/[^\d]/g,'')">
                          <span class="add"  @click="v++">+</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <div class="card-item">
                <div class="card">
                  <div class="card-top">
                    <div class="card-img">
                      <router-link to="/product/details"><img src="../assets/images/product/02.jpg" alt=""></router-link>
                    </div>
                    <div class="card-hide">
                      <div class="card-top-left">
                        <span>秒杀</span>
                      </div>
                      <div class="card-top-right">
                        <span @click="love=!love" :class="{love:love==true}">❤</span>
                      </div>
                    </div>
                  </div>
                  <div class="card-body">
                    <router-link to="/product/details" class="card-name">密刺黄瓜500g+-50</router-link><br>
                    <p>
                      <del>￥4.69</del>
                      <span>￥2.59</span>
                    </p>
                    <div>
                      <div class="btn">
                        <button @click="v++"  :class="{active:v!=0}">加入购物车</button>
                        <div :class="{active:v==0}">
                          <span class="minus"  @click="v--">-</span>
                          <input type="text" v-model="v" oninput="value=value.replace(/[^\d]/g,'')">
                          <span class="add"  @click="v++">+</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <div class="card-item">
                <div class="card">
                  <div class="card-top">
                    <div class="card-img">
                      <router-link to="/product/details"><img src="../assets/images/product/03.jpg" alt=""></router-link>
                    </div>
                    <div class="card-hide">
                      <div class="card-top-left">
                        <span>秒杀</span>
                      </div>
                      <div class="card-top-right">
                        <span @click="love=!love" :class="{love:love==true}">❤</span>
                      </div>
                    </div>
                  </div>
                  <div class="card-body">
                    <router-link to="/product/details" class="card-name">密刺黄瓜500g+-50</router-link><br>
                    <p>
                      <del>￥4.69</del>
                      <span>￥2.59</span>
                    </p>
                    <div>
                      <div class="btn">
                        <button @click="v++"  :class="{active:v!=0}">加入购物车</button>
                        <div :class="{active:v==0}">
                          <span class="minus"  @click="v--">-</span>
                          <input type="text" v-model="v" oninput="value=value.replace(/[^\d]/g,'')">
                          <span class="add"  @click="v++">+</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <div class="card-item">
                <div class="card">
                  <div class="card-top">
                    <div class="card-img">
                      <router-link to="/product/details"><img src="../assets/images/product/04.jpg" alt=""></router-link>
                    </div>
                    <div class="card-hide">
                      <div class="card-top-left">
                        <span>秒杀</span>
                      </div>
                      <div class="card-top-right">
                        <span @click="love=!love" :class="{love:love==true}">❤</span>
                      </div>
                    </div>
                  </div>
                  <div class="card-body">
                    <router-link to="/product/details" class="card-name">密刺黄瓜500g+-50</router-link><br>
                    <p>
                      <del>￥4.69</del>
                      <span>￥2.59</span>
                    </p>
                    <div>
                      <div class="btn">
                        <button @click="v++"  :class="{active:v!=0}">加入购物车</button>
                        <div :class="{active:v==0}">
                          <span class="minus"  @click="v--">-</span>
                          <input type="text" v-model="v" oninput="value=value.replace(/[^\d]/g,'')">
                          <span class="add"  @click="v++">+</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <div class="card-item">
                <div class="card">
                  <div class="card-top">
                    <div class="card-img">
                      <router-link to="/product/details"><img src="../assets/images/product/05.jpg" alt=""></router-link>
                    </div>
                    <div class="card-hide">
                      <div class="card-top-left">
                        <span>秒杀</span>
                      </div>
                      <div class="card-top-right">
                        <span @click="love=!love" :class="{love:love==true}">❤</span>
                      </div>
                    </div>
                  </div>
                  <div class="card-body">
                    <router-link to="/product/details" class="card-name">密刺黄瓜500g+-50</router-link><br>
                    <p>
                      <del>￥4.69</del>
                      <span>￥2.59</span>
                    </p>
                    <div>
                      <div class="btn">
                        <button @click="v++"  :class="{active:v!=0}">加入购物车</button>
                        <div :class="{active:v==0}">
                          <span class="minus"  @click="v--">-</span>
                          <input type="text" v-model="v" oninput="value=value.replace(/[^\d]/g,'')">
                          <span class="add"  @click="v++">+</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <div class="card-item">
                <div class="card">
                  <div class="card-top">
                    <div class="card-img">
                      <router-link to="/product/details"><img src="../assets/images/product/06.jpg" alt=""></router-link>
                    </div>
                    <div class="card-hide">
                      <div class="card-top-left">
                        <span>秒杀</span>
                      </div>
                      <div class="card-top-right">
                        <span @click="love=!love" :class="{love:love==true}">❤</span>
                      </div>
                    </div>
                  </div>
                  <div class="card-body">
                    <router-link to="/product/details" class="card-name">密刺黄瓜500g+-50</router-link><br>
                    <p>
                      <del>￥4.69</del>
                      <span>￥2.59</span>
                    </p>
                    <div>
                      <div class="btn">
                        <button @click="v++"  :class="{active:v!=0}">加入购物车</button>
                        <div :class="{active:v==0}">
                          <span class="minus"  @click="v--">-</span>
                          <input type="text" v-model="v" oninput="value=value.replace(/[^\d]/g,'')">
                          <span class="add"  @click="v++">+</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <div class="card-item">
                <div class="card">
                  <div class="card-top">
                    <div class="card-img">
                      <router-link to="/product/details"><img src="../assets/images/product/07.jpg" alt=""></router-link>
                    </div>
                    <div class="card-hide">
                      <div class="card-top-left">
                        <span>秒杀</span>
                      </div>
                      <div class="card-top-right">
                        <span @click="love=!love" :class="{love:love==true}">❤</span>
                      </div>
                    </div>
                  </div>
                  <div class="card-body">
                    <router-link to="/product/details" class="card-name">密刺黄瓜500g+-50</router-link><br>
                    <p>
                      <del>￥4.69</del>
                      <span>￥2.59</span>
                    </p>
                    <div>
                      <div class="btn">
                        <button @click="v++"  :class="{active:v!=0}">加入购物车</button>
                        <div :class="{active:v==0}">
                          <span class="minus"  @click="v--">-</span>
                          <input type="text" v-model="v" oninput="value=value.replace(/[^\d]/g,'')">
                          <span class="add"  @click="v++">+</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <div class="card-item">
                <div class="card">
                  <div class="card-top">
                    <div class="card-img">
                      <router-link to="/product/details"><img src="../assets/images/product/08.jpg" alt=""></router-link>
                    </div>
                    <div class="card-hide">
                      <div class="card-top-left">
                        <span>秒杀</span>
                      </div>
                      <div class="card-top-right">
                        <span @click="love=!love" :class="{love:love==true}">❤</span>
                      </div>
                    </div>
                  </div>
                  <div class="card-body">
                    <router-link to="/product/details" class="card-name">密刺黄瓜500g+-50</router-link><br>
                    <p>
                      <del>￥4.69</del>
                      <span>￥2.59</span>
                    </p>
                    <div>
                      <div class="btn">
                        <button @click="v++"  :class="{active:v!=0}">加入购物车</button>
                        <div :class="{active:v==0}">
                          <span class="minus"  @click="v--">-</span>
                          <input type="text" v-model="v" oninput="value=value.replace(/[^\d]/g,'')">
                          <span class="add"  @click="v++">+</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <div class="card-item">
                <div class="card">
                  <div class="card-top">
                    <div class="card-img">
                      <router-link to="/product/details"><img src="../assets/images/product/09.jpg" alt=""></router-link>
                    </div>
                    <div class="card-hide">
                      <div class="card-top-left">
                        <span>秒杀</span>
                      </div>
                      <div class="card-top-right">
                        <span @click="love=!love" :class="{love:love==true}">❤</span>
                      </div>
                    </div>
                  </div>
                  <div class="card-body">
                    <router-link to="/product/details" class="card-name">密刺黄瓜500g+-50</router-link><br>
                    <p>
                      <del>￥4.69</del>
                      <span>￥2.59</span>
                    </p>
                    <div>
                      <div class="btn">
                        <button @click="v++"  :class="{active:v!=0}">加入购物车</button>
                        <div :class="{active:v==0}">
                          <span class="minus"  @click="v--">-</span>
                          <input type="text" v-model="v" oninput="value=value.replace(/[^\d]/g,'')">
                          <span class="add"  @click="v++">+</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <div class="card-item">
                <div class="card">
                  <div class="card-top">
                    <div class="card-img">
                      <router-link to="/product/details"><img src="../assets/images/product/10.jpg" alt=""></router-link>
                    </div>
                    <div class="card-hide">
                      <div class="card-top-left">
                        <span>秒杀</span>
                      </div>
                      <div class="card-top-right">
                        <span @click="love=!love" :class="{love:love==true}">❤</span>
                      </div>
                    </div>
                  </div>
                  <div class="card-body">
                    <router-link to="/product/details" class="card-name">密刺黄瓜500g+-50</router-link><br>
                    <p>
                      <del>￥4.69</del>
                      <span>￥2.59</span>
                    </p>
                    <div>
                      <div class="btn">
                        <button @click="v++"  :class="{active:v!=0}">加入购物车</button>
                        <div :class="{active:v==0}">
                          <span class="minus"  @click="v--">-</span>
                          <input type="text" v-model="v" oninput="value=value.replace(/[^\d]/g,'')">
                          <span class="add"  @click="v++">+</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          </ul>
          <!-- 加载 -->
          <div class="load" id="load"> 
            <div>
              <b :class="{dis:pp==1}" @click="pp--">◀</b>
              <span :class="{pitch:p==pp}" @click="pp=p" v-for="p in ps" :key="p">{{p}}</span>
              <!-- <small v-show="">...</small>
              <span :class="{pitch:ps==pp}" @click="pp=ps">{{ps}}</span> -->
              <b :class="{dis:pp==ps}" @click="pp++">▶</b>
            </div>
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
            love: false,
            v: 0,
            ps: 5,
            pp: 1,
          }
        },
    }
</script>

<style lang="scss" scoped></style>
<style scoped src="../assets/css/product.css"></style>