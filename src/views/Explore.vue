<template>
  <div class="explore">
    发现
    <ExploreActive></ExploreActive>
    <Delimiter></Delimiter>
    <Datahead></Datahead>
    <Datalist></Datalist>
    <Delimiter></Delimiter>
    <Datahead></Datahead>
    <DataMedialist></DataMedialist>
    <Tabbar/>
  </div>
</template>

<script>
import ExploreActive from '../components/ExploreActive'
import Delimiter from '../components/Delimiter'
import Datahead from '../components/Datahead'
import Datalist from '../components/DataList'
import DataMedialist from '../components/DataMedialist'
import Tabbar from '../components/Tabbar'

export default {
  name: 'Explore',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components: {
    ExploreActive,
    Delimiter,
    Datahead,
    Datalist,
    DataMedialist,
    Tabbar
  }
}
</script>

<style scoped>

</style>
