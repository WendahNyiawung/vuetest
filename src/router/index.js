import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import profile from '../views/Faith.vue'
import warner from '../views/WarnerInternational.vue'
import 'bootstrap'
import '../assets/app.scss'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/faith',
    name: 'Faith',
     component: profile
  },
  {
    path: '/warnerinternational',
    name: 'WarnerInternational',
     component: warner
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
