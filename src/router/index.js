/*
 * @Author: 月魂
 * @Date: 2022-08-22 17:05:43
 * @LastEditTime: 2022-08-24 16:11:01
 * @LastEditors: 月魂
 * @Description: 
 * @FilePath: \vue-admin\src\router\index.js
 */
import { createRouter, createWebHashHistory } from 'vue-router'
import Layout from '@/layout'

const routes = [
  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    children: [{
      path: '/dashboard',
      name: 'Dashboard',
      component: () => import('@/views/dashboard.vue'),
      meta: { title: 'Dashboard', icon: 'Odometer' }
    }]
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
