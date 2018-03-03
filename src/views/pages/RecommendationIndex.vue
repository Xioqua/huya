<template>
  <div class="recom" >
      <Datahead title="全部直播" icon="iconfont icon-hot"/>
      <DataList></DataList>
      <Delimiter />
      <Datahead title="绝地求生" icon="iconfont icon-diamond"/>
      <DataList></DataList>
      <Delimiter/>
      <Datahead title="吃鸡手游" icon="iconfont icon-service"/>
      <DataList></DataList>
  </div>
</template>

<script>
import Datahead from '@/components/Datahead'
import DataList from '@/components/DataList'
import Delimiter from '@/components/Delimiter'

export default {
    name:"RecommendationIndex",
    data () {
        return {
            mess:'首页推荐页'
        }
    },
    components:{
        Datahead,
        DataList,
        Delimiter
    }
}
</script>

<style>
</style>
