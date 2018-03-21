<template>
 <div class="nav swiper-container" ref="nav">
  
   <div class="swiper-wrapper">
     
     <span class="item swiper-slide" 
          v-for="(item,index) in navList"
          :class="{'active': nowIndex===index}"
          @click="tabClick(index)"
      >
       {{item.name}}
     </span>

   </div>

  <setting-btn v-show="showBtn"></setting-btn>

 </div>
</template>

<script>
import Swiper from '../../static/js/swiper-4.1.0.min.js'
import Router from 'vue-router'
import '../../static/css/swiper-4.1.0.min.css'
import SettingBtn from '@/components/SettingBtn'

export default {
  components: {
    'setting-btn': SettingBtn
  },
  data() {
    return {
      navList: [
        {name:'推荐'},
        {name:'吃喝玩乐'},
        {name:'户外'},
        {name:'绝地求生'},
        {name:'星秀'},
        {name:'二次元'},
        {name:'LoL'}
      ],
      nowIndex: 0,
      arr: ['/RecommendationIndex','/JueDiQiuSheng','/Lol','/ErCiYuan','/XingXiu','/ChiHeWanLe','/HuWai'],
      slidesPerView: 5
    }
  },
  props:['showBtn'],
  mounted() {
    var that = this
    this.$root.eventHub.$on('slideTab',this.slideTab)
    this.$nextTick(() => {
      this.initPage()
    })
    
    this.navSwiper = new Swiper('.nav',{
      slidesPerView: this.slidesPerView,
      watchSlidesProgress: true,
      watchSlidesVisibility: true,
      on: {
        touchEnd() {
          // 当最后一行全都出现时去掉样式否则
          // 取得最后一个片 如果有 swiper-slide-visible 说明 最后一行已经到达
        var lastVisi = document.getElementsByClassName('item')[that.navList.length-1]
        var setBtn = document.getElementsByClassName('setting-btn')[0]
        // console.log(lastVisi.classList)
        if(lastVisi.classList.contains('swiper-slide-visible')) {
          // console.log('到达最后了')
          setBtn.classList = 'setting-btn'
        } else {
          setBtn.classList = 'setting-btn icon-in'
        }
      }
      }
    })
  },
  methods: {
    initPage() {
     this.nowIndex = this.arr.indexOf(this.$route.path)
    },
    tabClick(index) {
      this.nowIndex = index
      this.$root.eventHub.$emit('changeTab',index)
    },
    slideTab(index) {
      this.nowIndex = index
      let href = this.arr[this.nowIndex]
      let router = new Router()
      router.push(href)
      this.navSwiper.slideTo(this.nowIndex-1)
      var posA = this.navList.length - Math.ceil(this.slidesPerView / 2)
      // console.log(posA)
      // 当到达posA位置时把setting-btn的样式去掉
      var setBtn = document.getElementsByClassName('setting-btn')[0]
      if (this.nowIndex >= posA) {
        setBtn.classList = 'setting-btn'
      } else if(this.nowIndex < posA) {
        setBtn.classList = 'setting-btn icon-in'
      }
   }
  }
}
</script>

<style scoped>
.item {
  display: inline-block;
  font-family: '宋体';
  font-size: 1rem;
  box-sizing: border-box;
  word-break: keep-all;
  padding: .6em 0;
}
.item.active {
  color: #cd6115;
}
.item:last-child {
  padding-right: 9em;
}
</style>