<template>
  <div id="app">
     <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'App'
}
</script>

<style>
* {margin: 0;padding: 0;box-sizing:border-box;}
ul,li{list-style: none;}
a {text-decoration: none;}

a:link,a:visited {color: #373737;}
body { 
  font-size: 20px;
  min-width:320px; /* 解决窄屏挤压 */
  margin-bottom: 3em;
  -webkit-tap-highlight-color:rgba(0,0,0,0);
}

.clearfix:after {
  content:'';
  display:table;
  clear: both;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#app > div > .swiper-container{
  padding-bottom: 3.5rem /* 56/16 */;
}

html,body {
  height: 100%;
  overflow: hidden;
}

/*滚动条样式*/ 
/*如何改变滚动条颜色, v-bar这个组件没有给解决方案,可在那解决别人issue*/
.verticalBarClass {
  width: 2px !important;
  background-color:transparent !important;
  margin-right: 1px !important;
}
.verticalBarInternalClass {
  width: 2px !important;
  height: 60px !important;
}
</style>
