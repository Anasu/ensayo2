import Vue from 'vue'
import VueRouter from 'vue-router'
import Inicio from '../views/Inicio.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Inicio',
    component: Inicio
  },
  {
    path: '/opiniones',
    name: 'Opiniones',
    // importacion lazy-load
    component: () => import(/* webpackChunkName: "opiniones" */ '../views/Opiniones.vue')
  },
  {
    path: '/favoritos',
    name: 'Favoritos',
    // importacion lazy-load
    component: () => import(/* webpackChunkName: "favoritos" */ '../views/Favoritos.vue')
  },
  {
    path: '/admin',
    name: 'Admin',
    // importacion lazy-load
    component: () => import(/* webpackChunkName: "admin" */ '../views/Admin.vue')
  },
  {
    path: '/edit',
    name: 'Edit',
    // importacion lazy-load
    component: () => import(/* webpackChunkName: "edit" */ '../views/Edit.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
