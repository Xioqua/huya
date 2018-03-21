<template>
<div class="ent">
  <div class="swiper-container">
    <div class="swiper-wrapper">
      <div class="swiper-slide">
       <v-nav :showBtn="false"></v-nav>
       <v-swiper2></v-swiper2>
       <router-view></router-view>          
      </div>
    </div>
  </div>
  <tabbar></tabbar>
</div>
</template>

<script>
import "../../static/css/swiper-4.1.0.min.css"
import Swiper from "../../static/js/swiper-4.1.0.min.js"
import Tabbar from '@/components/tabbar/tabbar'
import nav from '@/components/nav'
import swiper2 from '@/components/swiper2'

export default {
  components: {
    Tabbar,
    'v-nav': nav,
    'v-swiper2': swiper2
  }
}
</script>