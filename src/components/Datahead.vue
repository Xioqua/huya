<template>
  <div class="datahead">
    <div class="title">
      <h3><i :class="icon"></i> {{title}}</h3>
    </div>
    <div class="breadcrumbNav">
      <a href="#">网游</a> |
      <a href="#">单机</a> |
      <a href="#">娱乐</a> |
      <a href="#">手游</a> &gt;
    </div>
  </div>
</template>

<script>
import iconfont from '../../static/iconfont/iconfont.css'

  export default{
    name: 'Datahead',
    data() {
      return {
        mes: '数据表头需要替换,右箭头需要放大'
      }
    },
    props: ['title','icon']
  }
</script>

<style scoped="scoped">
.datahead {
  height: 43px;
  width: 98%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.datahead > .title {
  font-size: 16px;
}
.datahead > .title > h3 {
  margin: 0;
  font-weight: normal;
}

.datahead > .breadcrumbNav {
  font-size: 12px;
  color: #888;
}
.datahead > .breadcrumbNav a {
  color: #888;
}
.iconfont {
  font-size: 24px;
}
.icon-hot {
  color: red;
}
.icon-diamond {
  color: aqua;
}
.icon-service {
  color:brown;
}
</style>