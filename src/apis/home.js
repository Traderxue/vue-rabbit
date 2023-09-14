import http from '@/utils/http.js'

export function getBannerApi(){
    return http({
        url:"home/banner"
    })
}