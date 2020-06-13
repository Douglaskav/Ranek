import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home'
import Produto from '../views/Produto.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/produto/:id',
    name: 'produto',
    props: true,
    component: Produto
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  scrollBehavior() {
    return window.scrollTo({
      top: 0,
      behavior: "smooth"
    })
  }
})

export default router
