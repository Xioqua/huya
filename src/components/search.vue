<template>
	<div class="search">
		<input type="text" placeholder="搜索明星大神/热门游戏" class="search_i" />
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
		padding:0 15px;
		margin:16px;
	}
	.search_i{
		width:100%;
		height:43px;
		border-radius: 35px;
		text-align: center;
		background:#f3f3f3;
		border:none;
	}

</style>