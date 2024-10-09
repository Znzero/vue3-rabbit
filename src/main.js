import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

// 引入初始化样式文件
import '@/styles/common.scss'
import { lazyPlugin } from '@/directives'
// 引入全局组件插件
import { componentPlugin } from '@/components/Common'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

//测试接口函数
// import{getCategoryAPI}from'@/api/testAPI'
// getCategoryAPI().then(res=>{
// console.log(res)
// })
const app = createApp(App)
const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)
app.use(pinia)
app.use(router)
app.use(lazyPlugin)
app.use(componentPlugin)

app.mount('#app')
