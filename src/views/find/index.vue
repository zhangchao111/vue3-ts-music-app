<template>
    <div class="find-warp">
<!--        banner-->
        <van-swipe :autoplay="3000" lazy-render class="find-swiper">
            <van-swipe-item v-for="image in images" :key="image">
                <van-image
                        width="7.5rem"
                        height="2.2rem"
                        :src="image"
                />
            </van-swipe-item>
        </van-swipe>
<!--        menu-->
        <div class="find-Menu">
            <swiper
                    :spaceBetween="30"
                    :loop="false"
                    :freeMode="true"
                    :slidesPerView="4"
                    class="swiper-container"
            >
                <swiper-slide class="menu-item" v-for="(item,index) in menuList" :key="index" @click="getMenuItem(item)" >
                    <div class="menu-iconwarp">
                        <span :class="[item.src,'icon','m_iconfont']"></span>
                    </div>
                    <div class="menu-title">{{item.name}}</div>
                </swiper-slide>
            </swiper>
        </div>
<!--        推荐歌单-->
        <div class="find-tjgd scaleTop">
            <itips>
                <template #title>推荐歌单</template>
                <template #more>更多 <van-icon name="arrow" /></template>
<!--              v-slot == 默认  v-slot:default == #default-->
<!--                <template v-slot:default>111</template>-->
            </itips>
            <div class="tjgd">
                <swiper
                        :spaceBetween="0"
                        :loop="false"
                        :freeMode="true"
                        :slidesPerView="3.5"
                        class="swiper-container"
                >
                    <swiper-slide class="tjgd-item" v-for="(item,index) in menuList" :key="index" @click="getMenuItem(item)" >
                        <div class="imgs">
                            <div class="tip"><span class="icon m_iconfont m_iconbofang1"></span>1333.3万</div>
                            <van-image
                                    fit="cover"
                                    width="100%"
                                    height="100%"
                                    class="img"
                                    loading-icon="user-circle-o"
                                    error-icon="user-circle-o"
                                    src="https://img.yzcdn.cn/vant/cat.jpeg"
                            >
                            </van-image>
                        </div>
                        <div class="menu-title">{{item.name}}12311111133333333333333333333333333333333333</div>
                    </swiper-slide>
                </swiper>
            </div>
        </div>
<!--        相似推荐-->
        <div class="find-xstj">
            <itips>
                <template #title>
                    <van-icon name="replay" />
                    <span style="font-size: 0.2rem !important;transform: translate(45%,-40%);display: inline-block">&#915;</span>
                    Asphyxia(窒息)
                    <span style="font-size: 0.2rem !important;transform:rotateZ(180deg)translateX(50%) ;display: inline-block">&#915;</span>
                    相似推荐
                </template>
                <template #more>更多 <van-icon name="arrow" /></template>
                <!--              v-slot == 默认  v-slot:default == #default-->
                <!--                <template v-slot:default>111</template>-->
            </itips>
            <div class="xstj">
                <swiper
                        :spaceBetween="10"
                        :loop="false"
                        :freeMode="true"
                        :slidesPerView="1.05"
                        class="swiper-container"
                >
                    <swiper-slide class="xstj-item" v-for="i in 5" :key="i">
                        <div class="warp">
                            <div class="item" v-for="j in 3" :key="j">
                                <div class="left">
                                    <van-image
                                            fit="cover"
                                            width="100%"
                                            height="100%"
                                            class="img"
                                            loading-icon="user-circle-o"
                                            error-icon="user-circle-o"
                                            src="https://img.yzcdn.cn/vant/cat.jpeg"
                                    >
                                    </van-image>
                                </div>
                                <div class="right">
                                    <p class="p-t">sfsdf</p>
                                    <p class="p-c">dfgdg</p>
                                </div>
                            </div>

                        </div>
                    </swiper-slide>
                </swiper>
            </div>
        </div>

<!--        精选音乐视频-->
        <div class="find-jxyysp">
            <itips>
                <template #title>精选音乐视频</template>
                <template #more>更多 <van-icon name="arrow" /></template>
            </itips>
            <div class="jxyysp">
                <swiper
                        :spaceBetween="10"
                        :loop="false"
                        :slidesPerView="2"
                        class="swiper-container"
                >
                    <swiper-slide class="jxyysp-item" v-for="(item,index) in menuList" :key="index" @click="getMenuItem(item)" >
                        <div class="imgs">
                            <div class="tip"><span class="icon m_iconfont m_iconbofang1"></span>1333.3万</div>
                            <div class="plays"><span class="icon m_iconfont m_iconbofang1"></span></div>
                            <van-image
                                    fit="cover"
                                    width="100%"
                                    height="100%"
                                    class="img"
                                    loading-icon="user-circle-o"
                                    error-icon="user-circle-o"
                                    src="https://img.yzcdn.cn/vant/cat.jpeg"
                            >
                            </van-image>
                        </div>
                        <div class="menu-title">{{item.name}}33333333333333333333333333</div>
                    </swiper-slide>
                </swiper>
            </div>
        </div>


<!--雷达歌单-->
        <div class="find-tjgd scaleTop">
            <itips>
                <template #title>xxxx的雷达歌单</template>
                <template #more>更多 <van-icon name="arrow" /></template>
                <!--              v-slot == 默认  v-slot:default == #default-->
                <!--                <template v-slot:default>111</template>-->
            </itips>
            <div class="tjgd">
                <swiper
                        :spaceBetween="0"
                        :loop="false"
                        :freeMode="true"
                        :slidesPerView="3.5"
                        class="swiper-container"
                >
                    <swiper-slide class="tjgd-item" v-for="(item,index) in menuList" :key="index" @click="getMenuItem(item)" >
                        <div class="imgs">
                            <div class="music"><span class="icon m_iconfont m_iconyinle1"></span></div>
                            <div class="tip"><span class="icon m_iconfont m_iconbofang1"></span>1333.3万</div>
                            <van-image
                                    fit="cover"
                                    width="100%"
                                    height="100%"
                                    class="img"
                                    loading-icon="user-circle-o"
                                    error-icon="user-circle-o"
                                    src="https://img.yzcdn.cn/vant/cat.jpeg"
                            >
                            </van-image>
                        </div>
                        <div class="menu-title">{{item.name}}12311111133333333333333333333333333333333333</div>
                    </swiper-slide>
                </swiper>
            </div>
        </div>

<!--        音乐日历    -->

        <div class="find-yyrl scaleTop">
            <itips>
                <template #title>音乐日历</template>
                <template #more>更多 <van-icon name="arrow" /></template>
                <!--              v-slot == 默认  v-slot:default == #default-->
                <!--                <template v-slot:default>111</template>-->
            </itips>
            <div class="yyrl">
                <div class="title">
                   <span>领取你的今日好运</span>
                    <span class="rights">查看运势解读 <van-icon name="arrow" /></span>
                </div>
                <div class="list">
                    <div class="left">
                        <div class="text">
                            <p class="p-t">今天 <span class="ycrd">云村热点</span></p>
                            <p class="p-c">恭喜RNG夺冠，来听云村音乐....</p>
                        </div>
                    </div>
                    <div class="right">
                        <van-image
                                fit="cover"
                                width="100%"
                                height="100%"
                                class="img"
                                loading-icon="user-circle-o"
                                error-icon="user-circle-o"
                                src="https://img.yzcdn.cn/vant/cat.jpeg"
                        >
                        </van-image>
                    </div>
                </div>
                <div class="list">
                    <div class="left">
                        <div class="text">
                            <p class="p-t">明天 <span class="yg">预告</span></p>
                            <p class="p-c">张赫宣张赫宣最新作品张赫宣最新作品最新作品</p>
                        </div>
                        <div class="tx">
                            <p class="p-t"><span><van-icon name="bullhorn-o" class="icons" /></span></p>
                            <p class="p-c">80</p>
                        </div>
                    </div>
                    <div class="right">
                        <van-image
                                fit="cover"
                                width="100%"
                                height="100%"
                                class="img"
                                loading-icon="user-circle-o"
                                error-icon="user-circle-o"
                                src="https://img.yzcdn.cn/vant/cat.jpeg"
                        >
                        </van-image>
                    </div>
                </div>
            </div>
        </div>

<!--        LOOK直播-->
        <div class="find-jxyysp">
            <itips>
                <template #title>LOOK直播</template>
                <template #more>更多 <van-icon name="arrow" /></template>
            </itips>
            <div class="jxyysp">
                <swiper
                        :spaceBetween="10"
                        :loop="false"
                        :slidesPerView="2"
                        class="swiper-container"
                >
                    <swiper-slide class="jxyysp-item" v-for="(item,index) in menuList" :key="index" @click="getMenuItem(item)" >
                        <div class="imgs">
                           <div class="look"><span class="icon m_iconfont m_iconyinle1"></span> 1660 &bull; 流行金曲</div>
                            <van-image
                                    fit="cover"
                                    width="100%"
                                    height="100%"
                                    class="img"
                                    loading-icon="user-circle-o"
                                    error-icon="user-circle-o"
                                    src="https://img.yzcdn.cn/vant/cat.jpeg"
                            >
                            </van-image>
                        </div>
                        <div class="menu-title">{{item.name}}33333333333333333333333333</div>
                    </swiper-slide>
                </swiper>
            </div>
        </div>


        <div class="find-xgxdzj">
            <itips>
                <template #title>
                    <ul class="find-xgxdTitle">
                        <li :class="[xgxdActive=='newSong'?'active':'']" @click="songCheck('newSong')">新歌</li>
                        <li :class="[xgxdActive=='newDie'?'active':'']" @click="songCheck('newDie')">新碟</li>
                        <li :class="[xgxdActive=='numJi'?'active':'']" @click="songCheck('numJi')">数字专辑</li>
                    </ul>
                </template>
                <template #more>更多 <van-icon name="arrow" /></template>
            </itips>
            <div class="xstj">
                <swiper
                        :spaceBetween="10"
                        :loop="false"
                        :freeMode="true"
                        :slidesPerView="1.05"
                        class="swiper-container"
                >
                    <swiper-slide class="xstj-item" v-for="i in 5" :key="i">
                        <div class="warp">
                            <div class="item" v-for="j in 3" :key="j">
                                <div class="left">
                                    <van-image
                                            fit="cover"
                                            width="100%"
                                            height="100%"
                                            class="img"
                                            loading-icon="user-circle-o"
                                            error-icon="user-circle-o"
                                            src="https://img.yzcdn.cn/vant/cat.jpeg"
                                    >
                                    </van-image>
                                </div>
                                <div class="right">
                                    <p class="p-t">sfsdf</p>
                                    <p class="p-c">dfgdg</p>
                                </div>
                            </div>

                        </div>
                    </swiper-slide>
                </swiper>
            </div>



        </div>


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
        watchEffect
    } from 'vue'
    import { Swiper, SwiperSlide } from 'swiper/vue';
    import 'swiper/swiper.min.css';
    import 'swiper/components/pagination/pagination.less';
    export default defineComponent({
        components: {
            Swiper,
            SwiperSlide,
        },
        setup() {
            const state=reactive({
                images :[
                    'https://img.yzcdn.cn/vant/apple-1.jpg',
                    'https://img.yzcdn.cn/vant/apple-2.jpg',
                ],
                menuList:[
                    {src:'m_iconmeirigengxin',name:'每日推荐',path:''},
                    {src:'m_iconFM_weixuanze',name:'私人FM',path:''},
                    {src:'m_icongedan',name:'歌单',path:''},
                    {src:'m_iconpaihangbang',name:'排行榜'},
                    {src:'m_iconhuiyuan',name:'直播'},
                    {src:'m_iconzhuanji',name:'数字专辑'},
                    {src:'m_iconhuiyuan',name:'专注冥想'},
                    {src:'m_iconyinle1',name:'歌房'},
                    {src:'m_iconhanhan-01-01',name:'游戏专区'},
                ],


            })
            const xgxdActive=ref("newSong")
            const getMenuItem=(swiper:any)=>{
                console.log(swiper,12)
            }
            const songCheck=(obj:string)=>{
                xgxdActive.value=obj;
            }
            return {
                ...state,
                xgxdActive,
                getMenuItem,
                songCheck}
        },
        methods: {}
    })
</script>
<style lang="less">

</style>
