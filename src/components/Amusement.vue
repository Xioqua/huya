<template>
  <div class="amusement">
    <Topnav2></Topnav2>
    <Search></Search>
        <Slide></Slide>
    <router-view></router-view>
  </div>
</template>

<script>
import Topnav2 from './Topnav2'
import Search from './Search'
import Slide from './Slide'

export default {
  name: 'Amusement',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components: {
    Topnav2,
    Search,
     Slide
  }
}
</script>

<style scoped>
/* 请解决一下与第一个页面样式不统一问题  */
</style>
