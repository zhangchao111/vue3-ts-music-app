<template>
<div class="left-menu">
    <div class="l-warp">
        <div class="warp">
            <div class="l-banner">
                <div class="l-musicbag">
                    <div class="l-left">
                        <p class="p-t">音乐包</p>
                        <p class="p-c">已过期777天，我的VIP ></p>
                    </div>
                    <div class="l-right">
                        <span>会员中心</span>
                    </div>
                </div>
                <div class="l-music-text">
                    <div class="l-left">
                        <p class="p-t">限时特惠！黑胶首月仅0.88元！</p>
                        <p class="p-c">点击抢购，尊享超17项特权</p>
                    </div>
                    <div class="l-middle">
                        <div class="warp">
                            <p>黑胶</p>
                            <p>0.88元</p>
                        </div>
                    </div>
                    <div class="l-right">
                        <van-icon name="arrow" class="l-icon" />
                    </div>
                </div>
            </div>
            <div class="l-userList">
                <div class="l-user">
                    <div class="l-avator">
                        <div class="warp">
                            <van-image
                                    round
                                    fit="cover"
                                    width="0.8rem"
                                    height="0.8rem"
                                    loading-icon="user-circle-o"
                                    error-icon="user-circle-o"
                                    src="https://im.yzcdn.cn/vant/cat.jpeg"
                            >
                            </van-image>
                        </div>
                        <div class="l-name">
                            13534534513
                        </div>
                    </div>
                    <div class="l-sign">
                    <span class="warp">
                        <span class="icon m_iconfont m_iconhuiyuan"></span>
                        <i> 签到</i>
                    </span>
                    </div>
                </div>
                <van-grid :border="false" :column-num="4" class="l-grid">
                    <van-grid-item badge="9" text="我的消息">
                        <template v-slot:icon>
                            <span class="icon m_iconfont m_iconxiaoxi"></span>
                        </template>

                    </van-grid-item>
                    <van-grid-item text="我的好友">
                        <template v-slot:icon>
                            <span class="icon m_iconfont m_iconyonghu2"></span>
                        </template>
                    </van-grid-item>
                    <van-grid-item text="个人主页">
                        <template v-slot:icon>
                            <span class="icon m_iconfont m_iconyonghu"></span>
                        </template>
                    </van-grid-item>
                    <van-grid-item text="个性装扮">
                        <template v-slot:icon>
                            <span class="icon m_iconfont m_iconhuanfu"></span>
                        </template>
                    </van-grid-item>
                </van-grid>
                <div class="l-list">
                    <ul>
                        <li class="hasBorder">
                            <div class="left">
                                <span class="icons"><span class="icon m_iconfont m_iconhuatong"></span></span>
                                <span class="text">创作者中心</span>
                            </div>
                            <div class="right"></div>
                        </li>
                        <li>
                            <div class="left">
                                <span class="icons"><span class="icon m_iconfont m_iconzhuanji"></span></span>
                                <span class="text">听歌识曲</span>
                            </div>
                            <div class="right"></div>
                        </li>
                        <li>
                            <div class="left">
                                <span class="icons"><span class="icon m_iconfont m_iconrenminbi"></span></span>
                                <span class="text">演出</span>
                            </div>
                            <div class="right"></div>
                        </li>
                        <li>
                            <div class="left">
                                <span class="icons"><span class="icon m_iconfont m_icongouwuche"></span></span>
                                <span class="text">商城</span>
                            </div>
                            <div class="right">
                                <span class="text">漫步者耳机0元抽</span>
                                <div>
                                    <van-image
                                            round
                                            class="avator"
                                            width="0.5rem"
                                            height="0.5rem"
                                            src="https://img.yzcdn.cn/vant/cat.jpeg"
                                    />
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="left">
                                <span class="icons"><span class="icon m_iconfont m_iconbiaoqiankuozhan_fujin-398"></span></span>
                                <span class="text">附近的人</span>
                            </div>
                            <div class="right"></div>
                        </li>
                        <li>
                            <div class="left">
                                <span class="icons"><span class="icon m_iconfont m_iconfenxiang"></span></span>
                                <span class="text">游戏推荐</span>
                            </div>
                            <div class="right"></div>
                        </li>
                        <li class="hasBorder">
                            <div class="left">
                                <span class="icons"><span class="icon m_iconfont m_iconyinle1"></span></span>
                                <span class="text">口袋彩铃</span>
                            </div>
                            <div class="right">
                                <span class="text">国风仙乐好听到爆</span>
                                <div>
                                    <van-badge dot>
                                        <template v-slot:default>
                                            <van-image
                                                    round
                                                    class="avator"
                                                    width="0.5rem"
                                                    height="0.5rem"
                                                    src="https://img.yzcdn.cn/vant/cat.jpeg"
                                            />
                                        </template>
                                    </van-badge>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="left">
                                <span class="icons"><span class="icon m_iconfont m_iconliebiao"></span></span>
                                <span class="text">我的订单</span>
                            </div>
                            <div class="right"></div>
                        </li>
                        <li>
                            <div class="left">
                                <span class="icons"><span class="icon m_iconfont m_icondingshi"></span></span>
                                <span class="text">定时停止播放</span>
                            </div>
                            <div class="right"></div>
                        </li>
                        <li>
                            <div class="left">
                                <span class="icons"><span class="icon m_iconfont m_iconsaoyisao"></span></span>
                                <span class="text">扫一扫</span>
                            </div>
                            <div class="right"></div>
                        </li>
                        <li>
                            <div class="left">
                                <span class="icons"><span class="icon m_iconfont m_iconicon-test"></span></span>
                                <span class="text">音乐闹钟</span>
                            </div>
                            <div class="right"></div>
                        </li>
                        <li>
                            <div class="left">
                                <span class="icons"><span class="icon m_iconfont m_iconyinle1"></span></span>
                                <span class="text">音乐云盘</span>
                            </div>
                            <div class="right"></div>
                        </li>
                        <li>
                            <div class="left">
                                <span class="icons"><span class="icon m_iconfont m_iconyinle"></span></span>
                                <span class="text">在线听歌免流量</span>
                            </div>
                            <div class="right"></div>
                        </li>
                        <li>
                            <div class="left">
                                <span class="icons"><span class="icon m_iconfont m_iconzhuanji"></span></span>
                                <span class="text">优惠券</span>
                            </div>
                            <div class="right"></div>
                        </li>
                        <li>
                            <div class="left">
                                <span class="icons"><span class="icon m_iconfont m_iconhuiyuan"></span></span>
                                <span class="text">青少年模式</span>
                            </div>
                            <div class="right">
                                <span class="text">未开启</span>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>

    <div class="l-tabbar">
        <div class="left">
            <span class="icon m_iconfont m_iconyueduye-yejianmoshi"></span>
            <span class="text"> 夜间模式</span>
        </div>
        <div class="middle">
            <span class="icon m_iconfont m_iconshezhi"></span>
            <span class="text"> 设置</span>
        </div>
        <div class="right">
            <span class="icon m_iconfont m_icontuichu"></span>
            <span class="text"> 退出</span>
        </div>
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

    export default defineComponent({
        components: {},
        setup() {

            return {}
        },
        methods: {}
    })
</script>
<style>

</style>
