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
    name:"JueDiQiuSheng",
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
                "全部","冲分时刻","技术大神","女神","决赛圈","单排"
            ]
        }
    },
    components:{
        Slide,
        Searchbar,
        DataTab,    
        DataList
    }
}
</script>

<style>
</style>
