import Vue from 'vue'
import Router from 'vue-router'
import Tabbar from '@/components/Tabbar'
import SearchResult from '@/components/SearchResult'

import Index from '@/views/Index'
import Amusement from '@/views/Amusement'
import Explore from '@/views/Explore'
import Person from '@/views/Person'

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
      component:Index
    },{
      path:'/index',
      redirect:{path:'/RecommendationIndex'}
    },{
      path:'/amusement',
      component:Amusement
    },{
      path:'/explore',
      component:Explore
    },{
      path:'/person',
      component:Person
    },{
      path:'/RecommendationIndex',
     redirect:{path:'/'}
    },{
      path:'/setting',
      component:Setting
    },{
      path:'/search',
      component:SearchResult
    },{
      path:'/liveroom',
      component:LiveRoom
    }
  ]
})