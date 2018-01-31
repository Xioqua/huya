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
  </div>
</template>

<script>
import ExploreActive from './ExploreActive'
import Delimiter from './Delimiter'
import Datahead from './Datahead'
import Datalist from './Datalist'
import DataMedialist from './DataMedialist'

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
    DataMedialist
  }
}
</script>

<style scoped>
  
</style>
