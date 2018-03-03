<template>
	<div class="swiper-container" id="swiper-banner">
			<div class="swiper-wrapper">
			        <div class="swiper-slide">
			        	<img src="../assets/img/banner01.png" alt="" />
			        </div>
			        <div class="swiper-slide">
			        	<img src="../assets/img/banner02.png" alt="" />
			        </div>
			        <div class="swiper-slide">
			        	<img src="../assets/img/banner03.png" alt="" />
			        </div>
			</div>
			    <div class="swiper-pagination"></div>
					
		</div>
</template>

<script>
require("../../static/css/swiper-4.1.0.min.css")
var Swiper=require("../../static/js/swiper-4.1.0.min.js")

	export default{
		name:"Slide",
		data () {
	    return {
	      msg: 'Welcome to Your Vue.js App'
	    }
  	}, 
		mounted:function(){
			var mySwiper = new Swiper ('#swiper-banner', {
		    direction: 'horizontal',
				loop: true,
				autoplay:true,
		    pagination: {
		      el: '.swiper-pagination',
		    },
		    scrollbar: {
		      el: '.swiper-scrollbar',
		    }
		  }) 
			
		}
	}
</script>

<style scoped>
.swiper-container img {
	width:100%;
	height:100%;
	display: block;
}
</style>