<template>
  <div class="order_history">
    <div class="o-history-title">
      <span>总订单 - (4)</span>
      <div>
        <span>选择:</span>
        <select class="form-select">
          <option value="all">所有订单</option>
          <option value="recieved">收到订单</option>
          <option value="processed">已处理订单</option>
          <option value="shipped">发货订单</option>
          <option value="delivered">已交付订单</option>
        </select>
      </div>
    </div>

    <!-- 订单#01 -->
    <div class="o-history-box">
      <div class="o-history-list">
        <div class="o-history-list-head open">
          <span>订单#01</span>
          <span>收到订单</span>
        </div>

        <div>
          <div class="o-history-list-state">
            <ul class="order-track-list">
              <li class="order-track-item active">
                  <img src="../assets/images/order-track-item-active.jpg" alt="">
                  <span>收到订单</span>
              </li>
              <li class="order-track-item">
                  <img src="../assets/images/order-track-item.jpg" alt="">
                  <span>已处理订单</span>
              </li>
              <li class="order-track-item">
                  <img src="../assets/images/order-track-item.jpg" alt="">
                  <span>订单出货</span>
              </li>
              <li class="order-track-item">
                  <img src="../assets/images/order-track-item.jpg" alt="">
                  <span>订单已交付</span>
              </li>
            </ul>
          </div>

          <div class="o-history-list-details">
            <div class="o-history-list-details-item">
              <ul class="orderlist-details">
                <li>
                  <span>订单编号</span>
                  <p>14667</p>
                </li>
                <li>
                  <span>总项目</span>
                  <p>6项</p>
                </li>
                <li>
                  <span>订购时间</span>
                  <p>2021年2月7日</p>
                </li>
                <li>
                  <span>交货时间</span>
                  <p>2021年2月12日</p>
                </li>
              </ul>
            </div>

            <div class="o-history-list-details-item">
              <ul class="orderlist-details">
                <li>
                  <span>小计</span>
                  <p>10,864.00 美元</p>
                </li>
                <li>
                  <span>折扣</span>
                  <p>$20.00</p>
                </li>
                <li>
                  <span>送货费</span>
                  <p>$49.00</p>
                </li>
                <li>
                  <span>总计</span>
                  <p>10,874.00 美元</p>
                </li>
              </ul>
            </div>

            <div class="o-history-list-details-item">
              <ul class="orderlist-details">
                <li>收货信息</li>
                <li><p>联系姓名：Jalkuri</p></li>
                <li><p>联系电话：13899889988</p></li>
                <li><p>收货地址：Jalkuri, Fatullah, arayanganj-1420。字号 09，路号 17/A</p></li>
              </ul>
            </div>
          </div>

          <div class="o-history-list-body">
            <ul class="o-history-list-body-tit">
              <li>编号</li>
              <li>图片</li>
              <li>名称</li>
              <li>单价</li>
              <li>产地</li>
              <li>数量</li>
            </ul>
            <ul class="o-history-list-body-desc">
              <li>01</li>
              <li><img src="../assets/images/product/01.jpg" alt=""></li>
              <li>产品名称</li>
              <li>19元/公斤</li>
              <li>生鲜公司生鲜公司生鲜公司生鲜公司生鲜公司</li>
              <li>9</li>
            </ul>
            <ul class="o-history-list-body-desc">
              <li>02</li>
              <li><img src="../assets/images/product/02.jpg" alt=""></li>
              <li>产品名称</li>
              <li>19元/公斤</li>
              <li>生鲜公司</li>
              <li>9</li>
            </ul>
            <ul class="o-history-list-body-desc">
              <li>03</li>
              <li><img src="../assets/images/product/03.jpg" alt=""></li>
              <li>产品名称</li>
              <li>19元/公斤</li>
              <li>生鲜公司</li>
              <li>9</li>
            </ul>
            <ul class="o-history-list-body-desc">
              <li>04</li>
              <li><img src="../assets/images/product/04.jpg" alt=""></li>
              <li>产品名称</li>
              <li>19元/公斤</li>
              <li>生鲜公司</li>
              <li>9</li>
            </ul>
            <ul class="o-history-list-body-desc">
              <li>05</li>
              <li><img src="../assets/images/product/05.jpg" alt=""></li>
              <li>产品名称</li>
              <li>19元/公斤</li>
              <li>生鲜公司</li>
              <li>9</li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <!-- 订单#02 -->
    <div class="o-history-box">
      <div class="o-history-list">
        <div class="o-history-list-head">
          <span>订单#02</span>
          <span>已处理订单</span>
        </div>

        <div>订单#02，内容同#01</div>
      </div>
    </div>

    <!-- 订单#03 -->
    <div class="o-history-box">
      <div class="o-history-list">
        <div class="o-history-list-head">
          <span>订单#03</span>
          <span>发货订单</span>
        </div>
        <div>订单#03，内容同#01</div>
      </div>
    </div>

    <!-- 订单#04 -->
    <div class="o-history-box">
      <div class="o-history-list">
        <div class="o-history-list-head">
          <span>订单#04</span>
          <span>已交付订单</span>
        </div>
        <div>订单#04，内容同#01</div>
      </div>
    </div>

    <!-- 页码 -->
    <div class="o-history-pagination">
      <li class="o-history-page-item">
        <a class="o-history-page-link" href=""> < </a>
      </li>
      <li class="o-history-page-item">
        <a class="o-history-page-link active" href="">1</a>
      </li>
      <li class="o-history-page-item">
        <a class="o-history-page-link" href="">2</a>
      </li>
      <li class="o-history-page-item">
        <a class="o-history-page-link" href="">3</a>
      </li>
      <li class="o-history-page-item">...</li>
      <li class="o-history-page-item">
        <a class="o-history-page-link" href="">65</a>
      </li>
      <li class="o-history-page-item">
        <a class="o-history-page-link" href=""> > </a>
      </li>
    </div>
  </div>
</template>

<script>
export default {
  
}
</script>

<style lang="scss" scoped>
.order_history {
  width: 1300px;
  margin: 0 auto;
}
</style>
<style scoped src="../assets/css/order.css"></style>