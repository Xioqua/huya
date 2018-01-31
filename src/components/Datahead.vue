<template>
  <div class="datahead clearfix">
    <div class="title">
      <h3><i><img src="@/assets/img/icon/logo09.png" /></i> 全部直播</h3>
    </div>
    <div class="breadcrumbNav">
      <a href="#">网游</a> |
      <a href="#">单机</a> |
      <a href="#">娱乐</a> |
      <a href="#">手游</a> >
    </div>
  </div>
</template>

<script>
  export default{
    name: 'Datahead',
    data() {
      return {
        mes: 'dd'
      }
    }
  }
</script>

<style scoped="scoped">
  .datahead {
    width: 95%;
    margin:10px auto;
  }
  .title h3{
     float:left;
    
  }
  .title h3 i{
    width:32px;
    height:32px;
    display:inline-block;
    vertical-align: middle;
  }
  .title h3 img {
    width:100%;
    height:100%;
  }
  .breadcrumbNav{
    float:right;
  }
  .breadcrumbNav a,.title h3 {
     font: normal 16px/32px "宋体";
  }
</style>