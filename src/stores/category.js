import {ref} from "vue"
import {defineStore} from "pinia"
import {getCateGoryApi} from "@/apis/layout.js"

export const useCategotyStore = defineStore('category',()=>{
    //导航列表数据
    const categoryList = ref([])
    //获取导航数据的方法
    const getCategory = async()=>{
        const res = await getCateGoryApi()
        categoryList.value = res.result
    }

    return{
        categoryList,
        getCategory
    }
})