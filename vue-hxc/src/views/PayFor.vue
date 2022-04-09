<template>
  <div>
    <!-- 表顶部 -->
    <div class="nav">
      <p>已经是会员<router-link to="/login">点此处登陆?</router-link></p>
    </div>
    <!-- 商品列表 -->
    <div class="two_list">
      <div class="fist_center">
        <div class="tou">
          <h4>您的订单</h4>
        </div>
        <div class="tou_2"></div>
      </div>
      <div class="product">
        <div class="product_center">
          <table class="table_list" cellspacing="1px">
            <thead class="list_one">
              <tr>
                <th>序号</th>
                <th>产品</th>
                <th>名字</th>
                <th>价格</th>
                <th>生产地</th>
                <th>数量</th>
                <th>操作</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>01</td>
                <td><img src="../assets/images/product/01.jpg" alt="" /></td>
                <td>产品名称</td>
                <td>19 美元 /公斤</td>
                <td>生鲜公司</td>
                <td>3</td>
                <td>
                  <img src="../assets/images/删除.png" alt="" class="del" />
                </td>
              </tr>
              <tr>
                <td>02</td>
                <td><img src="../assets/images/product/02.jpg" alt="" /></td>
                <td>产品名称</td>
                <td>19 美元 /公斤</td>
                <td>生鲜公司</td>
                <td>3</td>
                <td>
                  <img src="../assets/images/删除.png" alt="" class="del" />
                </td>
              </tr>
              <tr>
                <td>03</td>
                <td><img src="../assets/images/product/03.jpg" alt="" /></td>
                <td>产品名称</td>
                <td>19 美元 /公斤</td>
                <td>生鲜公司</td>
                <td>3</td>
                <td>
                  <img src="../assets/images/删除.png" alt="" class="del" />
                </td>
              </tr>
              <tr>
                <td>04</td>
                <td><img src="../assets/images/product/04.jpg" alt="" /></td>
                <td>产品名称</td>
                <td>19 美元 /公斤</td>
                <td>生鲜公司</td>
                <td>3</td>
                <td>
                  <img src="../assets/images/删除.png" alt="" class="del" />
                </td>
              </tr>
              <tr>
                <td>05</td>
                <td><img src="../assets/images/product/05.jpg" alt="" /></td>
                <td>产品名称</td>
                <td>19 美元 /公斤</td>
                <td>生鲜公司</td>
                <td>3</td>
                <td>
                  <img src="../assets/images/删除.png" alt="" class="del" />
                </td>
              </tr>
            </tbody>
          </table>
          <div class="pay_for">
            <table class="pay_list">
              <tr>
                <th colspan="2">
                  <h2>您的消费单</h2>
                </th>
              </tr>
              <tr>
                <td>小计</td>
                <td>￥9999</td>
              </tr>
              <tr>
                <td>送货费用</td>
                <td>￥9999</td>
              </tr>
              <tr>
                <td>优惠券</td>
                <td>￥9999</td>
              </tr>
              <tr>
                <td>合计</td>
                <td>￥9999</td>
              </tr>
            </table>
          </div>
        </div>
      </div>
    </div>
    <!-- 收获时间 -->
    <div class="time">
      <div class="info_kuang">
        <!-- /* 联系电话 和 增加按钮 / -->
        <div class="kuang_nav">
          <span class="nav_title">送达时间表</span>
        </div>
        <!-- 绿线 -->
        <div class="kuang_line"></div>
        <!-- 联系人选择框 -->
        <div class="kuang_num">
          <div>
            <ul>
              <li>
                <h4>急速送达</h4>
              </li>
              <li>
                <p>40分钟</p>
              </li>
            </ul>
            <ul>
              <li><img src="../assets/images/删除.png" alt="" /></li>
              <li><img src="../assets/images/编辑.png" alt="" /></li>
            </ul>
          </div>
          <div>
            <ul>
              <li>
                <h4>快速送达</h4>
              </li>
              <li>
                <p>90分钟</p>
              </li>
            </ul>
            <ul>
              <li><img src="../assets/images/删除.png" alt="" /></li>
              <li><img src="../assets/images/编辑.png" alt="" /></li>
            </ul>
          </div>
          <div>
            <ul>
              <li>
                <h4>慢一点</h4>
              </li>
              <li>
                <p>120分钟</p>
              </li>
            </ul>
            <ul>
              <li><img src="../assets/images/删除.png" alt="" /></li>
              <li><img src="../assets/images/编辑.png" alt="" /></li>
            </ul>
          </div>
        </div>
      </div>
      <!-- 第三个小框 ************************-->
      <div class="info_kuang">
        <!-- /* 联系电话 和 增加按钮 / -->
        <div class="kuang_nav">
          <span class="nav_title">联系电话</span>
          <button class="nav_btn">新增联系人</button>
        </div>
        <!-- 绿线 -->
        <div class="kuang_line"></div>
        <!-- 联系人选择框 -->
        <div class="kuang_num">
          <div>
            <ul>
              <li>
                <h4>peter</h4>
              </li>
              <li>
                <p>+8613456789</p>
              </li>
            </ul>
            <ul>
              <li><img src="../assets/images/删除.png" alt="" /></li>
              <li><img src="../assets/images/编辑.png" alt="" /></li>
            </ul>
          </div>
          <div>
            <ul>
              <li>
                <h4>peter</h4>
              </li>
              <li>
                <p>+8613456789</p>
              </li>
            </ul>
            <ul>
              <li><img src="../assets/images/删除.png" alt="" /></li>
              <li><img src="../assets/images/编辑.png" alt="" /></li>
            </ul>
          </div>
          <div>
            <ul>
              <li>
                <h4>peter</h4>
              </li>
              <li>
                <p>+8613456789</p>
              </li>
            </ul>
            <ul>
              <li><img src="../assets/images/删除.png" alt="" /></li>
              <li><img src="../assets/images/编辑.png" alt="" /></li>
            </ul>
          </div>
        </div>
      </div>
      <!-- 第四个小框 ************************-->
      <div class="info_kuang">
        <!-- /* 联系电话 和 增加按钮 / -->
        <div class="kuang_nav">
          <span class="nav_title">送货地址</span>
          <button class="nav_btn">新增地址</button>
        </div>
        <!-- 绿线 -->
        <div class="kuang_line"></div>
        <!-- 联系人选择框 -->
        <div class="kuang_num">
          <div class="active">
            <ul>
              <li>
                <h4>peter</h4>
              </li>
              <li>
                <p>陕西省西安市北新街皇城东路</p>
              </li>
            </ul>
            <ul>
              <li><img src="../assets/images/删除.png" alt="" /></li>
              <li><img src="../assets/images/编辑.png" alt="" /></li>
            </ul>
          </div>

          <div>
            <ul>
              <li>
                <h4>peter</h4>
              </li>
              <li>
                <p>西安市北大街</p>
              </li>
            </ul>
            <ul>
              <li><img src="../assets/images/删除.png" alt="" /></li>
              <li><img src="../assets/images/编辑.png" alt="" /></li>
            </ul>
          </div>

          <div>
            <ul>
              <li>
                <h4>peter</h4>
              </li>
              <li>
                <p>西安市大差市</p>
              </li>
            </ul>
            <ul>
              <li><img src="../assets/images/删除.png" alt="" /></li>
              <li><img src="../assets/images/编辑.png" alt="" /></li>
            </ul>
          </div>
        </div>
      </div>
      <div class="agree">
        <label for=""><input type="checkbox" /></label>
        <span>通过进行此购买，您同意我们的 <a href="">条款和条件</a></span>
      </div>
      <button class="btn_pf">结账</button>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style lang="scss" scoped></style>
<style src="../assets/css/profile.css"></style>
<style src="../assets/css/payfor.css"></style>
