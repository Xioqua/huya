<template>
  <div class="amusement">
    <Topnav2/>
    <Searchbar/>
    <Slide/>
    <Datahead/>
    <Datalist></Datalist>
    <Delimiter/>
    <Datahead/>
    <Datalist></Datalist>
    <router-view/>
    <Tabbar/>
  </div>
</template>

<script>
import Topnav2 from '../components/Topnav2'
import Searchbar from '../components/Searchbar'
import Slide from '../components/Slide'
import Datahead from '../components/Datahead'
import Datalist from '../components/DataList'
import Delimiter from '../components/Delimiter'
import Tabbar from '../components/Tabbar'

export default {
  name: 'Amusement',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components: {
    Topnav2,
    Searchbar,
    Slide,
    Datahead,
    Datalist,
    Delimiter,
    Tabbar
  }
}
</script>

<style scoped>
/* 请解决一下与第一个页面样式不统一问题  */

</style>
