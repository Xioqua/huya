<template>
  <div class="explore">
    <div class="header">发现</div>
    <v-bar class="body" wrapper="wrapper" vBar="verticalBarClass"  vBarInternal="verticalBarInternalClass">
    <ExploreActive></ExploreActive>
    <Delimiter></Delimiter>
    <Datahead to="/mine" title="神镜头" :icon="iconTitle.yxlm" breadTitle="王者荣耀、搞笑、更多精彩" :showRightBtn="true"/>
    <DataList json="chwl" :limit="2"></DataList>
    <Delimiter></Delimiter>
    <Datahead to="/mine" title="兴趣推荐" :icon="iconTitle.zjyx" breadTitle="" :showRightBtn="false"/>
    <DataMedialist json="all" :limit="10"></DataMedialist>
    </v-bar>
    <tabbar></tabbar>
  </div>
</template>

<script>
import ExploreActive from '../components/ExploreActive'
import Delimiter from '../components/Delimiter'
import Datahead from '@/components/data/Datahead'
import DataList from '@/components/data/DataList'
import DataMedialist from '@/components/data/DataMedialist'
import Tabbar from '@/components/tabbar/tabbar'

import VBar from 'v-bar'

export default {
  name: 'Explore',
  components: {
    ExploreActive,
    Delimiter,
    Datahead,
    DataList,
    DataMedialist,
    Tabbar,
    VBar
  },
  data() {
      return {
          iconTitle:  {
              wzry: require('@/assets/icon/data/wzry.png'),
              phone: require('@/assets/icon/data/phone.png'),
              meiyan: require('@/assets/icon/data/meiyan.png'),
              lrs: require('@/assets/icon/data/lrs.png'),
              yxlm: require('@/assets/icon/data/yxlm.png'),
              zjyx: require('@/assets/icon/data/zjyx.png')
          },
          bannerImgs: [
              '//livewebbs2.msstatic.com/home_recommend_live_app_1518253430.jpg?ips_thumbnail/0/w/700/',
              '//livewebbs2.msstatic.com/home_recommend_live_app_1490355094.jpg?ips_thumbnail/0/w/700/',
              '//livewebbs2.msstatic.com/home_recommend_live_app_1514204772.jpg?ips_thumbnail/0/w/700/'
          ]
      }
  },
}
</script>

<style scoped>
.explore .header {
  position: fixed;
  top:0;
  width: 100%;
  height: 2.2em;
  line-height: 2.2em;
  text-align: center;
  background-color: #fff;
  z-index: 2;
}
.explore .body {
  margin-top: 2.2em;
  padding-bottom: 3.5rem;
}

.wrapper {
  height: 650px;
}
</style>
