import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
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
    path: '/product/display',
    name: 'productDisplay',
    component: () => import('../views/ProductDisplay.vue'),
  },
  {
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
