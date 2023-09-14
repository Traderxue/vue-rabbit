
import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import "@/styles/common.scss"
import { useIntersectionObserver } from '@vueuse/core'


//测试接口
// import {getCategpry} from '@/apis/testApi.js'
// getCategpry().then(res=>{
//     console.log(res)
// })

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')

//定义全局指令，实现图片懒加载
app.directive('img-lazy',{
    mounted(el,binding){
        // el:指令绑定的元素,binging.balue 指令等于号后面绑定的值 图片的url
        useIntersectionObserver(
            el,
            ([{ isIntersecting }],) => {
                if(isIntersecting){
                    //进入了视图区域
                    el.src=binding.value
                }
            },
          )
    }
})
