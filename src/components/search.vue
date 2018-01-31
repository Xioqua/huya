<template>
	<div class="search">
		<input type="text" placeholder="搜索明星大神/热门游戏"/>
	</div>
</template>

<script>
export default {
  name: 'Search',
  data () {
      return {
      msg: 'Welcome to Your Vue.js App'
      }
  }
}
</script>

<style scoped>
	.search{
		width:100%;
		height:85px;
		padding:0 30px;
		border-radius: 35px;
	}
</style>