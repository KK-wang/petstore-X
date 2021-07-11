import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'home',
    component: () => import('@/views/home/home'),
  },
  {
    path: '/login',
    name: 'login',
    component: () => import("@/views/signIn/signIn")
  },
  {
    path: '/main',
    name: 'main',
    redirect: '/main/cart',
    component: () => import("@/views/layout/layout"),
    children: [
      {
        path: 'cart',
        name: 'cart',
        component: () => import("@/views/cart/cart")
      },
      {
        path: 'orderList',
        name: 'orderList',
        component: () => import("@/views/orderList/orderList")
      },
      {
        path: 'category',
        name: 'category',
        component: () => import("@/views/category/category")
      },
      {
        path: 'product',
        name: 'product',
        component: () => import("@/views/product/product")
      },
      {
        path: 'search',
        name: 'search',
        component: () => import("@/views/search/search")
      },
      {
        path: 'user',
        name: 'user',
        redirect: 'profile',
        component: () => import("@/views/user/index"),
        children: [
          {
            path: 'profile',
            name: 'profile',
            component: () => import("@/views/user/profile/index")
          },
          {
            path: 'log',
            name: 'log',
            component: () => import("@/views/user/log/index")
          },
          {
            path: 'collection',
            name: 'collection',
            component: () => import("@/views/collection/collection"),
          },
        ]
      },
      {
        path: 'message',
        name: 'message',
        component: () => import("@/views/user/message/index")
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
