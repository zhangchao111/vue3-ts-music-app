<template>
<div class="left-menu">
    <div class="l-warp">
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
