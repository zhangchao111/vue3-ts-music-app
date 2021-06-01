import { RouteRecordRaw } from 'vue-router'

const VideoRouter:RouteRecordRaw={
    path: '/video',
    name: 'video',
    component: () => import(/* webpackChunkName: "find" */ '@/views/video/index.vue'),
    meta: {
        index: 1
    },
}

export default VideoRouter;
