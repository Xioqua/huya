<template>
  <div class="searchbar">
    <router-link to="/search"><i class="iconfont icon-search"></i> {{msg}}</router-link>
  </div>
</template>

<script>
import iconfont from '@/../static/iconfont/iconfont.css'

export default {
  name: 'Searchbar',
  data () {
    return {
      msg: '搜索明星大神/热门游戏'
    }
  }
}
</script>

<style scoped>
.searchbar > a {
  display: block;
  width: 98%;
  margin: .5em auto;
  padding: .75em 0;
  color: #666;
  background-color:#f4f4f4;
  text-decoration: none;
  border: 1px solid #fff;
  border-radius: 50px;
  text-align: center;
  font-size: 12px;
}
.icon-search {
  font-size:14px;
}
</style>
