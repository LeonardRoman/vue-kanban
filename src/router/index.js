import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'dashboard',
    component: () => import('@/views/Dashboard'),
    children: [{
      path: '/task/:id',
      name: 'task',
      component: () => import('@/components/EditTask'),
      props: true
    },]
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
