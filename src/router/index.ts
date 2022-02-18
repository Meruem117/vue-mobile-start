import { createRouter, createWebHistory } from 'vue-router'

declare module 'vue-router' {
  interface RouteMeta {
    keepAlive: boolean,
    title: string
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
        keepAlive: false,
        title: '登录'
      },
      component: () => import('@/views/Login.vue')
    },
    {
      path: '/home',
      name: 'home',
      meta: {
        keepAlive: false,
        title: '首页'
      },
      component: () => import('@/views/Home.vue')
    },
    {
      path: '/mine',
      name: 'mine',
      meta: {
        keepAlive: false,
        title: '我的'
      },
      component: () => import('@/views/Mine.vue')
    },
    {
      path: '/activity',
      name: 'activity',
      meta: {
        keepAlive: false,
        title: '活动管理'
      },
      component: () => import('@/views/Activity.vue')
    },
    {
      path: '/activityAdd',
      name: 'activityAdd',
      meta: {
        keepAlive: false,
        title: '新增活动'
      },
      component: () => import('@/views/Activity/ActivityAdd.vue')
    },
    {
      path: '/activityDetail',
      name: 'activityDetail',
      meta: {
        keepAlive: false,
        title: '活动详情'
      },
      component: () => import('@/views/Activity/ActivityDetail.vue')
    },
    {
      path: '/activityRecord',
      name: 'activityRecord',
      meta: {
        keepAlive: false,
        title: '报名记录'
      },
      component: () => import('@/views/Activity/ActivityRecord.vue')
    },
    {
      path: '/recordDetail',
      name: 'recordDetail',
      meta: {
        keepAlive: false,
        title: '报名详情'
      },
      component: () => import('@/views/Activity/RecordDetail.vue')
    },
    {
      path: '/activityComment',
      name: 'activityComment',
      meta: {
        keepAlive: false,
        title: '评论记录'
      },
      component: () => import('@/views/Activity/ActivityComment.vue')
    },
    {
      path: '/review',
      name: 'review',
      meta: {
        keepAlive: false,
        title: '报名审核'
      },
      component: () => import('@/views/Review.vue')
    },
    {
      path: '/reviewDetail',
      name: 'reviewDetail',
      meta: {
        keepAlive: false,
        title: '审核详情'
      },
      component: () => import('@/views/Review/ReviewDetail.vue')
    },
    {
      path: '/person',
      name: 'person',
      meta: {
        keepAlive: false,
        title: '先锋人物'
      },
      component: () => import('@/views/Person.vue')
    },
    {
      path: '/personAdd',
      name: 'personAdd',
      meta: {
        keepAlive: false,
        title: '新增先锋人物'
      },
      component: () => import('@/views/Person/PersonAdd.vue')
    },
    {
      path: '/personDetail',
      name: 'personDetail',
      meta: {
        keepAlive: false,
        title: '先锋人物详情'
      },
      component: () => import('@/views/Person/PersonDetail.vue')
    },
    {
      path: '/collection',
      name: 'collection',
      meta: {
        keepAlive: false,
        title: '乐享集锦'
      },
      component: () => import('@/views/Collection.vue')
    },
    {
      path: '/collectionAdd',
      name: 'collectionAdd',
      meta: {
        keepAlive: false,
        title: '新增乐享集锦'
      },
      component: () => import('@/views/Collection/CollectionAdd.vue')
    },
    {
      path: '/collectionDetail',
      name: 'collectionDetail',
      meta: {
        keepAlive: false,
        title: '乐享集锦详情'
      },
      component: () => import('@/views/Collection/CollectionDetail.vue')
    }
  ]
})