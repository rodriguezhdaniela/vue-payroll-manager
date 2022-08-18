import { createRouter, createWebHistory } from 'vue-router'
import Payrolls from '../views/Payrolls.vue'
import Account from '../views/Account.vue'

const routes = [
  {
    path: '/',
    name: 'payrolls',
    component: Payrolls
  },
  {
    path: '/account',
    name: 'account',
    component: Account
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
