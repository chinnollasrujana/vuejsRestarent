import { createRouter, createWebHistory } from 'vue-router'
import MenuHome from '@/components/MenuHome.vue'
import Restarent from '@/components/Restarent.vue'
import About from '@/components/About.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Restarent
    },
    
    {
      path: '/menu',
      name: 'menu',
      component: MenuHome
      
    },
    {
      path: '/about',
      name: 'about',
      component: About
    }
  ]
})

export default router
