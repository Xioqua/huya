<template>
  <div>
  <div class="SearchResult">
    <i class="iconfont icon-search"></i>
    <input type="text" :placeholder="msg" @input="showx" ref="input" @keyup.enter="setTag">
    <i class="iconfont icon-quxiao" v-show="isInput" @click="clearInput"></i>
    <span @click="returnPrev">取消</span>
  </div>
  <div class="result">
    <h3 class="taghead">历史记录</h3>
    <div class="tags">
      <span>韦神</span>
      <span>丹丹</span>
      <span>解锁战场</span>
      <span v-text="tag" v-if="hastag"></span>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'SearchResult',
  data () {
    return {
      isInput: false,
      msg: '搜索明星大神/热门游戏',
      tag:'',
      hastag: false
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
    },
    setTag() {
      if(this.$refs.input.value !== ''){
        var clone = document.querySelector('.SearchResult ~ .result .tags > span')
        var cloneMother = document.querySelector('.SearchResult ~ .result .tags')
        var clonezadi = clone.cloneNode(true)
        clonezadi.innerHTML = this.$refs.input.value
        cloneMother.appendChild(clonezadi)
        this.$refs.input.value = ''
      }
    }
  },
  mounted() {
    this.$refs.input.focus()
  }
}
</script>

<style scoped>
.SearchResult {
  display: flex;
  width: 98%;
  margin: .3em auto;
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
  font-size:12px;
  position: absolute;
  margin-left: .5em;
}
.icon-quxiao {
  position: absolute;
  right: 10%;
  margin-right: 1em;
  font-size:14px;
  color: #aaa;
}

.taghead {
  text-align: left;
  font: 500 14px "微软雅黑";
  margin: 1em 0 1em 1em;
  color: #ccc;
}
.tags {
  text-align: left;
  padding: .3em .6em;
}
.tags > span {
  font: 300 16px "宋体";
  color: #888;
  display: inline-block;
  padding: .3em;
  margin: .2em;
  background-color: #eee;
  border-radius: 5px;
}
</style>
