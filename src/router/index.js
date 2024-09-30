// createRouter:创建router实例对象
// createWebHistory:创建history模式的路由

import { createRouter, createWebHistory } from 'vue-router'
import Layout from '@/components/Layout/index.vue'
import Login from '@/components/Login/index.vue'
import Home from '@/components/Home/index.vue'
import Category from '@/components/Category/index.vue'
import SubCategory from '@/components/SubCategory/index.vue'
import Detail from '@/components/Detail/index.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: Layout,
      children: [
        {
          path: '',
          component: Home,
        },
        {
          path: 'category/:id',
          name: 'category',
          component: Category
        },
        {
          path: 'category/sub/:id',
          name: 'subCategory',
          component: SubCategory
        },
        {
          path: 'detail/:id',
          component: Detail
        }
        
      ]
    },
    {
      path: '/login',
      component: Login
    },
  ],
  scrollBehavior () {
    return {
      top: 0
    }
  }
})

export default router
