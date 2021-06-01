import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Layout from '@/views/layout/index.vue';

/** 自动加载其他路由模块 */
const files = require.context('.', true, /\.ts$/)
const modules: Array<RouteRecordRaw> = []
files.keys().forEach(key => {
  if (key === './index.ts') return
  modules.push(files(key).default)
})

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    component: Layout,
    redirect:'/home',
    children: [
      {
        path: '/home',
        name: 'home',
        component: () => import(/* webpackChunkName: "find" */ '@/views/index/index.vue'),
        meta: {
          index: 1
        }
      },
      ...modules,
      {
        path: '/video/details',
        name: 'video-details',
        component: () => import(/* webpackChunkName: "home" */ '@/views/video/details.vue'),
        meta: {
          index:2
        }
      },
    ]
  },


]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
