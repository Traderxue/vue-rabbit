import {getBannerApi} from "@/apis/home.js"
import { onMounted,ref } from "vue"

//封装轮播图相关的业务代码 
export function useBanner(){
const bannerList = ref([])
const getBanner = async()=>{
    const res = await getBannerApi({
      distributionSize:'2'
    })
    bannerList.value =res.result
}
onMounted(()=>{
  getBanner()
})
return {
    bannerList
}
}