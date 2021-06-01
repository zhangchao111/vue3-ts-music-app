import { RouteRecordRaw } from 'vue-router'

const FindRouter:RouteRecordRaw={
    path: '/find',
    name: 'find',
    component: () => import(/* webpackChunkName: "find" */ '@/views/find/index.vue'),
    meta: {
        index: 1
    }
}

export default FindRouter;
