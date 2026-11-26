
import { createRouter, createWebHistory } from 'vue-router'

import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import Dashboard from '../views/Dashboard.vue'
import Home from '../views/Home.vue'
import Course from '../views/Course.vue'
import Categories from '../views/Categories.vue'
import HowItWorks from '../views/HowItWorks.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/course',
    name: 'Course',
    component: Course
  },
  {
    path: '/categories',
    name: 'Categories',
    component: Categories
  },
  {
    path: '/how-it-works',
    name: 'HowItWorks',
    component: HowItWorks
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard,
    meta: { requiresAuth: true }
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

// Authentication middleware
router.beforeEach((to, from, next) => {
  const token = localStorage.getItem('access_token')

  if (to.meta.requiresAuth && !token) {
    return next('/login')
  }

  if (token && ['/login', '/register'].includes(to.path)) {
    return next('/dashboard')
  }

  next()
})

export default router
