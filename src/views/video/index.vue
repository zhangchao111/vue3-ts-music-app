<template>
    <div class="video-warp">
        <van-tabs v-model:active="active" swipeable>
            <van-tab title="关注" name="gz">内容 1</van-tab>
            <van-tab title="推荐" name="tj">
                <van-tabs v-model:active="activeItem" swipeable>
                    <van-tab v-for="(item,index) in list" :title="item.title" :name="item.name" :key="index">
                        <van-search v-model="videoSearch" placeholder="请输入搜索关键词" />
                        <div class="warp">
                            <div class="item" v-for="i in 6" :key="index">
                                <div class="imgs">
                                    <div class="icons">
                                        <van-icon name="star-o" />
                                        <van-icon name="fire-o" />
                                    </div>
                                    <van-image
                                            fit="cover"
                                            width="100%"
                                            height="100%"
                                            class="img"
                                            loading-icon="user-circle-o"
                                            error-icon="user-circle-o"
                                            src="https://img.yzcdn.cn/vant/cat.jpeg"
                                    >
                                    </van-image>
                                </div>
                                <div class="content">
                                   <div class="title">

                                   </div>
                                    <div class="tips">
                                        <div class="left"><span class="icon m_iconfont m_iconbofang1"></span></div>
                                        <div class="middle"><span class="icon m_iconfont m_iconzan"></span></div>
                                        <div class="right">{{parseInt(Math.random()*100+1)%3==1?'音乐安利':'混剪'}}</div>{{parseInt(Math.random()*100+1)%2==0}}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </van-tab>
                </van-tabs>
            </van-tab>
        </van-tabs>
    </div>

</template>
<script lang="ts">
    import {
        defineComponent,
        ref,
        reactive,
        onBeforeMount,
        onMounted,
        onBeforeUpdate,
        onBeforeUnmount,
        onUnmounted,
        watch,
        watchEffect
    } from 'vue'

    export default defineComponent({
        components: {},
        setup() {
            const active=ref("tj");
            const activeItem=ref("gc")
            const videoSearch=ref("");
            const list=reactive([
                {title:'广场',name:'gc',data:[]},
                {title:'音乐人',name:'yyr',data:[]},
                {title:'音乐安利',name:'yyal',data:[]},
                {title:'演奏',name:'yz',data:[]},
                {title:'MV',name:'mv',data:[]},
                {title:'云音乐出品',name:'yyycp',data:[]},
                {title:'生活',name:'sh',data:[]},
                {title:'舞蹈',name:'wd',data:[]},
                {title:'混剪',name:'hj',data:[]},
            ])

            return {
                list,
                active,
                activeItem,
                videoSearch
            }
        },
        methods: {}
    })
</script>
<style>

</style>
