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
            const images = [
                'https://img.yzcdn.cn/vant/apple-1.jpg',
                'https://img.yzcdn.cn/vant/apple-2.jpg',
            ];
            return {images}
        },
        methods: {}
    })
</script>
<style>

</style>
