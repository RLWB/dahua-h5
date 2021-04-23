import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/connect',
    name: 'Connect',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "connect" */ '../views/Connect.vue')
  },
  {
    path: '/cooperation',
    name: 'Cooperation',
    // route level code-splitting
    // this generates a separate chunk (cooperation.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "cooperation" */ '../views/Cooperation.vue')
  },
  {
    path: '/h5',
    name: 'H5',
    // route level code-splitting
    // this generates a separate chunk (h5.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "h5" */ '../views/H5.vue')
  },
  {
    path: '/java',
    name: 'Java',
    // route level code-splitting
    // this generates a separate chunk (java.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "java" */ '../views/Java.vue')
  },
  {
    path: '/job',
    name: 'Job',
    // route level code-splitting
    // this generates a separate chunk (job.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "job" */ '../views/Job.vue')
  },
  {
    path: '/news',
    name: 'News',
    // route level code-splitting
    // this generates a separate chunk (news.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "news" */ '../views/News.vue')
  },
  {
    path: '/python',
    name: 'Python',
    // route level code-splitting
    // this generates a separate chunk (python.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "python" */ '../views/Python.vue')
  },
  {
    path: '/school',
    name: 'School',
    // route level code-splitting
    // this generates a separate chunk (school.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "school" */ '../views/School.vue')
  },
  {
    path: '/teachers',
    name: 'Teachers',
    // route level code-splitting
    // this generates a separate chunk (teachers.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "teachers" */ '../views/Teachers.vue')
  },
  {
    path: '/ui',
    name: 'Ui',
    // route level code-splitting
    // this generates a separate chunk (ui.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "ui" */ '../views/Ui.vue')
  },
  {
    path: '/works',
    name: 'Works',
    // route level code-splitting
    // this generates a separate chunk (works.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "works" */ '../views/Works.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
