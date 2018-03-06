<template>
  <div class="tabbar">
    <footer class="footer">
      <ul>
        <li><router-link to='/index' class="active" @click="fn(0)">首页</router-link></li>
        <li><router-link to='/amusement' @click="fn(1)">娱乐</router-link></li>
        <li><router-link to='/explore' @click="fn(2)">发现</router-link></li>
        <li><router-link to='/person' @click="fn(3)">我的</router-link></li>
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
        aa[i].style.backgroundImage = "url(./static/tabbar/"+ arr[i] + "_gray.png)"
      }
      aa[i].style.color = "rgb(252,153,0)";
      aa[i].style.backgroundImage = "url(./static/tabbar/" + arr[i] + "_light.png)"
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
    font-size:10px;
    z-index:99;
  }
  .footer ul {
    display:flex;
    height: 50px;
    padding-top: 7px;
  }
  .footer ul>li {
    flex: 1;
  }
  .footer ul a {
    display: inline-block;
    padding-top: 27px;
    /*
    bug: 1. 点击区域过小 2. 2次点击同一个标签会出现蓝色区域
     */
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
  .active {
    color: rgb(252,153,0);
  }
</style>