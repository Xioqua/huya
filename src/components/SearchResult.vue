<template>
  <div class="SearchResult">
    <i class="iconfont icon-search"></i>
    <input type="text" :placeholder="msg" @input="showx" ref="input">
    <i class="iconfont icon-quxiao" v-show="isInput" @click="clearInput"></i>
    <span @click="returnPrev">取消</span>
  </div>
</template>

<script>
export default {
  name: 'SearchResult',
  data () {
    return {
      isInput: false,
      msg: '搜索明星大神/热门游戏'
    }
  },
  methods: {
    returnPrev() {
      this.$router.go(-1)
    },
    showx() {
     this.isInput = true
    },
    clearInput() {
     this.$refs.input.value = ''
     this.isInput = false
    }
  },
  mounted() {
    this.$refs.input.focus()
  } 
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.SearchResult {
  display: flex;
  width: 98%;
  margin: .1em auto;
  align-items: center;
}
.SearchResult > input {
  flex: 9;
  display: block;
  width: 90%;
  padding: .75em 0 .75em 1.8em;
  color: #666;
  background-color: #f4f4f4;
  text-decoration: none;
  border: 1px solid #fff;
  border-radius: 50px;
  outline: none;
  font-size: 12px;
}
.SearchResult > span {
  flex: 1;
  color:rgb(255, 173, 45);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
}
.icon-search {
  font-size:14px;
  position: absolute;
  margin-left: .3em;
}
.icon-quxiao {
  position: absolute;
  right: 10%;
  margin-right: 1em;
  font-size:14px;
  color: #aaa;
}
</style>
