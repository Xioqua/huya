<template>
<div class="home">
  <div class="swiper-container">
    <div class="swiper-wrapper">
      <div class="swiper-slide">
       <v-nav :showBtn="true"></v-nav>
       <v-swiper></v-swiper>
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
import swiper from '@/components/swiper'

export default {
  components: {
    Tabbar,
    'v-nav': nav,
    'v-swiper': swiper
  }
}
</script>

<style scoped>

</style>
