import { createRouter, createWebHistory } from 'vue-router'

// Импортируем страницы
import Orders from '../pages/Orders.vue'
import Sales from '../pages/Sales.vue'
import Stocks from '../pages/Stocks.vue'
import Incomes from '../pages/Incomes.vue'

const routes = [
  { path: '/', redirect: '/orders' }, // редирект на Orders
  { path: '/orders', component: Orders },
  { path: '/sales', component: Sales },
  { path: '/stocks', component: Stocks },
  { path: '/incomes', component: Incomes },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
