// createRouter:创建router实例对象
// createWebHistory:创建history模式的路由

import { createRouter, createWebHistory } from 'vue-router'
import Layout from '@/components/Layout/index.vue'
import Login from '@/components/Login/index.vue'
import Home from '@/components/Home/index.vue'
import Category from '@/components/Category/index.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'layout',
      component: Layout,
      children: [
        {
          path: '',
          component: Home,
        },
        {
          path: '/category',
          component: Category
        }
        

      ]
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
  ]
})

export default router
