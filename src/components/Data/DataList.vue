<template>
  <ul class="clearfix datalist">
    <li v-for="(mes,index) in mess" v-if="index < limit">
      <router-link to="/zhubo"><img  class="item-pic" v-lazy="mes.videoCover" alt="mes.name" /></router-link>
      <p v-text="mes.name"></p>
    </li>
  </ul>
</template>

<script>
import axios from "../../../static/js/axios.js"

export default {
  name:'Datalist',
  data () {
    return {
      mess:[
      {
      "name":"加载中...",
      "videoCover":"static/dataimg/cover.jpg"
    },
    {
      "name":"加载中...",
      "videoCover":"static/dataimg/cover.jpg"
    },
    {
      "name":"加载中...",
      "videoCover":"static/dataimg/cover.jpg"
    },
    {
      "name":"加载中...",
      "videoCover":"static/dataimg/cover.jpg"
    }
      ]
    }
  },
  props: {
    'json':{
      type:String
    },
    'limit': {
      type:Number,
      default:4
    }
  },
  created() {
    axios.get('./static/json/'+ this.json +'.json')
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
  text-align: left;
  font-size: .875rem;
  margin: .1em 0;
  overflow: hidden;
text-overflow:ellipsis;
white-space: nowrap;
}
</style>