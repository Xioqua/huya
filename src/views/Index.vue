<template>
  <div class="index">
    <Topnav></Topnav>
    <IconMenu></IconMenu>
<div class="swiper-container" id="swiper-index">
    <div class="swiper-wrapper">
        <div class="swiper-slide">
          <Searchbar></Searchbar>
          <Slide></Slide>
          <router-view></router-view>
        </div>
    </div>
</div>
    <Tabbar/>
  </div>
</template>

<script>
import Topnav from '../components/Topnav'
import IconMenu from '../components/IconMenu'
import Searchbar from '../components/Searchbar'
import Slide from '../components/Slide'
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
    Topnav,
    IconMenu,
    Searchbar,
    Slide,
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
