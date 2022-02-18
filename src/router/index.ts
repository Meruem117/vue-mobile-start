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
            path: '/apply',
            name: 'apply',
            meta: {
                keepAlive: false
            },
            component: () => import('@/views/Apply.vue')
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
            path: '/collection',
            name: 'collection',
            meta: {
                keepAlive: false
            },
            component: () => import('@/views/Collection.vue')
        }
    ]
})