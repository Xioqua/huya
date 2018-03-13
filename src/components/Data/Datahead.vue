<template>
  <router-link :to="to" class="datahead">
    <div class="title">
      <img :src="icon" >
      <h3>{{title}}</h3>
    </div>
    <div class="breadcrumbNav">
    {{breadTitle}}
     <img src="@/assets/icon/data/arrow_r.png" v-if="showRightBtn" />
    </div>
  </router-link>
</template>

<script>
import Router from 'vue-router'

  export default{
    name: 'Datahead',
    props: ['to','title','icon','breadTitle','showRightBtn']
  }
</script>

<style scoped="scoped">
  .datahead {
    width: 98%;
    margin: .4em auto;
    display: flex;
    justify-content: space-between;
  }
  .title {
    display: flex;
    justify-content: flex-start;
  }
  .title > h3 {
    font-size: .8em;
    font-weight: 500;
    margin: 0;
    padding-left: .2em;
  }
  .breadcrumbNav {
    color: #bbb;
    font-size: .6em;
  }
  .title > img,.breadcrumbNav > img {
    height: 1em;
    vertical-align: middle;
  }
</style>