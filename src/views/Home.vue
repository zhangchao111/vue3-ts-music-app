<template>
  <div class="home">
    <van-button type="primary" size="mini">迷你按钮</van-button>
    <van-image
            width="100"
            height="100"
            lazy-load
            src="https://img.yzcdn.cn/vant/cat.jpeg"
    />
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/>


  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src

@Options({
  components: {
    HelloWorld,
  },
})
export default class Home extends Vue {}
</script>
