//封装和用户相关的接口函数
import http from "@/utils/http.js"
export const loginApi = ({account,password})=>{
    return http({
        url:"/login",
        method:"POST",
        data:{
            account,
            password
        }
    })
}

export const getLikeListApi=({limit=4})=>{
    return http({
        url:'/goods/relevant',
        params:{
            limit
        }
    })
}