<template>
  <div class="tabbar">
    <footer class="footer">
      <ul>
        <router-link to='/index' tag='li' class="active" @click="fn(0)">首页</router-link>
        <router-link to='/amusement' tag='li' class="" @click="fn(1)">娱乐</router-link>
        <router-link to='/explore' tag='li' class="" @click="fn(2)">发现</router-link>
        <router-link to='/person' tag='li' class="" @click="fn(3)">我的</router-link>
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
    fn(i) {
      var ali = document.querySelectorAll('li');
      var aa = document.querySelectorAll('a');
      for (let i = 0; i < ali.length; i++) {
        ali[i].style.borderBottom = 'none';
        aa[i].style.color = "rgba(0,0,0,.6)";
      }
      ali[i].style.borderBottom = '1px solid #31C27C';
      aa[i].style.color = "#31C27C";
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
  }
  .footer ul {
    display:flex;
  }
  .footer ul>li {
    flex: 1;
  }

  .active {
    color: #31c27c;
  }
</style>
