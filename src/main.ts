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
const app:ReturnType<typeof createApp> = createApp(App)


// loadAllPlugins(app)
app.use(store).use(vant).use(router).mount('#app')
