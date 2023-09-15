import { defineStore } from 'pinia'
import {ref} from 'vue'
import {loginApi} from "@/apis/user.js"
import {mergeCartApi} from "@/apis/cart.js"
import {useCartStore} from "./cartStore"


export const useUserStore = defineStore('user',()=>{
    const cartStore =useCartStore()
    //定义管理用户数据的state
    const userInfo = ref({})
    //定义获取接口数据的action函数
    const getUserInfo = async ({account,password})=>{
       const res = await loginApi({account,password})
       userInfo.value = res.result
       //合并购物车的操作
       mergeCartApi(cartStore.cartList.map(item=>{
        return {
            skuId:item.skuId,
            selected:item.selected,
            count:item.count
        }
       }))
       cartStore.updateNewList()

    }

    const clearUserInfo = ()=>{
        userInfo.value = {}
        cartStore.clearCart()

    }

    //把state和action返回
    return{
        userInfo,
        getUserInfo,
        clearUserInfo
    }
},{
    persist:true        //需要持久化存储
    //在设置state的时候会自动把数据同步给localStorage，在获取数据的使用会优先从localStorage中取
})