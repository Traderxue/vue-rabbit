import http from '@/utils/http.js'

export function getDetail(id){
        return http({
            url:"/goods",
            params:{
                id
            }
        })
}

export function getHotGoodsApi({id,type,limit=3}){
    return http({
        url:"/goods/hot",
        params:{
            id,
            type,
            limit
        }
    })
}