import Vue from 'vue'
import Router from 'vue-router'

import Index from '@/components/index'
import Newadvert from '../components/newadvert/newadvert'
import Workbox from '../components/workbox/workbox'
import Advertmanage from '../components/manage/advertmanage'
import Login from '../components/login/login'
import Home from '../components/home/home'

import Creativity from '../components/manage/creativity'
import Plan from '../components/manage/plan'
import Unit from '../components/manage/unit'


//新建创意子路由
import newadvertPlan from '../components/newadvert/plan'
import newadvertUnit from '../components/newadvert/unit'

import newadvertCreativity from '../components/newadvert/creativity'

Vue.use(Router)
let route = new Router({
  mode: 'history',
  routes: [{
    path:'/',
    redirect:'/index'
  },{
      path: '/index',
      name: 'index',
      component: Index,
      redirect: '/index/home ',
      children: [{
          path: '/index/advertmanage',
          name: 'advertmanage',
          component: Advertmanage,
          redirect: '/index/advertmanage/plan',
          children: [{
              path: '/index/advertmanage/plan',
              name: 'plan',
              component: Plan
            },
            {
              path: '/index/advertmanage/unit',
              name: 'unit',
              component: Unit
            },
            {
              path: '/index/advertmanage/creativity',
              name: 'creativity',
              component: Creativity
            }
          ]
        },
        {
          path: '/index/workbox',
          name: 'workbox',
          component: Workbox
        },
        {
          path: '/index/home',
          name: 'home',
          component: Home
        },
        {
          path: '/index/newadvert',
          name: 'newadvert',
          component: Newadvert,
          redirect: '/index/newadvert/creativity',

          children:[
            {
              path:'/index/newadvert/plan',
              name:'newadvertPlan',
              component:newadvertPlan
            },
            {
              path:'/index/newadvert/creativity',
              name:'newadvertCreativity',
              component:newadvertCreativity
            },
            {
              path:'/index/newadvert/unit',
              name:'newadvertUnit',
              component:newadvertUnit
            }
          ]
        }
      ]
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    }
  ]
})

route.beforeEach((to, from, next) => {
  let tk=gettoken()
    if(to.name=='login'){
      next()
    }else{
      if(!tk){
        next('/login')
      }else{
        next()
      }
    }

})
function gettoken(){
    let tk=localStorage.getItem('token')
    return !!tk
}
export default route
