//把components中的所有组件都进行全局化注册

import ImageView from "@/components/ImageView/index.vue"
import Sku from "@/components/XtxSku/index.vue"

export const componentPlugin ={
    install(app){
        // app.component("组件名字")
        app.component('XtxImageView',ImageView)
        app.component('XtxSku',Sku)
    }
}