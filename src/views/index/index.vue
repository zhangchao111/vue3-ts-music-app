<template>
<div style="height:2000px;background:pink;margin:0px 20px 50px;">
    sfsdf
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
            let show=ref(false);
            console.log(prop,context)
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
