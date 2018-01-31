<template>
    <div class="topnav">
      <ul>
        <li><router-link to="./Recommendation"  class="zp_navTopWord">推荐</router-link></li>
        <li><router-link to="./King" class="zp_navTopWord" >王者荣耀</router-link></li>
        <li><router-link to="./Seeklive" class="zp_navTopWord" >绝地求生</router-link></li>
        <li><router-link to="./Lol" class="zp_navTopWord" >LOL</router-link></li>
        <li><router-link to="./Start" class="zp_navTopWord" >星秀</router-link></li>
        <li><router-link to="./Eat" class="zp_navTopWord" >吃喝玩乐</router-link></li>
      </ul>
      <div class="topbarbutton">
        <a href="#"></a>
      </div>
    </div>
</template>

<script>
export default {
  name: 'Topnav',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style scoped>
/* 顶部导航这一块需要适配,以调整关键词间距 */
.topnav ul {
  position:fixed;
  overflow: hidden;
  height:60px;
  line-height:60px;
}
.topnav ul li {
  display: inline-block;
  margin:0 10px; /* 1 */
  font-size:14px; /* 1 */
}

.topbarbutton a {
    position:fixed;
    top:0;
    right:-2px;  /* 因为图没截好,后期需要再调整 */
    background-color: #fff;
    z-index:2;
    width:60px;
    height:60px;
    background: url(../assets/img/icon/pic.png) no-repeat;
    background-size: contain;
    box-shadow: -2px 0 1px #c8c8c8;
    border-radius: 3px 0 0 3px;
}

.zp_navTopWord:hover{
  color:rgb(252,153,0)
}
</style>
