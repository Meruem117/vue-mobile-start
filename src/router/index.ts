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
      path: '/mine',
      name: 'mine',
      meta: {
        keepAlive: false
      },
      component: () => import('@/views/Mine.vue')
    },
    {
      path: '/activity',
      name: 'activity',
      meta: {
        keepAlive: false,
        title: 'Activity'
      },
      component: () => import('@/views/Activity.vue')
    },
    {
      path: '/activityAdd',
      name: 'activityAdd',
      meta: {
        keepAlive: false,
        title: 'Add Activity'
      },
      component: () => import('@/views/Activity/ActivityAdd.vue')
    },
    {
      path: '/activityDetail',
      name: 'activityDetail',
      meta: {
        keepAlive: false,
        title: 'Activity Detail'
      },
      component: () => import('@/views/Activity/ActivityDetail.vue')
    },
    {
      path: '/activityRecord',
      name: 'activityRecord',
      meta: {
        keepAlive: false,
        title: 'Activity Record'
      },
      component: () => import('@/views/Activity/ActivityRecord.vue')
    },
    {
      path: '/recordDetail',
      name: 'recordDetail',
      meta: {
        keepAlive: false,
        title: 'Record Detail'
      },
      component: () => import('@/views/Activity/RecordDetail.vue')
    },
    {
      path: '/review',
      name: 'review',
      meta: {
        keepAlive: false,
        title: 'Review'
      },
      component: () => import('@/views/Review.vue')
    },
    {
      path: '/reviewDetail',
      name: 'reviewDetail',
      meta: {
        keepAlive: false,
        title: 'Review Detail'
      },
      component: () => import('@/views/Review/ReviewDetail.vue')
    },
    {
      path: '/person',
      name: 'person',
      meta: {
        keepAlive: false,
        title: 'Person'
      },
      component: () => import('@/views/Person.vue')
    },
    {
      path: '/personAdd',
      name: 'personAdd',
      meta: {
        keepAlive: false,
        title: 'Add Person'
      },
      component: () => import('@/views/Person/PersonAdd.vue')
    },
    {
      path: '/personDetail',
      name: 'personDetail',
      meta: {
        keepAlive: false,
        title: 'Person Detail'
      },
      component: () => import('@/views/Person/PersonDetail.vue')
    },
    {
      path: '/collection',
      name: 'collection',
      meta: {
        keepAlive: false,
        title: 'Collection'
      },
      component: () => import('@/views/Collection.vue')
    },
    {
      path: '/collectionAdd',
      name: 'collectionAdd',
      meta: {
        keepAlive: false,
        title: 'Add Collection'
      },
      component: () => import('@/views/Collection/CollectionAdd.vue')
    },
    {
      path: '/collectionDetail',
      name: 'collectionDetail',
      meta: {
        keepAlive: false,
        title: 'Collection Detail'
      },
      component: () => import('@/views/Collection/CollectionDetail.vue')
    },
    {
      path: '/comment',
      name: 'comment',
      meta: {
        keepAlive: false,
        title: 'Comment'
      },
      component: () => import('@/views/Comment.vue')
    }
  ]
})