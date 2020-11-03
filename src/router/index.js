import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import profile from '../views/Faith.vue'
import warner from '../views/WarnerInternational.vue'
import Contact from '../views/Contact.vue'
import Blog from '../views/Blog.vue'
import Blogpost from '../views/BlogPost.vue'
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
    path: '/blog',
    name: 'Blog',
    component: Blog
  },
  {
    path: '/blogpost',
    name: 'Blogpost',
    component: Blogpost
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
    path: '/contact',
    name: 'Contact',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Contact
  }
]

const router = new VueRouter({
  routes
})

export default router
