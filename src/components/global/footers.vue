<template>
    <div class="footers">
           <div class="f-left">
                <div class="warp">
                    <van-swipe @change="onChange" :show-indicators="false">
                        <van-swipe-item>
                            <div class="img">
                                <van-image
                                        round
                                        fit="cover"
                                        width="0.8rem"
                                        height="0.8rem"
                                        error-icon="user-circle-o"
                                        src="https://im.yzcdn.cn/vant/cat.jpeg"
                                >
                                </van-image>
                            </div>
                            <div class="tips">
                                <div class="title">Lost Control -Alan walker</div>
                                <div class="descprition">横滑可以切换上下首</div>
                            </div>
                        </van-swipe-item>
                    </van-swipe>

                </div>
           </div>
            <div class="f-right">
                <div class="playBtn">
                    <span class="icon m_iconfont m_iconbofang"></span>
                </div>
                <div class="playList">
                    <span class="icon m_iconfont m_iconbofangliebiao"></span>
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
            const onChange=()=>{
                console.log(222)
            }
            return {onChange}
        },
        methods: {}
    })
</script>
<style>

</style>
