
import { createApp } from 'vue'

import App from './App.vue'
import router from './router'

import "@/styles/common.scss"
import {lazyPlugin} from "@/directives/index.js"

//引入全局注册组件
import {componentPlugin} from "@/components/"

import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)

const app = createApp(App)

app.use(pinia)
app.use(router)
app.use(lazyPlugin)
app.use(componentPlugin)

app.mount('#app')

//定义全局指令，实现图片懒加载

