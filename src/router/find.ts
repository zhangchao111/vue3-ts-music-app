import { RouteRecordRaw } from 'vue-router'

const FindRouter:RouteRecordRaw={
    path: '/find',
    name: 'find',
    component: () => import(/* webpackChunkName: "find" */ '@/views/find/index.vue'),
}

export default FindRouter;
