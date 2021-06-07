<template>
<div class="user-warp">
    <div class="top">
        <div class="left">
            <div class="left-l">
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
            <div class="left-r">
                <p class="p-t">234234234234</p>
                <p class="p-c"><span class="span1">VIP续费</span> <span class="span2">Lv.7</span></p>
            </div>
        </div>
        <div class="right">
            <span class="icon m_iconfont m_iconxiayibu"></span>
        </div>
    </div>
    <div class="grid-warp">
        <van-grid :border="false" :column-num="4">
            <van-grid-item slots="default" v-for="(item,index) in gridList" :key="index">
                <div class="gridContent">
                    <span :class="[item.icon,'icon','m_iconfont']"></span>
                    <p><span class="dot" v-if="item.dot"></span> {{item.text}}</p>
                </div>
            </van-grid-item>
        </van-grid>
        <div class="bottoms">
            <div class="left">
                <div class="left-l">
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
                <div class="left-r">
                    <p class="p-t">234234234234</p>
                </div>
            </div>
            <div class="right">
                <span class="icon m_iconfont m_iconguanbi"></span>
            </div>
        </div>
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
        setup(prop,context) {
            const state=reactive({
                gridList:[
                    {icon:'m_iconchangpian',text:'本地/下载',path:'',dot:true,},
                    {icon:'m_iconzhuanji',text:'云盘',path:''},
                    {icon:'m_iconshoutibao',text:'已购',path:''},
                    {icon:'m_iconyinyue',text:'最近播放',path:''},
                    {icon:'m_iconyonghu2',text:'我的好友',path:''},
                    {icon:'m_iconzan',text:'收藏和赞',path:''},
                    {icon:'m_iconFM_weixuanze',text:'我的播客',path:''},
                    {icon:'m_iconicon-test1',text:'音乐应用',path:'',dot:true,},
                ]
            })
            return {
              ...state
            }
        },
        methods: {}
    })
</script>
<style>

</style>
