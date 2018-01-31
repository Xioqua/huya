<template>
  <div class="datamedialist">
    <ul>
      <li v-for="mes in mess">
        <img src="../../static/dataimg/img01.png">
        <div>
          <h6 v-text="mes.name"></h6>
          <div class="author">小站</div>
          <div class="tag">绝地求生</div>
        </div>
      </li>
    </ul> 
  </div>
</template>

<script>
var axios =require("../../static/js/axios.js")

export default {
  name: 'DataMedialist',
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

<style scoped>
  .datamedialist {
    width: 98%;
    margin:10px auto;
  }
  .datamedialist li {
    display: flex;
    margin: 10px 0;
  }
  .datamedialist img {
    width: 50%;
    height: 50%;
    flex:1;
  }
  .datamedialist li > div {
    flex: 1;
    text-align:left;
    padding-left:.5em;
  }
  .datamedialist li h6 {
    font: normal 1em "宋体";
  }
  .datamedialist .author,.datamedialist .tag {
    font: normal .6em "宋体";
    color: #666;
    padding: 10px 0;
  }
</style>
