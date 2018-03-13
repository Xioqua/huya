<template>
   <div class="activeExpl">
        <m-tabbar-item>
        <img src="@/assets/icon/expl/hdzx.png" slot="icon-active">
        活动中心
        </m-tabbar-item>
      <m-tabbar-item>
        <img src="@/assets/icon/expl/xxzx.png" slot="icon-active">
        新闻资讯
      </m-tabbar-item>
      <m-tabbar-item>
        <img src="@/assets/icon/expl/zyy.png" slot="icon-active">
        找应用
      </m-tabbar-item>
       <m-tabbar-item>
        <img src="@/assets/icon/expl/wyx.png" slot="icon-active">
        玩游戏
      </m-tabbar-item>
    </div>
</template>

<script>
import mTabbar from '@/components/tabbar/TabbarContainer'
import mTabbarItem from '@/components/tabbar/TabbarItem'

export default {
    components:{
      mTabbar,
      mTabbarItem
    }
}
</script>

<style scoped>
.activeExpl {
  display: flex;
}
.activeExpl .m-tabbar-item .m-tabbar-item-icon img {
  width: 45px;
  height: 45px;
}
.activeExpl  span.m-tabbar-item-text {
  color: #888 !important;
}
</style>
