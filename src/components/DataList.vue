<template>
  <div class="datalist">
    <ul class="clearfix">
      <li v-for="mes in mess">
        <img :src="mes.imgUrl" alt="" />
        <p v-text="mes.name"></p>
      </li>
    </ul>
  </div>
</template>

<script>
var axios =require("../../static/js/axios.js")

export default {
  name:'Datalist',
  data () {
      return {
          mess:null
      }
  },
  created() {
     axios.get('../static/json/all.json').then(res=>this.mess=res.data)
      .catch(() => console.log("抓取失败"))
  }
}
</script>

<style scoped="scoped">

  .datalist {
    
  }
  .datalist ul li{
   float:left;
   width:50%;
   margin-bottom: 20px;
   text-align:center;
  }
  .datalist ul img {
    width:95%;
  }
  .datalist {
    font: 16px/30px "微软雅黑";
    text-align: left;
  }
  .datalist p {
    height: 30px;
    text-align:left;
    text-indent:1em; /* 这一块结构有问题 */
  }
</style>