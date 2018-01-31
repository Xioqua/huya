<template>
  <div class="tabbar">
    <footer class="footer">
      <ul>
        <li @click="fn(0)"><router-link to='/index' class="active">首页</router-link></li>
        <li @click="fn(1)"><router-link to='/amusement' class="">娱乐</router-link></li>
        <li @click="fn(2)"><router-link to='/explore' class="">发现</router-link></li>
        <li @click="fn(3)"><router-link to='/person' class="">我的</router-link></li>
      </ul>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'Tabbar',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
   methods: {
    fn: function(i) {
      var ali = document.querySelectorAll('.footer li');
      var aa = document.querySelectorAll('.footer a');
      var arr = ['home','fav','search','person']
      for (let i = 0; i < ali.length; i++) {
        aa[i].style.color = "rgba(0,0,0,.6)";
        aa[i].style.backgroundImage = "url(../../static/tabbar/"+ arr[i] + "_gray.png)"
      }
      aa[i].style.color = "rgb(252,153,0)";
      aa[i].style.backgroundImage = "url(../../static/tabbar/" + arr[i] + "_light.png)"
    }
  }
}
</script>

<style scoped>
  .footer {
    position:fixed;
    bottom:0;
    width: 100%;
    background-color: #fff;
    border-top:1px solid #ccc;
    font-size:12px; /*1*/
    z-index:99;
  }
  .footer ul {
    display:flex;
  }
  .footer ul>li {
    flex: 1;
    padding: 8px 0;
  }
  .footer ul a {
    display: inline-block;
    height: 66px;
    padding-top: 36px;
  }
  .footer ul li:nth-of-type(1) a{
    background:url(../../static/tabbar/home_light.png) no-repeat;
     background-size: contain;
  }
  .footer ul li:nth-of-type(2) a{
    background:url(../../static/tabbar/fav_gray.png) no-repeat;
     background-size: contain;
  }
  .footer ul li:nth-of-type(3) a{
    background:url(../../static/tabbar/search_gray.png) no-repeat;
     background-size: contain;
  }
  .footer ul li:nth-of-type(4) a{
    background:url(../../static/tabbar/person_gray.png) no-repeat;
    background-size: contain;
  }
  /* 背景图切换 */
  /* 之前的图片路径被解析为base64了不好切换背景图。 资源放在src下都会被webpack打包处理 */
/* 这块的做法与图片命名太过耦合 */

  .active {
    color: rgb(252,153,0);
  }
</style>