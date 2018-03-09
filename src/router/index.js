import Vue from 'vue'
import Router from 'vue-router'
import SearchResult from '@/components/SearchResult'

import Tabbar from '@/components/tabbar/tabbar'
import home from '@/views/home'
import ent from '@/views/ent'
import subc from '@/views/subc'
import expl from '@/views/expl'
import mine from '@/views/mine'

import RecommendationIndex from '@/views/pages/RecommendationIndex'
import RecommendationAmuse from '@/views/pages/RecommendationAmuse'
import ErCiYuan from '@/views/pages/ErCiYuan'
import XingXiu from '@/views/pages/XingXiu'
import ChiHeWanLe from '@/views/pages/ChiHeWanLe'
import HuWai from '@/views/pages/HuWai'
import WangZheRongYao from '@/views/pages/WangZheRongYao'
import JueDiQiuSheng from '@/views/pages/JueDiQiuSheng'
import Lol from '@/views/pages/Lol'

import LiveRoom from '@/views/pages/LiveRoom'
import Chat from '@/components/liveroom/Chat'
import Zhubo from '@/components/liveroom/Zhubo'
import Paihang from '@/components/liveroom/Paihang'
import GuiBin from '@/components/liveroom/GuiBin'

import Setting from '@/components/Setting'
import Main from '@/components/Main'

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
      path:'/subc',
      name:'subc',
      component: subc
    },
    {
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
    }
  ]
})