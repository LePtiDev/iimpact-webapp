import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Members from "../views/Members";
import Events from "../views/Events";
import Blog from "../views/Blog";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/membres',
    name: 'Members',
    component: Members
  },
  {
    path: '/evenements',
    name: 'Events',
    component: Events
  },
  {
    path: '/blog',
    name: 'Blog',
    component: Blog
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
