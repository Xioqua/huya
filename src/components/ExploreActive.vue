<template>
   <div class="activeExpl">
      <div class="itemExpl">
        <img src="@/assets/icon/expl/hdzx.png">
        <span>活动中心</span>
      </div>
      <div class="itemExpl">
        <img src="@/assets/icon/expl/xxzx.png">
        <span>新闻资讯</span>
      </div>
      <div class="itemExpl">
        <img src="@/assets/icon/expl/zyy.png">
        <span>找应用</span>
      </div>
      <div class="itemExpl">
        <img src="@/assets/icon/expl/wyx.png">
        <span>玩游戏</span>
      </div>
    </div>
</template>

<script>
export default {
  name:'ExploreActive'
}
</script>

<style scoped>
.activeExpl {
  display: flex;
}
.itemExpl {
  flex:1;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.activeExpl img {
  display: block;
  width: 45px;
  height: 45px;
}
.itemExpl span {
  font: 12px/24px "宋体";
}
</style>
