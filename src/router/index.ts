import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import LoginPage from '../views/Sesion/LoginPage.vue'
import SignUpPage from '../views/Sesion/SignUpPage.vue'
import MenuPage from '../views/MenuPage.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/login',
    name: 'Login',
    component: LoginPage
  },
  {
    path: '/signup',
    name: 'SignUp',
    component: SignUpPage
  },
  {
    path: '/menu/:username',
    component: MenuPage,
    children: [
      {
        path: '',
        redirect: to => {
          return { name: 'MenuHome', params: { username: to.params.username } }
        }
      },
      {
        path: 'home',
        name: 'MenuHome',
        component: () => import('@/views/HomePage.vue')
      },
      {
        path: 'food',
        name: 'MenuFood',
        component: () => import('@/views/FoodPage.vue')
      },
      {
        path: 'profile',
        name: 'MenuProfile',
        component: () => import('@/views/ProfilePage.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
