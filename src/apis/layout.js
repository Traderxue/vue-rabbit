import http from "@/utils/http.js"

export function getCateGoryApi(){
    return http({
        url:"/home/category/head"
    })
}