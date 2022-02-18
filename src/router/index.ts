import { createRouter, createWebHistory } from 'vue-router'

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
                keepAlive: false
            },
            component: () => import('@/views/Activity.vue')
        },
        {
            path: '/activityAdd',
            name: 'activityAdd',
            meta: {
                keepAlive: false
            },
            component: () => import('@/views/Sub/ActivityAdd.vue')
        },
        {
            path: '/activityDetail',
            name: 'activityDetail',
            meta: {
                keepAlive: false
            },
            component: () => import('@/views/Sub/ActivityDetail.vue')
        },
        {
            path: '/review',
            name: 'review',
            meta: {
                keepAlive: false
            },
            component: () => import('@/views/Review.vue')
        },
        {
            path: '/reviewDetail',
            name: 'reviewDetail',
            meta: {
                keepAlive: false
            },
            component: () => import('@/views/ReviewDetail.vue')
        },
        {
            path: '/person',
            name: 'person',
            meta: {
                keepAlive: false
            },
            component: () => import('@/views/Person.vue')
        },
        {
            path: '/personAdd',
            name: 'personAdd',
            meta: {
                keepAlive: false
            },
            component: () => import('@/views/Sub/PersonAdd.vue')
        },
        {
            path: '/personDetail',
            name: 'personDetail',
            meta: {
                keepAlive: false
            },
            component: () => import('@/views/Sub/PersonDetail.vue')
        },
        {
            path: '/collection',
            name: 'collection',
            meta: {
                keepAlive: false
            },
            component: () => import('@/views/Collection.vue')
        },
        {
            path: '/collectionAdd',
            name: 'collectionAdd',
            meta: {
                keepAlive: false
            },
            component: () => import('@/views/Sub/CollectionAdd.vue')
        },
        {
            path: '/collectionDetail',
            name: 'collectionDetail',
            meta: {
                keepAlive: false
            },
            component: () => import('@/views/Sub/CollectionDetail.vue')
        },
        {
            path: '/record',
            name: 'record',
            meta: {
                keepAlive: false
            },
            component: () => import('@/views/Record.vue')
        },
        {
            path: '/recordDetail',
            name: 'recordDetail',
            meta: {
                keepAlive: false
            },
            component: () => import('@/views/Sub/RecordDetail.vue')
        },
        {
            path: '/comment',
            name: 'comment',
            meta: {
                keepAlive: false
            },
            component: () => import('@/views/Comment.vue')
        }
    ]
})