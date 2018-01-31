import Vue from 'vue'
import Router from 'vue-router'
import Tabbar from '@/components/Tabbar'
import Index from '@/components/Index'
import Amusement from '@/components/Amusement'
import Explore from '@/components/Explore'
import Person from '@/components/Person'

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
      component: Index
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
