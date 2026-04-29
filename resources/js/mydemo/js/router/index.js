import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    {
        path: '/',
        redirect: '/page1'
    },
    {
        path: '/page1',
        component: () => import('../pages/Page1.vue') // ✅ lazy load
    },
    {
        path: '/page2',
        component: () => import('../pages/Page2.vue') // ✅ lazy load
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router