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

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: {
        name: 'RecommendationIndex'
      }
    },
    {
      path: '/Index',
      name: 'Index',
      component: Index,
      redirect: '/RecommendationIndex',
      children:[
        {path:'/RecommendationIndex',name:'RecommendationIndex',component:RecommendationIndex},
        {path:'/WangZheRongYao',name:'WangZheRongYao',component:WangZheRongYao},
        {path:'/Lol',name:':Lol',component:Lol},
        {path:'/JueDiQiuSheng',name:'JueDiQiuSheng',component:JueDiQiuSheng},
        {path:'/XingXiu',name:'XingXiu',component:XingXiu},
        {path:'/ChiHeWanLe',name:'ChiHeWanLe',component:ChiHeWanLe}
      ]
    },
    {
      path: '/Amusement',
      name: 'Amusement',
      component: Amusement,
      children:[
        {path:'/RecommendationAmuse',redirect:{name:RecommendationAmuse}},
        {path:'/XingXiu',redirect:{name:XingXiu}},
        {path:'/ErCiYuan',redirect:{name:ErCiYuan}},
        {path:'/HuWai',redirect:{name:HuWai}},
        {path:'/Lol',redirect:{name:Lol}},
        {path:'/ChiHeWanLe',redirect:{name:ChiHeWanLe}}
      ]
    },
    {
      path: '/Explore',
      name: 'Explore',
      component: Explore
    },
    {
      path: '/Person',
      name: 'Person',
      component: Person
    },
    {
      path: '/search',
      name: 'SearchResult',
      component: SearchResult
    },
    {
      path:'/liveroom',
      name:'LiveRoom',
      component: LiveRoom,
      redirect: '/zhubo',
      children: [
        {path:'/chat',name:'chat',component:Chat},
        {path:'/zhubo',name:'zhubo',component:Zhubo},
        {path:'/paihang',name:'paihang',component:Paihang},
        {path:'/guibin',name:'guibin',component:GuiBin}
      ]
    }
  ]
})
