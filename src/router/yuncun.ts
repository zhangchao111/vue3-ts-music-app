import { RouteRecordRaw } from 'vue-router'

const YuncunRouter:RouteRecordRaw={
    path: '/yuncun',
    name: 'yuncun',
    component: () => import(/* webpackChunkName: "find" */ '@/views/yuncun/index.vue'),
}

export default YuncunRouter;
