<template>
 <div class="swiper-box">
   <div class="swiper-container content">
     <div class="swiper-wrapper">
       <v-bar class="swiper-slide" v-for="(item,index) in list" :key="index" wrapper="wrapper" vBar="verticalBarClass"  vBarInternal="verticalBarInternalClass">
         <keep-alive>
           <component :is="item.component"></component>
         </keep-alive>
       </v-bar>
     </div>
   </div>
 </div>
</template>

<script>
import Swiper from '../../static/js/swiper-4.1.0.min.js'
import '../../static/css/swiper-4.1.0.min.css'
import RecommendationIndex from '@/views/pages/RecommendationIndex'
import JueDiQiuSheng from '@/views/pages/JueDiQiuSheng'
import Lol from '@/views/pages/Lol'
import ErCiYuan from '@/views/pages/ErCiYuan'
import XingXiu from '@/views/pages/XingXiu'
import ChiHeWanLe from '@/views/pages/ChiHeWanLe'
import HuWai from '@/views/pages/HuWai'

import VBar from 'v-bar'


export default {
  components: {RecommendationIndex,JueDiQiuSheng,Lol,ErCiYuan,XingXiu,ChiHeWanLe,VBar},
  data() {
    return {
      list: [
        {path:'/RecommendationIndex',component:RecommendationIndex},
        {path:'/JueDiQiuSheng',component:JueDiQiuSheng},
        {path:'/Lol',component:Lol},
        {path:'/ErCiYuan',component:ErCiYuan},
        {path:'/XingXiu',component:XingXiu},
        {path:'/ChiHeWanLe',component:ChiHeWanLe},
        {path:'/HuWai',component:HuWai}
      ],
      arr: ['/RecommendationIndex','/JueDiQiuSheng','/Lol','/ErCiYuan','/XingXiu','/ChiHeWanLe','/HuWai']
    }
  },
  mounted() {
    var that = this
    var mySwiper = new Swiper('.content',{
      threshold: 80,
       on: {
        touchEnd() {
          var TR = this.translate
          var tranView = - (that.list.length - 1) * (document.documentElement.clientWidth)
          if (TR < tranView) {
            this.setTranslate(TR)
            that.$router.push({path:'/setting'})
          }
        }
      }
    })
    
    this.$root.eventHub.$on('changeTab',(index) => {
      mySwiper.slideTo(index,0,false)
    })
    mySwiper.on('slideChange',() => {
      this.$root.eventHub.$emit('slideTab',mySwiper.activeIndex)
    })
    var i = this.arr.indexOf(this.$route.path)
    mySwiper.slideTo(i,0,false)
  }
}
</script>

<style scoped>
.wrapper {
  height: 570px;
}
</style>