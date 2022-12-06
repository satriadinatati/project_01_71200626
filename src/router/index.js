import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import MakananView from '../views/MakananView.vue'
import MinumanView from '../views/MinumanView.vue'
import SnackView from '../views/SnackView.vue'
import MakananDetail from '../views/MakananDetail.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/makanan',
    name: 'makanan',
    component: MakananView
  },
  {
    path: '/minuman',
    name: 'minuman',
    component: MinumanView
  },
  {
    path: '/snack',
    name: 'snack',
    component: SnackView
  },
  {
    path: '/detailMakanan/:id',
    name: 'detail',
    component: MakananDetail
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
