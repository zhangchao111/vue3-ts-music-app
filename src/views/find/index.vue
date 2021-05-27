<template>
    <div class="find-warp">
        <van-swipe :autoplay="3000" lazy-render class="find-swiper">
            <van-swipe-item v-for="image in images" :key="image">
                <van-image
                        width="7.5rem"
                        height="2.2rem"
                        :src="image"
                />
            </van-swipe-item>
        </van-swipe>
        <div class="find-Menu">
            <div class="warp" :style="{'width':menuList.length*1.57+'rem'}">
                    <div class="menu-item" v-for="(item,index) in menuList" :key="index">
                        <div class="menu-iconwarp">
                            <span :class="[item.src,'icon','m_iconfont']"></span>
                        </div>
                        <div class="menu-title">{{item.name}}</div>
                    </div>
            </div>
        </div>

        <div class="find-tjgd">
            <itips>
                <template v-slot>111</template>
<!--                <template v-slot:default>111</template>-->
            </itips>
        </div>



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
            const images =reactive([
                'https://img.yzcdn.cn/vant/apple-1.jpg',
                'https://img.yzcdn.cn/vant/apple-2.jpg',
            ]);
            const menuList=reactive([
                {src:'m_iconmeirigengxin',name:'每日推荐'},
                {src:'m_iconFM_weixuanze',name:'私人FM'},
                {src:'m_icongedan',name:'歌单'},
                {src:'m_iconpaihangbang',name:'排行榜'},
                {src:'m_iconhuiyuan',name:'直播'},
                {src:'m_iconzhuanji',name:'数字专辑'},
                {src:'m_iconhuiyuan',name:'专注冥想'},
                {src:'m_iconyinle1',name:'歌房'},
                {src:'m_iconhanhan-01-01',name:'游戏专区'},
            ])
            return {images,menuList}
        },
        methods: {}
    })
</script>
<style>

</style>
