<template>
  <div>
   <div class="datatab">
     <span v-for="(m,i) in tabs" @click="gotoTab(i)">
       {{m}}
     </span>
   </div>
   <DataList json="cjzc"></DataList>
   <DataList json="all"></DataList>
   <DataList json="qjcj"></DataList>
   <DataList json="all"></DataList>
   <DataList json="xingxiu"></DataList>
   <DataList json="all"></DataList>
  </div>
</template>

<script>
import DataList from '@/components/data/DataList'
export default {
  name: 'DataTab',
  components:{
    DataList
  },
  props:['tabs'],
  methods: {
    gotoTab(i) {
      var datatabitem = this.$el.querySelectorAll('.datatab > span')
      Array.from(datatabitem).forEach(function(e){
        e.style.color="#333"
        e.style.backgroundColor="#fff"
      })
      datatabitem[i].style.backgroundColor = '#df6e1d'
      datatabitem[i].style.color = '#fff'
      datatabitem[i].style. borderRadius = '.8em'

      /*在这改变后面datalist的 json路径 */
      
    }
  }
}
</script>

<style scoped>
  .datatab {
    display: flex;
    justify-content: flex-start;
    font: 400 .8em '微软雅黑';
    color: #333;
    margin: 1em auto;
    width: 98%;
  }
  .datatab > span {
    padding: .3em;
  }
  .datatab > span:first-child,.active {
    background-color: #df6e1d;
    color: #fff;
    border-radius: .8em;
    font-weight: 500;
  }
</style>
