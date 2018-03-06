<template>
    <div class="topnav">
      <ul>
        <li><router-link to="./"  class="zp_navTopWord">推荐</router-link></li>
        <li><router-link to="./" class="zp_navTopWord" >二次元</router-link></li>
        <li><router-link to="./" class="zp_navTopWord" >户外</router-link></li>
        <li><router-link to="./" class="zp_navTopWord" >星秀</router-link></li>
        <li><router-link to="./" class="zp_navTopWord" >LOL</router-link></li>
        <li><router-link to="./" class="zp_navTopWord" >吃喝玩乐</router-link></li>
      </ul>
    </div>
</template>

<script>
export default {
  name: 'Topnav2',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style scoped>
  /* 顶部导航这一块需要适配,以调整关键词间距 */
  .topnav {
    height:34px;
    text-align:left;
  }
  .topnav ul {
    position:fixed;
    overflow: hidden;
    height:34px;
    line-height:34px;
    background-color:#fff;
    width: 100%;
    z-index: 2;
  }
  .topnav ul li {
    display: inline-block;
    margin:0 10px; /* 1 */
    font-size:16px; /* 1 */
  }

  .zp_navTopWord:hover{
    color:rgb(252,153,0)
  }
</style>
