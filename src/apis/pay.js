import http from '@/utils/http.js'

export const getOrderApi = (id)=>{
    return http({
        url:`/member/order/${id}`
    })
}