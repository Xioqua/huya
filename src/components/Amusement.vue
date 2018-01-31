<template>
  <div class="amusement">
    <Topnav2></Topnav2>
    <Search></Search>
    <Slide></Slide>
    <Datahead></Datahead>
    <Datalist></Datalist>
    <Delimiter></Delimiter>
    <Datahead></Datahead>
    <Datalist></Datalist>
    <router-view></router-view>
  </div>
</template>

<script>
import Topnav2 from './Topnav2'
import Search from './Search'
import Slide from './Slide'
import Datahead from './Datahead'
import Datalist from './Datalist'
import Delimiter from './Delimiter'

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
    Slide,
    Datahead,
    Datalist,
    Delimiter
  }
}
</script>

<style scoped>
/* 请解决一下与第一个页面样式不统一问题  */

</style>
