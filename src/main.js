
import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import "@/styles/common.scss"
import {lazyPlugin} from "@/directives/index.js"


//测试接口
// import {getCategpry} from '@/apis/testApi.js'
// getCategpry().then(res=>{
//     console.log(res)
// })

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(lazyPlugin)

app.mount('#app')

//定义全局指令，实现图片懒加载

