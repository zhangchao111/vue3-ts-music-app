<template>
    <div class="load-nore-warpper" @touchstart="touchstart($event)" @touchend="touchend($event)">
        <div class="inner">
            <slot></slot>
            <div class="load-more" v-show="enableLoadMore">{{loadMoreText}}</div>
            <div class="load-end" v-show="!enableLoadMore">已经到底了!</div>
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
        watchEffect,
        inject
    } from 'vue'
    export default defineComponent({
        components: {},
        setup(props,context) {
            const enableLoadMore = inject("enableLoadMore");
            const loadMoreText=ref("上拉加载更多");
            const startX=ref(0);
            const startY=ref(0);
            const isLoading=ref(false);
            const touchstart=(e:any)=>{
                startY.value = e.targetTouches[0].pageY;
                startX.value = e.targetTouches[0].pageX;

            }
            const scrollToEnd=(e:any)=>{
                let scrollHeight = e.scrollHeight;
                let clientHeight = e.clientHeight;
                let scrollTop = e.scrollTop;

                if (scrollTop + clientHeight >= scrollHeight || enableLoadMore) {
                    doLoadMore()
                }
            }
            const doLoadMore=()=>{
                isLoading.value = true;
                loadMoreText.value = '加载中...'
                context.emit("onLoadMore",loadDone)
            }
            const loadDone=()=>{
                isLoading.value = false;
                loadMoreText.value = '上拉加载更多'
            }
            const touchend=(e:any)=>{
                if (isLoading.value) {
                    return;
                }
                let endX = e.changedTouches[0].pageX,
                    endY = e.changedTouches[0].pageY,
                    dy = startY.value - endY,
                    dx = endX - startX.value;
                if(Math.abs(dx) < 2 && Math.abs(dy) < 2) {
                    return;
                }
                if (endY < startY.value) {
                    scrollToEnd(e)
                }
            }

            return {
                enableLoadMore,
                loadMoreText,
                touchstart,
                touchend,
                loadDone
            }
        },
        methods: {}
    })
</script>
<style lang="less">
    .load-more-wrapper {
        height: 100%;
        overflow-y: auto;
        -webkit-overflow-scrolling: touch;
        transition-duration: 300ms;
        .load-more, .load-end {
            color: #aea699;
            font-size: .26rem;
            margin: .3rem 0;
            text-align: center;
        }
    }
</style>
