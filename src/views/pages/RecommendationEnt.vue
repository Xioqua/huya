<template>
  <div class="recom">
      <Searchbar></Searchbar>
      <Slide></Slide>
      <Datahead to="/mine" title="娱乐天地" :icon="iconTitle.wzry" breadTitle=" 网游 | 单机 | 娱乐 | 手游 " :showRightBtn="true"/>
      <DataList json="all" :limit="8"></DataList>
      <Delimiter />
      <Datahead to="/mine" title="二次元" :icon="iconTitle.phone" breadTitle="大神 | 女神 | 决赛圈 | 更多 " :showRightBtn="true"/>
      <DataList json="jdqs" :limit="4"></DataList>
      <Delimiter/>
      <Datahead to="/mine" title="颜值" :icon="iconTitle.meiyan" breadTitle="萌妹 | 车神 | 更多 " :showRightBtn="true"/>
      <DataList json="xingxiu" :limit="4"></DataList>
      <Delimiter/>
      <Datahead to="/mine" title="户外" :icon="iconTitle.lrs" breadTitle="鸡霸 | 车神 | 更多 " :showRightBtn="true"/>
      <DataList json="qjcj" :limit="4"></DataList>
      <Delimiter/>
      <Datahead to="/mine" title="美食" :icon="iconTitle.yxlm" breadTitle="二次元 | 美食 | 户外 | 更多 " :showRightBtn="true"/>
      <DataList json="chwl" :limit="4"></DataList>
      <Delimiter/>
      <Datahead to="/mine" title="奇谈" :icon="iconTitle.zjyx" breadTitle="更多 " :showRightBtn="true"/>
      <DataList json="xingxiu" :limit="4"></DataList>
  </div>
</template>

<script>
import Datahead from '@/components/data/Datahead'
import DataList from '@/components/data/DataList'
import Delimiter from '@/components/Delimiter'
import Slide from '@/components/Slide'
import Searchbar from '@/components/Searchbar'

export default {
    name:"RecommendationIndex",
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
    components:{
        Datahead,
        DataList,
        Delimiter,
        Slide,
        Searchbar
    }
}
</script>

<style>
</style>
