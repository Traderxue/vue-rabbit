//购物车模块
import { defineStore } from 'pinia'
import {ref,computed} from 'vue'
import {useUserStore} from './user.js'
import {findNewCartListApi,insertCartApi,delCartApi} from "@/apis/cart.js"

export const useCartStore =defineStore('cart',()=>{
    const userStore = useUserStore()
    const isLogin = computed(()=>userStore.userInfo.token)
    const cartList = ref([])

    //加入购物车
    const addCart =async (goods)=>{
        const {skuId,count} = goods
        if(isLogin){
            await insertCartApi({skuId,count})
            updateNewList()
        }else{
            const item = cartList.value.find((item)=>goods.skuId===item.skuId)
            if(item){
                item.count++
            }else{
                cartList.value.push(goods)
            }
        }
    }

    //删除购物车
    const delCart = async (skuId)=>{
        if(isLogin.value){
            await delCartApi([skuId])
            updateNewList()
        }else{
            const idx = cartList.value.findIndex((item)=>skuId = item.id)
            cartList.value.splice(idx,1)
        }
    }
    //单选功能
    const singleCheck=(skuId,selected)=>{
        const item = cartList.value.find((item)=>item.skuId===skuId)
        item.selected = selected
    }

    //获取最新列表数据
    const updateNewList=async ()=>{
        const res = await findNewCartListApi()
            cartList.value = res.result
    }

    //清除购物车
    const clearCart  = ()=>{
        cartList.value = []
    }

    //全选功能
    const allCheck = (selected)=>{
        cartList.value.forEach(item=>item.selected=selected)
    }

    //计算属性
    const allCount = computed(()=>cartList.value.reduce((a,c)=>a+c.count,0))
    const allPrice = computed(()=>cartList.value.reduce((a,c)=>a+c.count*c.price,0))

    //已选择数量
    const selectedCount = computed(()=>cartList.value.filter(item=>item.selected).reduce((a,c)=>a+c.count,0))
    //已选择数量价钱合计
    const selectedPrice = computed(()=>cartList.value.filter(item=>item.selected).reduce((a,c)=>a+c.count*c.price,0))

    //是否全选
    const isAll = computed(()=>cartList.value.every((item)=>item.selected))


    
    return {
        cartList,
        allPrice,
        allCount,
        isAll,
        selectedCount,
        selectedPrice,
        updateNewList,
        clearCart,
        addCart,
        delCart,
        singleCheck,
        allCheck
    }
},{
    persist:true
})