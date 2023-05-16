import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/inihome.vue'
import aku from '../views/aku.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },

  {
    path: '/kontak',
    name: 'kontak',
    component: aku
  },

  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/viewabout.vue')
  },
  {
    path: '/baca/:id',
    name: 'baca',
    component: () => import('../views/inibaca.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
