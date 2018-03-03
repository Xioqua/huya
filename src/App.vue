<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import Tabbar from './components/Tabbar'

export default {
  name: 'App',
  components: {
    Tabbar
  }
}
</script>

<style>
/* 全局重置样式 */
* {margin: 0;padding: 0;box-sizing:border-box;}
ul,li{list-style: none;}
a {text-decoration: none;}

a:link,a:visited {color: #373737;}
body { 
  font-size: 20px;
  min-width:320px; /* 解决窄屏挤压 */
  margin-bottom: 200px;
}

.clearfix:after {
  content:'';
  display:table;
  clear: both;
}

/* 全局整个APP样式 */
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  overflow-x: hidden; /* 横向滚动禁止 */
}
</style>
