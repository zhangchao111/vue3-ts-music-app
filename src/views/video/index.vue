<template>
    <div class="video-warp">
        <van-tabs v-model:active="active" swipeable>
            <van-tab title="关注" name="gz">
                <div class="gzwarp">
                    <div class="titles">
                        我的云圈 <span>(还没有假如云圈)</span>
                    </div>
                    <div class="qygc ">
                        <span>去云圈广场逛逛</span>
                        <van-icon name="arrow" />
                    </div>
                    <div class="items-warp">
                        <div class="item">
                            <div class="left">
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
                            <div class="right">
                                <div class="titles">网易云音乐  分享单曲</div>
                                <div class="time">46分钟前</div>
                                <div class="description">
                                    <p>#云村夜话#</p>
                                    <p>听到诗，你第一时间能想到那首诗或者哪位诗人</p>
                                    <div class="img">
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
                                    <div class="name">
                                        <div class="avator">
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
                                        <div class="subtitle">
                                            <p>清平调（独唱版）</p>
                                            <p>王菲</p>
                                        </div>
                                        <div class="ins">
                                            网易云音乐的云圈
                                        </div>
                                        <div class="rate">
                                            <div class="left"><span class="icon m_iconfont m_iconxunhuan1
"></span>1</div>
                                            <div class="middle1"><span class="icon m_iconfont m_iconweibiaoti-
"></span>78</div>
                                            <div class="middle2"><span class="icon m_iconfont m_iconzan
"></span>103</div>
                                            <div class="right"><span class="icon m_iconfont m_iconziyuan
"></span></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </van-tab>
            <van-tab title="推荐" name="tj">
                <van-tabs v-model:active="activeItem" swipeable>
                    <van-tab v-for="(item,index) in list" :title="item.title" :name="item.name" :key="index">
                        <van-search v-model="videoSearch" v-if="activeItem=='gc'" placeholder="请输入搜索关键词" />
                        <loads-more @onLoadMore="onLoadMore" ref="loadmores">
                            <div class="warp">
                                <div class="item" v-for="i in current" :key="index" @click="goLinks('/video/details',{})">
                                    <div class="imgs">
                                        <div class="icons">
                                            <van-icon name="star-o" class="icont" />
<!--                                            <van-icon name="fire-o" />-->
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
                                        <div class="title van-multi-ellipsis--l2">
                                            这是一段最多显示两行的文字，多余的内容会被省略 这是一段最多显示两行的文字，多余的内容会被省略 这是一段最多显示两行的文字，多余的内容会被省略
                                        </div>
                                        <div class="tips">
                                            <div class="left"><span class="icon m_iconfont m_iconbofang1"></span>33.72万</div>
                                            <div class="middle"><span class="icon m_iconfont m_iconzan"></span>8888</div>
                                            <div class="right">{{parseInt(Math.random()*100+1)%3==1?'音乐安利':'混剪'}}</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </loads-more>

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
        provide,
        onBeforeMount,
        onMounted,
        onBeforeUpdate,
        onBeforeUnmount,
        onUnmounted,
        watch,
        watchEffect
    } from 'vue'
    import {useRouter } from 'vue-router';
    export default defineComponent({
        components: {},
        setup() {
            const router = useRouter();
            const active=ref("gz");
            const activeItem=ref("gc")
            const videoSearch=ref("");
            const loadmores=ref(null);
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
            const current=ref(6)
            const  enableLoadMore=ref<boolean>(false);
            const goLinks=(path:string,query:any)=>{
                router.push({path,query})
            }
            const onLoadMore=(callback:any)=>{
                current.value+=6;
                callback()
                console.log(22222)
            }
            provide('enableLoadMore',enableLoadMore)
            return {
                list,
                active,
                activeItem,
                videoSearch,
                goLinks,
                onLoadMore,
                current,
                loadmores
            }
        },
        methods: {}
    })
</script>
<style>

</style>
