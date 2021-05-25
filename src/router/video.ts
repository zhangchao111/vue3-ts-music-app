import { RouteRecordRaw } from 'vue-router'

const VideoRouter:RouteRecordRaw={
    path: '/video',
    name: 'video',
    component: () => import(/* webpackChunkName: "find" */ '@/views/video/index.vue'),
}

export default VideoRouter;
