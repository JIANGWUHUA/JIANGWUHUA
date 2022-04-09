<template>
    <div class="gjm">
      <div class="details-page">
      <div class="center">
        <product-basic />
        <div class="details-bottom">
          <div>      
            <div class="details">
                <div class="black" @click="Active='Active1'"><span :class="{cur:Active=='Active1'}">商品详情</span></div>
              <div class="details-div">
                <div @click="Active='Active2'"><span :class="{cur:Active=='Active2'}">商品评价</span></div>
              </div>
            </div>
            <!-- 商品详情 -->
            <div class="details-show"  :class="{active:Active!='Active1'}">
              <div class="details-table">
                <table>
                  <tr><td>商品编码</td><td>0020001</td></tr>
                  <tr><td>产地</td><td>陕西西安</td></tr>
                  <tr><td>储存条件</td><td>常温</td></tr>
                  <tr><td>保质期</td><td>3天</td></tr>
                  <tr><td>售后说明</td><td>不支持七天无理由</td></tr>
                </table>
              </div>
              <div class="details-show-img">
                <div><span>产品展示</span></div>
                <div><img src="../assets/images/product/0020002.jpg" alt=""></div>
                <div><img src="../assets/images/product/0020003.jpg" alt=""></div>
                <div><img src="../assets/images/product/0020004.jpg" alt=""></div>
              </div>
            </div>
            <!-- 商品评论 -->
            <div class="details-comment"  :class="{active:Active!='Active2'}">
              <div>
                <ul>
                  <li class="comment">
                    <div>
                      <div class="user-timg"><a href="#"><img src="../assets/images/product/user-1.jpg" alt=""></a></div>
                      <h5>
                        <a href="#">Miron Mahmud</a><br>
                        <span>2022-2-28</span>
                      </h5>
                    </div>
                    <div class="xing"><span>★★★★★</span></div>
                    <p>宝贝收到了，很惊喜，质量非常好，很满意的一次购物。我会继续回购的，店家值得信赖价格非常的美丽，东西还是不错的，会继续回购！全五分！奈斯奈斯～</p>
                    <div class="user-inp">
                      <input type="text" placeholder="回复"/>
                      <button>提交</button>
                    </div>
                    <ul>
                      <li>
                        <div>
                          <div class="user-timg"><a href="#"><img src="../assets/images/product/user-4.jpg" alt=""></a></div>
                          <h5>
                            <a href="#">Labonno Khan</a><br>
                            <span>2022-3-5</span>
                          </h5>
                        </div>
                        <p>会不会上面一层大，底下的是小的情况呀</p>
                        <div class="user-inp">
                          <input type="text" placeholder="回复"/>
                          <button>提交</button>
                        </div>
                      </li>
                      <li>
                        <div>
                          <div class="user-timg"><a href="#"><img src="../assets/images/product/user-5.jpg" alt=""></a></div>
                          <h5>
                            <a href="#">Tahmina Bonny</a><br>
                            <span>2022-3-2</span>
                          </h5>
                        </div>
                        <p>下单下单</p>
                        <div class="user-inp">
                          <input type="text" placeholder="回复"/>
                          <button>提交</button>
                        </div>
                      </li>
                    </ul>
                  </li>
                  <li class="comment">
                    <div>
                      <div class="user-timg"><a href="#"><img src="../assets/images/product/user-2.jpg" alt=""></a></div>
                      <h5>
                        <a href="#">一只羊</a><br>
                        <span>2022-1-16</span>
                      </h5>
                    </div>
                    <div class="xing"><span>★★★★★</span></div>
                    <p>服务态度很好，快递也不赖，希望老板生意越来越好！！！质量不错，也很便宜，包装也非常的好，没有破损，棒!质量很好哦</p>
                    <div class="user-inp">
                      <input type="text" placeholder="回复"/>
                      <button>提交</button>
                    </div>
                  </li>
                  <li class="comment">
                    <div>
                      <div class="user-timg"><a href="#"><img src="../assets/images/product/user-3.jpg" alt=""></a></div>
                      <h5>
                        <a href="#">Shipu Shikdar</a><br>
                        <span>2022-1-8</span>
                      </h5>
                    </div>
                    <div class="xing"><span>★★★★★</span></div>
                    <p>中午就到货了。包装无损坏，打开后一股清香扑鼻而来，检查上下两层没有破损，有几个果子特大，个个很好看。之前买过味道爽脆香甜，家中宝宝喜欢吃，放冰箱冷藏几天再吃，甜度更佳！下次还会回购，值得推存！</p>
                    <div class="user-inp">
                      <input type="text" placeholder="回复"/>
                      <button>提交</button>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div> 
      </div>
    </div>
</template>

<script>
import ProductBasic from '@/components/ProductBasic.vue'
    export default {
  components: { ProductBasic },
    data() {
      return {
        Active: 'Active1',
      }
    },
    }
</script>

<style lang="scss" scoped></style>
<style scoped  src="../assets/css/product.css"></style>