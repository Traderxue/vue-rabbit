import http from '@/utils/http.js'

//加入购物车
export const insertCartApi=({skuId,count})=>{
    return http({
        url:"/member/cart",
        method:"POST",
        data:{
            skuId,
            count
        }
    })
}


//获取最新购物车
export const findNewCartListApi=()=>{
    return http({
        url:"/member/cart"
    })
}

//删除购物车
export const delCartApi = (ids)=>{
    return http({
        url:"/member/cart",
        metho:"DELETE",
        data:{
            ids
        }
    })
}

//合并购物车
export const mergeCartApi=(data)=>{
    return http({
        url:"/member/cart/merge",
        method:"POST",
        data
    })
} 