import Vue from 'vue'
import Router from 'vue-router'
import Tabbar from '@/components/Tabbar'
import Index from '@/components/Index'
import Amusement from '@/components/Amusement'
import Explore from '@/components/Explore'
import Person from '@/components/Person'
import Recommendation from '@/components/Recommendation'
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
        {path:'/Eat',name:'Recommendation',component:Eat},
        {path:'/King',name:'Recommendation',component:King},
        {path:'/Lol',name:'Recommendation',component:Lol},
        {path:'/Seeklive',name:'Recommendation',component:Seeklive},
        {path:'/Start',name:'Recommendation',component:Start}
        
      ]
    },
    {
      path: '/amusement',
      name: 'Amusement',
      component: Amusement
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
