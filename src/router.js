import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home'

Vue.use(Router)

export default new Router({
    mode:'history',
    routes:[
      {
        path:'/',
        component: Home
      },
      {
        path:'/profile',
        component: ()=> import('@/views/Profile')
      },
      {
        path:'/onseries',
        component: ()=> import('@/views/Online')
      },
      {
        path:'/csvseries',
        component: ()=> import('@/views/Csv')
      },
      {
        path:'/about',
        component: ()=> import('@/views/About')
      }
    ]
  })
  