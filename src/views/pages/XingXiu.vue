<template>
  <div class="recom">
      <Searchbar></Searchbar>
      <Slide></Slide>
      <DataTab :tabs="tabs"></DataTab>   
      <DataList json="all" :limit="30"></DataList>      
  </div>
</template>

<script>
import DataList from '@/components/data/DataList'
import DataTab from '@/components/data/DataTab'
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
                xingxiu: require('@/assets/icon/data/xingxiu.png')
            },
             tabs: [
                "全部","好声音","潮音乐","段子手","舞蹈","新秀"
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
