import { createRouter, createWebHistory } from 'vue-router'
import Main from '@/views/Main.vue'
import ProductInfo from '@/views/ProductInfo.vue'
import Basket from '@/views/Basket.vue'
import Categories from '@/views/Categories.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Main
    },
    {
      path: '/productsInfo/:id',
      name: 'productsInfo',
      component: ProductInfo
    },
    {
      path: '/basket',
      name: 'Basket',
      component: Basket
    },
    {
      path: '/categories',
      name: 'Categories',
      component: Categories
    },
  ]
})

export default router
