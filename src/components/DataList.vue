<template>
  <div class="datalist">
    <ul>
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
  name:'DataList',
  data () {
      return {
          mess:null,
          msq: "static/dataimg/img02.png"
      }
  },
  created() {
     axios.get('../static/json/all.json').then(res=>this.mess=res.data)
      .catch(() => console.log("抓取失败"))
  }
}
</script>

<style scoped="scoped">

  .datalist ul li{
   float:left;
   width:50%;
   
  }
  .datalist ul img {
    width:95%;
  }
</style>