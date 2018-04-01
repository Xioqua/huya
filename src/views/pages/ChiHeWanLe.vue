<template>
  <div class="recom">
      <Searchbar></Searchbar>
      <Slide></Slide>
     <DataTab :tabs="tabs"></DataTab>
       <DataList json="all" :limit="26"></DataList>
  </div>
</template>

<script>
import DataList from '@/components/data/DataList'
import Slide from '@/components/Slide'
import Searchbar from '@/components/search/Searchbar'
import DataTab from '@/components/data/DataTab'

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
                "全部","户外","美食","二次元","附近"
            ]
        }
    },
    components:{
        DataList,
        Slide,
        Searchbar,
        DataTab
    }
}
</script>

<style>
</style>
