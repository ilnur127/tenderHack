import { createRouter, createWebHistory } from 'vue-router'
import MainPage from '../views/MainPage.vue'
import Recomends from '../views/Recomends.vue'
import DetailRecord from '../views/DetailRecord.vue'

const routes = [
  {
    path: '/',
    name: 'MainPage',
    meta: {
      layout: 'main'
    },
    component: MainPage
  },
  {
    path: '/recomends',
    name: 'Recomends',
    meta: {
      layout: 'main'
    },
    component: Recomends
  },
  {
    path: '/detail/:id',
    name: 'DetailRecord',
    meta: {
      layout: 'main'
    },
    component: DetailRecord
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
