<template>
   <m-tabbar v-model="select">
        <m-tabbar-item id='home' isRouter>
        <img src="@/assets/icon/tabbar/home.png" slot="icon-normal"> 
        <img src="@/assets/icon/tabbar/home_l.png" slot="icon-active">
        首页
        </m-tabbar-item>
      <m-tabbar-item id='ent' isRouter>
        <img src="@/assets/icon/tabbar/star.png" slot="icon-normal">
        <img src="@/assets/icon/tabbar/star_l.png" slot="icon-active">
        娱乐
      </m-tabbar-item>
      <m-tabbar-item id='subc' isRouter>
        <img src="@/assets/icon/tabbar/smile.png" slot="icon-normal"> 
        <img src="@/assets/icon/tabbar/smile_l.png" slot="icon-active"> 
        订阅
      </m-tabbar-item>
      <m-tabbar-item id='expl' isRouter>
        <img src="@/assets/icon/tabbar/planet.png" slot="icon-normal">
        <img src="@/assets/icon/tabbar/planet_l.png" slot="icon-active">
        发现
      </m-tabbar-item>
       <m-tabbar-item id='mine' isRouter>
        <img src="@/assets/icon/tabbar/cute.png" slot="icon-normal">
        <img src="@/assets/icon/tabbar/cute_l.png" slot="icon-active">
        我的
      </m-tabbar-item>
    </m-tabbar>
</template>

<script>
import mTabbar from '@/components/tabbar/TabbarContainer'
import mTabbarItem from '@/components/tabbar/TabbarItem'

export default {
   data() {
      return {
        select:"home"
      }
    },
    components:{
      mTabbar,
      mTabbarItem
    }
}
</script>