import { createRouter, createWebHistory } from 'vue-router'
import TingProductsView from '../views/TingProductsView.vue'
import SubscriptionsView from '../views/SubscriptionsView.vue'

const routes = [
  {
    path: '/',
    redirect: '/ting-products'
  },
  {
    path: '/ting-products',
    name: 'tingProducts',
    component: TingProductsView,
    meta: {
      title: 'TING Product',
      breadcrumb: ['Support', 'Ecosystem', 'TING Product']
    }
  },
  {
    path: '/subscriptions',
    name: 'subscriptions',
    component: SubscriptionsView,
    meta: {
      title: 'Subscriptions',
      breadcrumb: ['Support', 'Subscriptions']
    }
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
