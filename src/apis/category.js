import http from "@/utils/http.js"

export function getCategoryApi(id){
    return http({
        url:"/category",
        params:{
            id
        }
    })
}

export function getCategoryFilterApi(id){
    return http({
        url:"/category/sub/filter",
        params:{
            id
        }
    })
}

export function getSubCategoryApi(data){
    return http({
        url:"/category/goods/temporary",
        method:"POST",
        data
    })
}