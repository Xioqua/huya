import Vue from 'vue'
import Router from 'vue-router'
import Tabbar from '@/components/Tabbar'
import Index from '@/components/Index'
import Amusement from '@/components/Amusement'
import Explore from '@/components/Explore'
import Person from '@/components/Person'
import Recommendation from '@/components/Recommendation'
import Twoci from '@/components/Twoci'
import Huwai from '@/components/Huwai'
import Eat from '@/components/Eat'
import King from '@/components/King'
import Lol from '@/components/Lol'
import Seeklive from '@/components/Seeklive'
import Start from '@/components/Start'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: {
        name: 'Index'
      }
    },
    {
      path: '/index',
      name: 'Index',
      component: Index,
      children:[
        {path:'/Recommendation',name:'Recommendation',component:Recommendation},
        {path:'/King',name:'King',component:King},
        {path:'/Seeklive',name:'Seeklive',component:Seeklive},
        {path:'/Lol',name:':Lol',component:Lol},
        {path:'/Start',name:'Start',component:Start},
        {path:'/Eat',name:'Eat',component:Eat}
      ]
    },
    {
      path: '/amusement',
      name: 'Amusement',
      component: Amusement,
      children:[
        {path:'/Recommendation',redirect:{name:Recommendation}},
        {path:'/Start',redirect:{name:Start}},
        {path:'/Twoci',redirect:{name:Twoci}},
        {path:'/Huwai',redirect:{name:Huwai}},
        {path:'/Lol',redirect:{name:Lol}},
        {path:'/Eat',redirect:{name:Eat}}
      ]
    },
    {
      path: '/explore',
      name: 'Explore',
      component: Explore
    },
    {
      path: '/person',
      name: 'Person',
      component: Person
    }
  ]
})
