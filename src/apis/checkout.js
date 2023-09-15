import http from '@/utils/http.js'

export const getCheckInfoApi=()=>{
    return http({
        url:'/member/order/pre'
    })
}