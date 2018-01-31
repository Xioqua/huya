<template>
	<div class="swiper-container">
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
			    <!-- 如果需要分页器 -->
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
			var mySwiper = new Swiper ('.swiper-container', {
		    direction: 'horizontal',
		    loop: true,
		    
		    // 如果需要分页器
		    pagination: {
		      el: '.swiper-pagination',
		    },
		    
		    // 如果需要滚动条
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
}
</style>