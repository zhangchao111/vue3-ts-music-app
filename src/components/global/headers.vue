<template>
    <div class="app-header">
        <div class="app-header-Left" @click="checkDrawer"><span class="m_iconfont m_iconliebiao1"></span></div>
        <div class="app-header-Middle">
            <div v-for="item in topList" :key="item.name" :class="[active==item.val?'active':'']" @click="checkPage(item.val)">{{item.name}}</div>
        </div>
        <div class="app-header-Right"><span class="m_iconfont m_iconsousuo1" @click="checkSearch"></span></div>
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
        watchEffect,
    } from 'vue'
    import { useRouter} from 'vue-router'
    export default defineComponent({
        components: {},
        emits: ["showPopup"],
        setup(prop,context) {
            let active=ref<string>('index');
            const router = useRouter();
            const topList=reactive([
                {name:'我的',path:'/',val:'index'},
                {name:'发现',path:'/find',val:'find'},
                {name:'云村',path:'/yuncun',val:'skyCount'},
                {name:'视频',path:'/video',val:'video'},
            ])
            // 查看我的
            function checkDrawer(){
                context.emit("showPopup");
            }
            // 切换页面
            const checkPage=(obj:string)=>{
                active.value=obj;
                topList.map((item)=>{
                    if(item.val==obj){
                        router.push(item.path)
                    }
                })

            }
            // 点击搜索
            function checkSearch(){
                console.log(333)
            }
            return {
                active,
                topList,
                checkDrawer,
                checkPage,
                checkSearch,
            }
        },
    })
</script>
<style>

</style>
