import {ref,computed, onUnmounted} from 'vue'
import dayjs from 'dayjs'

export const useCountDown = ()=>{

    let timer = null

    //响应式数据
    const time = ref(0)
    const formatTime = computed(()=>
            dayjs.unix(time.value).format('mm分ss秒')
    )

    //开始倒计时的函数
    const start = (currentTime)=>{
        time.value = currentTime
        setInterval(()=>{
            time.value--
        },1000)
    }
    //组件销毁时清除定时器
    onUnmounted(()=>{
        timer && clearInterval(timer)
    })
    return {
        time,
        start
    }
}