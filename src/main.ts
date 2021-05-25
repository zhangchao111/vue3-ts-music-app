import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import '@/style/index.less'
import '@/assets/font/iconfont.css'
import 'vant/lib/index.css';
// import { loadAllPlugins } from '@/plugins'
import vant from '@/plugins/vant.ts';
import { Image as VanImage,Lazyload,Tag  } from 'vant';
import { registeGlobalComponent } from '@/components/index'
const app:ReturnType<typeof createApp> = createApp(App)
/** 自动注册全局组件  */
registeGlobalComponent(app)

// loadAllPlugins(app)
app.use(store).use(vant).use(VanImage).use(Tag).use(Lazyload).use(router).mount('#app')
