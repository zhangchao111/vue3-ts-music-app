<template>
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
                    <div class="r-titles">网易云音乐  <span>分享单曲</span></div>
                    <div class="time">46分钟前</div>
                    <div class="description">
                        <p class="p-ycyh">#云村夜话#</p>
                        <p class="p-text">听到诗，你第一时间能想到那首诗或者哪位诗人</p>
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
                        </div>
                        <div class="ins">
                            <span>网易云音乐的云圈</span>
                        </div>
                        <div class="rate">
                            <div class="pub r-left"><span class="icon m_iconfont m_iconxunhuan1
"></span> 1</div>
                            <div class="pub middle1"><span class="icon m_iconfont m_iconweibiaoti-
"></span> 78</div>
                            <div class="pub middle2"><span class="icon m_iconfont m_iconzan
"></span> 103</div>
                            <div class="pub r-right"><span class="icon m_iconfont m_iconziyuan
"></span></div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
        <div class="loadmores van-hairline--bottom">
            展开更多历史动态
            <van-icon name="arrow-down" />
            <!--                        <van-icon name="arrow-up" />-->
        </div>


    </div>

    <div class="gxqr">
        <itips>
            <template #title>你可能感兴趣的人</template>
            <template #more>更多 <van-icon name="arrow" /></template>
        </itips>
        <div class="gxqr-warp">
            <swiper
                    :spaceBetween="10"
                    :loop="false"
                    :slidesPerView="3.2"
                    class="swiper-container"
            >
                <swiper-slide class="gxqr-item" v-for="i in 8" :key="i"  >
                    <div class="pure_top purple"></div>
                    <div class="icon_close"> X</div>
                    <div class="main">
                        <div class="img">

                        </div>
                        <div class="names">郭峰</div>
                        <div class="description">歌手，制作人，词曲专家</div>
                        <div class="btn">+ 关注</div>
                    </div>
                </swiper-slide>
            </swiper>
        </div>


    </div>
</template>
<script lang="ts">
    import {
        defineComponent,
        ref,
        onBeforeMount,
        onMounted,
        onBeforeUpdate,
        onBeforeUnmount,
        onUnmounted,
        watch,
        watchEffect
    } from 'vue'
    import { Swiper, SwiperSlide } from 'swiper/vue';
    import 'swiper/swiper.min.css';
    import 'swiper/components/pagination/pagination.less';
    export default defineComponent({
        components: {
            Swiper,
            SwiperSlide,
        },
        setup() {

            return {}
        },
        methods: {}
    })
</script>
<style>

</style>
