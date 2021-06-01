import { RouteRecordRaw } from 'vue-router'

const YuncunRouter:RouteRecordRaw={
    path: '/yuncun',
    name: 'yuncun',
    component: () => import(/* webpackChunkName: "find" */ '@/views/yuncun/index.vue'),
    meta: {
        index: 1
    }
}

export default YuncunRouter;
