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
            <div class="lefts">
                <div class="left-ls">
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
                <div class="left-rs">
                    <p class="p-t"><span>直播</span>234234234234</p>
                </div>
            </div>
            <div class="rights">
                <span class="icon m_iconfont m_iconguanbi"></span>
            </div>
        </div>

    </div>

    <div class="onekey">
        <div class="lefts">
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
        <div class="rights">
            一键导入外部音乐
        </div>
    </div>
    <div class="favitive">
        <div class="tops">
            <div class="left">
                收藏歌单
            </div>
            <div class="right">
                <span class="icon m_iconfont m_iconziyuan"></span>
            </div>
        </div>
        <div class="content">
            <div class="items">

            </div>
            <div class="notlist">
                暂无收藏的歌单
            </div>
        </div>
    </div>
    <div class="listPlays">
        <div class="tops">
            <div class="left">
                歌单助手
            </div>
        </div>
        <div class="content">
            <div class="tips">
                <div class="p-1">你可以从歌单中筛选出</div>
                <div class="p-2">
                    50首适合
                    <span class="sh">适合</span>
                    <span class="yd">运动</span>
                    <span class="tdgr">听得高然</span>
                    <span class="dy">电音</span>

                </div>
                <div class="p-3">
                    <van-button type="danger" round size="small" style="padding:0 0.4rem">试试看</van-button>
                </div>
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
