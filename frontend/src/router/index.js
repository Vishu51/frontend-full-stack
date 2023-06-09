import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/about',
    name: 'about',
    component: () => import(/* webpackChunkName: "about" */ '@/views/AboutView.vue'),
    meta: { requiresAuth: true }
  },
  {
    path: '/signup',
    name: 'signup',
    component: () => import('@/views/RegisterUser.vue')
  },
  {
    path: '/',
    name: 'login',
    component: () => import('@/views/Login.vue')
  },
  {
    path: '*',
    name: 'Page Not Found',
    component: () => import('@/views/PageNotFound')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

// Add navigation guard
router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some(route => route.meta.requiresAuth);

  // Check if the route requires authentication
  if (requiresAuth) {
    const token = localStorage.getItem('token');

    // Check if the token exists
    if (token) {
      // Token exists, allow navigation
      next();
    } else {
      // Token doesn't exist, redirect to login page
      next('/');
    }
  } else {
    // Route doesn't require authentication, allow navigation
    next();
  }
});

export default router
