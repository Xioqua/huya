<template>
  <span class="back" @click="returnPrev">
    <i class="iconfont icon-back"></i>
  </span>
</template>

<script>
import iconfont from '../../static/iconfont/iconfont.css'

export default {
  name: 'Back',
  methods: {
    returnPrev() {
      // 路由到底跳转到哪由需求定,暂且让所有LiveRoom页面回到首页
      this.$router.push('/')
    }
  }
}
</script>

<style scoped>
.back {
  position: fixed;
  color: #fff;
  z-index: 999;
  left: 1%;
  top: 1%;
}
.icon-back {
  font-size: 30px;
}
</style>


