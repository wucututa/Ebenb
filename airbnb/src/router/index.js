import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/HomePage.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Airbnb | Nhà nghỉ dưỡng cho thuê, Cabin, Nhà trên bãi biển, Nhà và Trải nghiệm độc đáo ',
    component: Home
  },
  {
    path: '/about',
    name: 'AboutUs',
    component: () => import('../views/AboutUs.vue')
  }
]
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  document.title = to.name
  next()
})

export default router
