<template>
    <div class="app-page">
        <!--        顶部nav-->
        <headers @showPopup="showPopup"></headers>
        <div class="app-content">
            <router-view/>
        </div>
        <div class="app-footer">
asda
        </div>

        <van-popup v-model:show="show" position="left" :style="{ height: '100%',width:'80%' }" :overlay-style="{backgroundColor: 'rgba(0,0,0,0.5)'}" teleport="body" :lazy-render="true" >
        <left-menu></left-menu>
        </van-popup>
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
        setup(prop,context) {
            let show=ref(true);
            const showPopup=()=>{
                show.value = true;
            }
            return {
                show,
                showPopup
            }
        },
        methods: {}
    })
</script>
<style>

</style>
