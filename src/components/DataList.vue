<template>
  <ul class="clearfix datalist">
    <li v-for="mes in mess">
      <router-link to="/liveRoom"><img :src="mes.imgUrl" alt="mes.name" /></router-link>
      <p v-text="mes.name"></p>
    </li>
  </ul>
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
    axios.get('./static/json/all.json')
         .then(res=>this.mess=res.data)
         .catch(() => console.log("抓取失败"))
  }
}
</script>

<style scoped="scoped">
.datalist {
  width: 98%;
  margin: 0 auto;
}
.datalist > li {
  width: 49%;
  display: inline-block;
  margin-right: 1%;
}
.datalist img {
  display: block;
  width: 100%;
}
.datalist p {
  font-size: 16px;
  overflow: hidden;
text-overflow:ellipsis;
white-space: nowrap;
}
</style>