<template>
  <div class="index">
    <Topnav></Topnav>
    <Search></Search>
    <Slide></Slide>
    <Datahead></Datahead>
    <Datalist></Datalist>
    <Delimiter></Delimiter>
    <Datahead></Datahead>
    <Datalist></Datalist>
    <Delimiter></Delimiter>
    <Datahead></Datahead>
    <Datalist></Datalist>
    <router-view></router-view>
  </div>
</template>

<script>
import Topnav from './Topnav'
import Search from './Search'
import Slide from './Slide'
import Datahead from './Datahead'
import Datalist from './Datalist'
import Delimiter from './Delimiter'

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
    Slide,
    Datahead,
    Datalist,
    Delimiter
  }
}
</script>

<style scoped>
/* 这里的样式是针对整个index标签页的 */
</style>