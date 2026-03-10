import { createRouter, createWebHashHistory } from 'vue-router'
import HomePage from '@/pages/home/HomePage.vue'
import EarnPage from '@/pages/earn/EarnPage.vue'
import ActivityPage from '@/pages/activity/ActivityPage.vue'
import DepositPage from '@/pages/deposit/DepositPage.vue'
import MinePage from '@/pages/mine/MinePage.vue'

const routes = [
  { path: '/', name: 'home', component: HomePage },
  { path: '/earn', name: 'earn', component: EarnPage },
  { path: '/activity', name: 'activity', component: ActivityPage },
  { path: '/deposit', name: 'deposit', component: DepositPage },
  { path: '/mine', name: 'mine', component: MinePage }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
