//封装分类数据业务相关的代码
import { getCategoryApi } from '@/apis/category';
import { onMounted, ref } from 'vue';
import {useRoute} from "vue-router"
import {onBeforeRouteUpdate} from "vue-router"

export function useCategory(){
    const categoryData = ref({})
    const route = useRoute()
    const getCategory = async (id=route.params.id)=>{
    const res = await getCategoryApi(id)
    categoryData.value =res.result
}
    onMounted(()=>{
    getCategory()
    })

    //目标: 在路由参数变化的时候，可以把分类数据的接口重新发送
    onBeforeRouteUpdate((to)=>{
        getCategory(to.params.id)
    })

    return {
        categoryData 
    }
}