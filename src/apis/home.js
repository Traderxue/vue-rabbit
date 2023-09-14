import http from '@/utils/http.js'

export function getBannerApi(){
    return http({
        url:"home/banner"
    })
}

export const findNewApi =()=>{
    return http({
        url:"/home/new"
    })
}

export const getHotApi =()=>{
    return http({
        url:"home/hot"
    })
}