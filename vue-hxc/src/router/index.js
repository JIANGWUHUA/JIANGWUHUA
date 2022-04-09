import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
  {
    //个人信息
    path: '/profile',
    name: 'profile',
    component: () => import('../views/Profile.vue'),
  },
  {
    // 支 付 页 面
    path: '/payfor',
    name: 'payfor',
    component: () => import('../views/PayFor.vue'),
  },
  {
    //个人信息页面重置密码
    path: '/resetpwd',
    name: 'resetpwd',
    component: () => import('../views/ResetPwd.vue'),
  },
  {
    //忘记密码
    path: '/forgotpwd',
    name: 'forgotpwd',
    component: () => import('../views/ForgotPwd.vue'),
  },
  {
    // 注册路由
    path: '/register',
    name: 'register',
    component: () => import('../views/Register.vue'),
  },
  
    {
      // 主页登陆路由
      path: '/login',
      name: 'login',
      component: () => import('../views/Login.vue'),
    },
  
  {
    path: '/order_invoice',
    name: 'order_invoice',
    component: () => import('../views/OrderInvoice.vue'),
  },
  {
    path: '/order_history',
    name: 'order_history',
    component: () => import('../views/OrderHistory.vue'),
  },
  {
     // 全部商品
    path: '/product/display',
    name: 'productDisplay',
    component: () => import('../views/ProductDisplay.vue'),
  },
  {
    path: '/product',
    name: 'productDisplay',
    redirect: '/product/display',
    component: () => import('../views/ProductDisplay.vue'),
  },
  {
    //商品详情
    path: '/product/details',
    name: 'productDetails',
    component: () => import('../views/ProductDetails.vue'),
  },
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
