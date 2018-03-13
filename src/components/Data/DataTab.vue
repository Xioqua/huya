<template>
  <div>
   <div class="datatab">
     <span v-for="m in tabs" @click="gotoTab">
       {{m}}
     </span>
   </div>
   <DataList json="all"></DataList>
   <DataList json="cjzc"></DataList>
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
    gotoTab() {
      
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
