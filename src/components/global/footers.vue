<template>
    <div class="footers">
           <div class="f-left">
                    <van-swipe @change="onChange" :show-indicators="false" :loop="false">
                        <van-swipe-item  @click="checkItem">
                            <div class="warp">
                                <div class="img">
                                    <van-image
                                            round
                                            fit="cover"
                                            width="0.8rem"
                                            height="0.8rem"
                                            src="https://im.yzcdn.cn/vant/cat.jpeg"
                                    >
                                        <template v-slot:loading>
                                            <span class="icon m_iconfont m_iconchangpian"></span>
                                        </template>
                                        <template v-slot:error>
                                            <span class="icon m_iconfont m_iconchangpian"></span>
                                        </template>

                                    </van-image>
                                </div>
                                <div class="tips">
                                    <div class="title">Lost Control -Alan walker</div>
                                    <div class="descprition">横滑可以切换上下首</div>
                                </div>
                            </div>
                        </van-swipe-item>
                        <van-swipe-item>
                            <div class="warp">
                                <div class="img">
                                    <van-image
                                            round
                                            fit="cover"
                                            width="0.8rem"
                                            height="0.8rem"
                                            src="https://im.yzcdn.cn/vant/cat.jpeg"
                                    >
                                        <template v-slot:loading>
                                            <span class="icon m_iconfont m_iconchangpian"></span>
                                        </template>
                                        <template v-slot:error>
                                            <span class="icon m_iconfont m_iconchangpian"></span>
                                        </template>

                                    </van-image>
                                </div>
                                <div class="tips">
                                    <div class="title">Lost Control -A</div>
                                    <div class="descprition">横滑可以切换上下首</div>
                                </div>
                            </div>
                        </van-swipe-item>
                    </van-swipe>

           </div>
            <div class="f-right">
                <div class="playBtn" @click="onPlay">
                    <span :class="[playStatus=='play'?'m_iconzanting':'m_iconbofang','icon','m_iconfont'] "></span>
                </div>
                <div class="playList" @click="onClickList">
                    <span class="icon m_iconfont m_iconbofangliebiao"></span>
                </div>
            </div>
    </div>
</template>
<script lang="ts">
    import {
        defineComponent,
        reactive,
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
        setup(props,context) {
            let func=reactive({
                type:ref(''),
                data:{
                    index:ref(''),
                    on:ref('pause')
                }
            })
            let playStatus=ref('pause');
            const onChange=(index:string)=>{
                func.type="onChange";
                func.data={
                    index,
                    on:'play'
                }
                context.emit("musicPlay",func)
            }
            const onPlay=()=>{
                func.type="onPlay";
                func.data={
                    index:'',
                    on:func.data.on=='play'?'pause':'play'
                }
                playStatus.value=(playStatus.value=='play')?'pause':'play';
                console.log(playStatus,34)
                context.emit("musicPlay",func)
            }
            const onClickList=()=>{
                func.type="onClickList";
                func.data={
                    index:'',
                    on:''
                }
                context.emit("musicPlay",func)
            }
            const checkItem=()=>{
                console.log(2222)
            }
            return {onChange,onPlay,onClickList,playStatus,checkItem}
        },
        methods: {}
    })
</script>
<style>

</style>
