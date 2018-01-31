<template>
  <div class="explore-active">
    <ul>
      <li><router-link to="./"  class="">活动中心</router-link></li>
      <li><router-link to="./" class="">新闻资讯</router-link></li>
      <li><router-link to="./" class="">找应用</router-link></li>
      <li><router-link to="./" class="">玩游戏</router-link></li>
      <li><router-link to="./" class="">找女神</router-link></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'ExploreActive',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style scoped>
.explore-active ul {
  margin-top:20px;
  display: flex;
}
.explore-active ul>li {
  flex:1;
}
.explore-active a {
  display: inline-block;
  height: 66px;
  width: 66px;
  padding-top: 70px;
  background: url(../../static/tabbar/fav_light.png) no-repeat;
  background-size: contain;
  font-size: 16px;
}

</style>
