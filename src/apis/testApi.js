import http from "@/utils/http.js"


export function getCategpry(){
    return http({
        url:"/home/category/head"
    })
}