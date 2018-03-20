<template>
  <div class="datamedialist">
    <ul>
      <li v-for="(mes,index) in mess" v-if="index < limit">
        <img :src="mes.videoCover" alt="mes.name" />
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
import axios from "../../../static/js/axios.js"

export default {
  name: 'DataMedialist',
  data () {
    return {
     mess:null
    }
  },
  props: ['json','limit'],
  created() {
     axios.get('./static/json/all.json').then(res=>this.mess=res.data)
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
    width: 40%;
    height: 120px;
    flex:1;
  }
  .datamedialist li > div {
    flex: 1;
    text-align:left;
    padding:.8em 0 0 .8em;
  }
  .datamedialist li h6 {
    font: normal 1rem "宋体";
  }
  .datamedialist .author,.datamedialist .tag {
    font: normal .8rem "宋体";
    color: #ccc;
    padding: 10px 0;
  }
</style>
