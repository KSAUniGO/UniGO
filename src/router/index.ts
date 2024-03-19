import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import { nextTick } from 'vue-demi'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomeView
    },
    {
      path: '/pricing',
      name: 'Pricing',
      component: () => import('../views/PricingView.vue')
    },
    {
      path: '/about-us',
      name: 'About Us',
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/contact-us',
      name: 'Contact Us',
      component: () => import('../views/ContactUsView.vue')
    },
    {
      path: '/login',
      name: 'Login',
      component: () => import('../views/auth/LoginView.vue')
    },
    {
      path: '/register',
      name: 'Register',
      component: () => import('../views/auth/RegisterView.vue')
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'Page Not Found',
      component: () => import('../views/PageNotFoundView.vue')
    }
  ]
})

router.afterEach(async (to) => {
  if (to.name) document.title = `UniGO - ${String(to.name)}`
  else document.title = 'UniGO'
  await nextTick()
})

export default router
