<template>
  <div class="order_invoice">
    <div class="o-invoice-title">谢谢！我们已收到您的订单。</div>

    <div class="o-invoice-order">
      <div class="o-invoice-order-title">
        <h4>收到订单</h4>
      </div>
      <div class="o-invoice-order-body">
        <div>
          <span>订单号</span>
          <p>1665</p>
        </div>
        <div>
          <span>订购日期</span>
          <p>2021年2月2日</p>
        </div>
        <div>
          <span>总金额</span>
          <p>24,176.00元</p>
        </div>
        <div>
          <span>付款方法</span>
          <p>货到付款</p>
        </div>
      </div>
    </div>

    <div class="o-invoice-cardbox">
      <div class="o-invoice-order">
        <div class="o-invoice-order-title">
          <h4>订单详细信息</h4>
        </div>
        <ul>
          <li>
            <span>总项目</span>
            <p>6项</p>
          </li>
          <li>
            <span>订购时间</span>
            <p>2021年10月12日下午1点</p>
          </li>
          <li>
            <span>交货时间</span>
            <p>90分钟快递</p>
          </li>
          <li>
            <span>交货地点</span>
            <p>House 17/A，西贾尔库里，达卡</p>
          </li>
        </ul>
      </div>
      <div class="o-invoice-order">
        <div class="o-invoice-order-title">
          <h4>金额明细</h4>
        </div>
        <ul>
          <li>
            <span>小计</span>
            <p>10,864.00元</p>
          </li>
          <li>
            <span>折扣</span>
            <p>$20.00</p>
          </li>
          <li>
            <span>付款方法</span>
            <p>货到付款</p>
          </li>
          <li>
            <span>总计 （含增值税）</span>
            <p>10,874.00美元</p>
          </li>
        </ul>
      </div>
    </div>

    <div class="o-history-box">
      <div class="o-history-list-body">
        <ul class="o-history-list-body-tit">
          <li>编号</li>
          <li>图片</li>
          <li>名称</li>
          <li>单价</li>
          <li>产地</li>
          <li>数量</li>
        </ul>
        <ul class="o-history-list-body-desc bg-none">
          <li>01</li>
          <li><img src="../assets/images/product/01.jpg" alt=""></li>
          <li>产品名称</li>
          <li>19元/公斤</li>
          <li>生鲜公司生鲜公司生鲜公司生鲜公司生鲜公司</li>
          <li>9</li>
        </ul>
        <ul class="o-history-list-body-desc bg-none">
          <li>02</li>
          <li><img src="../assets/images/product/02.jpg" alt=""></li>
          <li>产品名称</li>
          <li>19元/公斤</li>
          <li>生鲜公司</li>
          <li>9</li>
        </ul>
        <ul class="o-history-list-body-desc bg-none">
          <li>03</li>
          <li><img src="../assets/images/product/03.jpg" alt=""></li>
          <li>产品名称</li>
          <li>19元/公斤</li>
          <li>生鲜公司</li>
          <li>9</li>
        </ul>
        <ul class="o-history-list-body-desc bg-none">
          <li>04</li>
          <li><img src="../assets/images/product/04.jpg" alt=""></li>
          <li>产品名称</li>
          <li>19元/公斤</li>
          <li>生鲜公司</li>
          <li>9</li>
        </ul>
        <ul class="o-history-list-body-desc bg-none">
          <li>05</li>
          <li><img src="../assets/images/product/05.jpg" alt=""></li>
          <li>产品名称</li>
          <li>19元/公斤</li>
          <li>生鲜公司</li>
          <li>9</li>
        </ul>
      </div>
    </div>

    <div class="order-invoice-btn">
      <router-link to="/" class="link">返回首页</router-link>
    </div>
  </div>
</template>

<script>
export default {
  
}
</script>

<style lang="scss" scoped>
.order_invoice {
  width: 1300px;
  margin: 0 auto;
}
</style>
<style scoped src="../assets/css/order.css"></style>