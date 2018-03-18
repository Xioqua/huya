<template>
   <div class="setting-btn icon-in">
    <router-link to="/setting"><i class="iconfont icon-list"></i></router-link>
  </div>
</template>

<script>
import '../../static/iconfont/iconfont.css'

export default {
  name: 'SettingBtn'
}
</script>

<style scoped>
.iconfont {
  display: inline-block;
  font-size: 1.5rem;
  height: 1rem;
}

.setting-btn {
  position: fixed;
  right: 0;
  top: 0;
  z-index: 99;
  background-color: #fff;
}
.icon-in {
  border-radius: .3em 0 0 .3em;
  box-shadow: -5px 0 5px #c8c8c8;
}
</style>
