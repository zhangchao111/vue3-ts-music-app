<template>
<!--    @touchstart="touchstarts($event)" @touchend="touchends($event)"-->
    <div class="video-warp">
        <div class="v-warp">
            <div class="v-title">
                <span :class="[active=='gz'?'actives':'','gz']" @click="goClick('gz')">关注</span>
                <span :class="[active=='tj'?'actives':'','tj']" @click="goClick('tj')">推荐</span>
                <div class="tipLine" :style="{'left':lefts+'rem'}"></div>
            </div>
        </div>
        <transition name="van-slide-left">
            <gz v-if="active=='gz'"></gz>
        </transition>

        <transition name="van-slide-right">
            <tj v-if="active=='tj'" @tjpage="getTjpage"></tj>
        </transition>


    </div>

</template>
<script lang="ts">
    import {
        defineComponent,
        ref,
        reactive,
        provide,
        onBeforeMount,
        onMounted,
        onBeforeUpdate,
        onBeforeUnmount,
        onUnmounted,
        watch,
        watchEffect
    } from 'vue'
    import gz from './gz.vue'
    import tj from './tj.vue'
    import {useRouter } from 'vue-router';
    export default defineComponent({
        components: {
            gz,
            tj
        },
        setup() {
            const router = useRouter();
            const active=ref("gz");
            const tjPage=ref('gc');
            const lefts=ref(0);
            const goClick=(val:string)=>{
                active.value=val;
            }
            const getTjpage=(val:string)=>{
                tjPage.value=val;
            }
            const startX=ref(0);
            const startY=ref(0);
            const touchstarts=(e:any)=>{
                startX.value=e.targetTouches[0].pageX;
                startY.value=e.targetTouches[0].pageY;
            }
            const touchends=(e:any)=>{
                let endX=e.changedTouches[0].pageX;
                let endY=e.changedTouches[0].pageY;
                let x = endX-startX.value;
                let y = endY-startY.value;
                if(x<0){
                    if(active.value=='gz'){
                        active.value="tj";
                        console.log('to right');
                    }
                }
                if(x>0){
                    console.log(active.value,tjPage.value,1231)
                    if(active.value=='tj' && tjPage.value=='gc'){
                        active.value="gz";
                        console.log("to left")
                    }
                }
            }
            watch(active,(val)=>{
                if(val=='tj'){
                    lefts.value=0.9;
                }else{
                    lefts.value=0;
                }
            })
            return {
                active,
                lefts,
                goClick,
                touchstarts,
                touchends,
                getTjpage
            }
        },
        methods: {}
    })
</script>
<style>

</style>
