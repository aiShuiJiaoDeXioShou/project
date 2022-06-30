import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/Home.vue'
import Liuxinyu from '../views/home/Liuxinyu.vue'
import viewbg from '../views/home/Video_Background.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    children:[
      
    ]
  },
  {
    path:'/login',
    name:'login',
    component: () => import('../views/login/index.vue')
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/home/Music.vue')
  },
  {
    path: '/liuxinyu',
    component:Liuxinyu
  },
  {
    path: '/viewbg',
    component:viewbg
  },
  {
    path: '/edit',
    name:'edit',
    component: ()=> import('../views/edit/index.vue')
  },
  {
    path: '/own',
    name: 'own',
    component: ()=> import('../views/own/index.vue')
  },
  {
    path: '/note',
    name: 'note',
    component: ()=> import('../views/note/index.vue')
  }
  
]

const router = new VueRouter({
  routes
})

export default router
