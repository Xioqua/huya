<template>
   <div class="setting-btn icon-in">
    <a href="javascript:;" @click="goSet"><i class="iconfont icon-list"></i></a>
  </div>
</template>

<script>
import '@/../static/iconfont/iconfont.css'

export default {
  name: 'SettingBtn',
  methods: {
    goSet() {
     this.$router.push({ path: 'setting' })
    }
  }
}
</script>

<style scoped>
.iconfont {
  display: inline-block;
  font-size: 1.2rem;
  padding: .5rem;
}

.setting-btn {
  position: fixed;
  right: 0;
  top: 0;
  z-index: 99;
  background-color: #fff;
}
.setting-btn a {
  display: block;
}
.icon-in {
  border-radius: .1em 0 0 .1em;
  box-shadow: -5px 0 5px #c8c8c8;
}
</style>
