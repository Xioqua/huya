<template>
  <div class="recom">
      <Searchbar></Searchbar>
      <Slide></Slide>
      <Datahead to="/mine" title="全部直播" :icon="iconTitle.hot" breadTitle=" 网游 | 单机 | 娱乐 | 手游 " :showRightBtn="true"/>
      <DataList json="all" :limit="6"></DataList>
      <Delimiter />
      <Datahead to="/mine" title="绝地求生" :icon="iconTitle.jdqs" breadTitle="大神 | 女神 | 决赛圈 | 更多 " :showRightBtn="true"/>
      <DataList json="jdqs" :limit="4"></DataList>
      <Delimiter/>
      <Datahead to="/mine" title="刺激战场" :icon="iconTitle.cjzc" breadTitle="萌妹 | 车神 | 更多 " :showRightBtn="true"/>
      <DataList json="cjzc" :limit="4"></DataList>
      <Delimiter/>
      <Datahead to="/mine" title="全军出击" :icon="iconTitle.qjcj" breadTitle="鸡霸 | 车神 | 更多 " :showRightBtn="true"/>
      <DataList json="qjcj" :limit="4"></DataList>
      <Delimiter/>
      <Datahead to="/mine" title="吃喝玩乐" :icon="iconTitle.chwl" breadTitle="二次元 | 美食 | 户外 | 更多 " :showRightBtn="true"/>
      <DataList json="chwl" :limit="4"></DataList>
      <Delimiter/>
      <Datahead to="/mine" title="星秀" :icon="iconTitle.xingxiu" breadTitle="好声音 | 潮音乐 | 更多 " :showRightBtn="true"/>
      <DataList json="xingxiu" :limit="4"></DataList>
      <Delimiter />
      <Datahead to="/mine" title="绝地求生" :icon="iconTitle.jdqs" breadTitle="大神 | 女神 | 决赛圈 | 更多 " :showRightBtn="true"/>
      <DataList json="jdqs" :limit="4"></DataList>
      <Delimiter/>
      <Datahead to="/mine" title="刺激战场" :icon="iconTitle.cjzc" breadTitle="萌妹 | 车神 | 更多 " :showRightBtn="true"/>
      <DataList json="cjzc" :limit="4"></DataList>
      <Delimiter/>
      <Datahead to="/mine" title="全军出击" :icon="iconTitle.qjcj" breadTitle="鸡霸 | 车神 | 更多 " :showRightBtn="true"/>
      <DataList json="qjcj" :limit="4"></DataList>
      <Delimiter/>
      <Datahead to="/mine" title="吃喝玩乐" :icon="iconTitle.chwl" breadTitle="二次元 | 美食 | 户外 | 更多 " :showRightBtn="true"/>
      <DataList json="chwl" :limit="4"></DataList>
      <Delimiter/>
      <Datahead to="/mine" title="星秀" :icon="iconTitle.xingxiu" breadTitle="好声音 | 潮音乐 | 更多 " :showRightBtn="true"/>
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
                hot: require('@/assets/icon/data/hot.png'),
                jdqs: require('@/assets/icon/data/jdqs.png'),
                cjzc: require('@/assets/icon/data/cjzc.png'),
                qjcj: require('@/assets/icon/data/qjcj.png'),
                chwl: require('@/assets/icon/data/chwl.png'),
                xingxiu: require('@/assets/icon/data/xingxiu.png'),
                yxlm: require('@/assets/icon/data/yxlm.png'),
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
