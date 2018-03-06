<template>
  <div class="index">
<div class="swiper-container" id="swiper-index">
    <div class="swiper-wrapper">
        <div class="swiper-slide">
          <Main></Main>
          <router-view></router-view>          
        </div>
    </div>
</div>
    <Tabbar/>
  </div>
</template>

<script>
import Main from '../components/Main'
import Tabbar from '../components/Tabbar'
require("../../static/css/swiper-4.1.0.min.css")
var Swiper=require("../../static/js/swiper-4.1.0.min.js")

export default {
  name: 'Index',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components: {
    Main,
    Tabbar
  },
  	mounted:function(){
			var mySwiper = new Swiper ('#swiper-index', {
		    direction: 'horizontal'
		  })
			
		}
}
</script>

<style scoped>
</style>
