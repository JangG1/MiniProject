import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from '../views/Main.vue'
Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        // name: 'Main',
        component: Main,
        children: [
            {
                path: '',
                component: () => import ('@/components/mainPage/productTable.vue')
            }, {
                path: "/store",
                component: () => import ('../views/store.vue')
            }, {
                path: "/test",
                component: () => import ('@/components/mainPage/test.vue')
            }, {
                path: '/shopping',
                component: () => import ('../views/shopping.vue')
            },
        ]
    }, {
        path: '/Login',
        name: 'Login',
        component: () => import ('../views/Login.vue')
    }, {
        path: '/blank',
        component: () => import ('../views/blank.vue')
    }, {
        path: '/signUp',
        component: () => import ('../views/signUp.vue')
    }, {
        path: '/join1',
        component: () => import ('../views/Join.vue')
    }, {
        path: '*',
        component: () => import ('../views/blank.vue')
    }
]

const router = new VueRouter(
    {mode: 'history', base: process.env.BASE_URL, routes}
)

export default router
