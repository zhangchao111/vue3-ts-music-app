<template>
    <div class="itipTitle">
        <div class="i-t">
            <slot name="title"></slot>
        </div>
        <div class="i-r">
            <span>
                <slot name="more"></slot>
            </span>

<!--            <slot></slot>-->
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
