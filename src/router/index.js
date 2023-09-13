import { createRouter, createWebHistory } from 'vue-router'
import Layout from "@/views/Layout/index.vue"
import Login from "@/views/Login/index.vue"

import Category from "@/views/Category/index.vue"
import Home from "@/views/Home/index.vue"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
      {
        path:"/",
        component:Layout,
        children:[
          {
            path:'',
            component:Home      //默认二级路由
          },
          {
            path:"/category",
            component:Category
          }
        ]
      },
      {
        path:"/login",
        component:Login
      }
  ]
})

export default router
