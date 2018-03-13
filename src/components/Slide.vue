<template>
	<div class="swiper-container swiper-banner">
			<div class="swiper-wrapper">
			        <div class="swiper-slide" v-for="m in bannerImgs">
			        	<img :src="m.url" alt="" />
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
		data() {
			return {
			  bannerImgs: [
					{url: 'static/banner/1.jpg' },
					{url: 'static/banner/2.jpg'},
					{url: 'static/banner/3.jpg'},
					{url: 'static/banner/4.jpg'},
					{url: 'static/banner/5.jpg'}
				]
			}
		},
		mounted:function(){
			var mySwiper = new Swiper ('.swiper-banner', {
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
.swiper-pagination {
	text-align: right;
}
</style>