import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/arac_galeri',
    name: 'AracGaleri',
    
    component: () => import('../components/AracGaleri.vue')
  },
  {
    path: "/kiralama",
    name: "Kiralama",
    component: () => import("../components/Kiralama.vue")
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
