import { createRouter, createWebHistory } from 'vue-router'

declare module 'vue-router' {
  interface RouteMeta {
    keepAlive: boolean,
    title?: string
  }
}

export default createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      redirect: '/login'
    },
    {
      path: '/login',
      name: 'login',
      meta: {
        keepAlive: false
      },
      component: () => import('@/views/Login.vue')
    },
    {
      path: '/home',
      name: 'home',
      meta: {
        keepAlive: false
      },
      component: () => import('@/views/Home.vue')
    },
    {
      path: '/chart',
      name: 'chart',
      meta: {
        keepAlive: false
      },
      component: () => import('@/views/Chart.vue')
    },
    {
      path: '/mine',
      name: 'mine',
      meta: {
        keepAlive: false
      },
      component: () => import('@/views/Mine.vue')
    }
  ]
})