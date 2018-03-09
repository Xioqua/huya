<template>
<div class="home">
  <div class="swiper-container">
    <div class="swiper-wrapper">
      <div class="swiper-slide">
        <Main></Main>
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
import Main from '../components/Main'
import Tabbar from '@/components/tabbar/tabbar'

export default {
  components: {
    Main,
    Tabbar
  }
}
</script>