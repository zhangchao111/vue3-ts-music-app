<template>
    <div class="itipTitle">
        <span class="i-t">444</span>
        <span class="i-r">
            <slot name="default"></slot>
<!--            <slot></slot>-->
        </span>
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
