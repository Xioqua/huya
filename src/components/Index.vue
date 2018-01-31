<template>
  <div class="index">
    <Topnav></Topnav>
    <Search></Search>
    <Slide></Slide>
    <router-view></router-view>
  </div>
</template>

<script>
import Topnav from './Topnav'
import Search from './Search'
import Slide from './Slide'

export default {
  name: 'Index',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components: {
    Topnav,
    Search,
    Slide
  }
}
</script>

<style scoped>
/* 这里的样式是针对整个index标签页的 */
</style>