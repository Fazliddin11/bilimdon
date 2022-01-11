import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/main.vue')
  },
  {
    path: '/tasklist',
    name: 'task',
    component: () => import('../views/task.vue')
  },
  {
    path: '/example',
    name: 'example',
    component: () => import('../views/example.vue')
  },
  {
    path: '/new',
    name: 'example',
    component: () => import('../views/newexample.vue')
  },
  // {
  //   path: '/',
  //   name: 'example',
  //   component: () => import('../views/newmain.vue')
  // },
]


const router = new VueRouter({
  routes
})

export default router
