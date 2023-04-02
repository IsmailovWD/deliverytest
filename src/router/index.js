import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/Psorinorm',
      name: 'Psorinorm',
      component: () => import('../views/Psorinorm.vue')
    },
    {
      path: '/Antipapilom',
      name: 'Antipapilom',
      component: () => import('../views/Antipapilom.vue')
    },
    {
      path: '/Antisilverin',
      name: 'Antisilverin',
      component: () => import('../views/Antisilverin.vue')
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'Bosh sahifa',
      component: () => import('../views/Nod.vue')
    },
  ]
})

export default router
