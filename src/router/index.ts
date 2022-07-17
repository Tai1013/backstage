import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import { useLoginStore } from '@/stores/useLoginStore'

const routes: RouteRecordRaw[] = [
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login/index.vue')
  },
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/home/index.vue'),
  },
  { 
    path: '/:pathMatch(.*)*',
    redirect: '/'
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach((to, from, next) => {
  const userLogin = useLoginStore()
  const hasLogin: boolean = !!userLogin.apiToken
  const notPath: boolean = to.matched.length === 0

  if (to.name === 'login') return next()
  if (hasLogin === false) return next({ name: 'login' })
  if (notPath) return next({ name: 'home' })
  if (to.name === 'home') return next()
  if (to.name === 'login' && hasLogin) return next({ name: 'home' })

  next()
})

export default router