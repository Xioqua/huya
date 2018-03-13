import Vue from 'vue'
import Router from 'vue-router'
import SearchResult from '@/components/SearchResult'

import Tabbar from '@/components/tabbar/tabbar'
import home from '@/views/home'
import ent from '@/views/ent'
import expl from '@/views/expl'
import mine from '@/views/mine'

import RecommendationIndex from '@/views/pages/RecommendationIndex'

import LiveRoom from '@/views/pages/LiveRoom'

import Setting from '@/components/Setting'

Vue.use(Router)

export default new Router({
  routes: [{
      path:'/',
      name: 'home',
      component:home
    },{
      path:'/home',
      redirect:'/'
    },{
      path:'/ent',
      name:'ent',
      component:ent
    },{
      path:'/expl',
      name:'expl',
      component:expl
    },{
      path:'/mine',
      name:'mine',
      component:mine
    },{
      path:'/setting',
      name:'setting',
      component:Setting
    },{
      path:'/search',
      name:'search',
      component:SearchResult
    },{
      path:'/liveroom',
      name:'liveroom',
      component:LiveRoom
    },{
      path: '/RecommendationIndex',
      redirect:'/'
    }
  ]
})