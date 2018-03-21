<template>
  <div class="recom">
      <Searchbar></Searchbar>
      <Slide></Slide>
      <DataTab :tabs="tabs"></DataTab>
      <DataList json="all" :limit="26"></DataList>      
  </div>
</template>

<script>
import Slide from '@/components/Slide'
import Searchbar from '@/components/Searchbar'
import DataTab from '@/components/data/DataTab'
import DataList from '@/components/data/DataList'

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
                xingxiu: require('@/assets/icon/data/xingxiu.png')
            },
             tabs: [
                "全部","英雄","高端局","女神","正在Carry","神镜头"
            ]
        }
    },
    components:{
        DataTab,
        Slide,
        Searchbar,
        DataList
    }
}
</script>

<style>
</style>
