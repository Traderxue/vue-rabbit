import http from '@/utils/http.js'

export function getBannerApi(params = {}){
    //默认为1  商品为2
    const {distributionSite='1'} = params
    return http({
        url:"/home/banner",
        params:{
            distributionSite
        }
    })
}

export const findNewApi =()=>{
    return http({
        url:"/home/new"
    })
}

export const getHotApi =()=>{
    return http({
        url:"/home/hot"
    })
}

export const getGoodsApi=()=>{
    return http({
        url:"/home/goods"
    })
}