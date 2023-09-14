//懒加载插件
import { useIntersectionObserver } from '@vueuse/core'
export const lazyPlugin = {
    install(app){
        //指令逻辑
        app.directive('img-lazy',{
            mounted(el,binding){
                // el:指令绑定的元素,binging.balue 指令等于号后面绑定的值 图片的url
               const {stop} = useIntersectionObserver(
                    el,
                    ([{ isIntersecting }],) => {
                        if(isIntersecting){
                            //进入了视图区域
                            el.src=binding.value
                            //停止监听
                            stop()
                        }
                    },
                  )
            }
        })
    }
}