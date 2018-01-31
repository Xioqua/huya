<template>
  <div class="index">
    <Topnav></Topnav>
    <router-view></router-view>
  </div>
</template>

<script>
import Topnav from './Topnav'

export default {
  name: 'Index',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components: {
    Topnav
  }
}
</script>

<style scoped>
/* 这里的样式是针对整个index标签页的 */
</style>