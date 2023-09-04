import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import LoginPage from '../views/LoginPage.vue'
import MenuPage from '../views/MenuPage.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/menu/home'
  },
  {
    path: '/menu/',
    component: MenuPage,
    children: [
      {
        path: '',
        name: 'Home',
        redirect: '/menu/home'
      },
      {
        path: 'home',
        component: () => import('@/views/HomePage.vue')
      },
      {
        path: 'tab2',
        component: () => import('@/views/Tab2Page.vue')
      },
      {
        path: 'profile',
        component: () => import('@/views/ProfilePage.vue')
      }
    ]
  },
  {
    path: '/login',
    name: 'Login',
    component: LoginPage
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
