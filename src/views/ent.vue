<template>
  <div class="amusement">
    <Topnav2/>
    <Searchbar/>
    <Slide/>
    <Datahead/>
    <Datalist></Datalist>
    <Delimiter/>
    <Datahead/>
    <Datalist></Datalist>
    <router-view/>
    <tabbar></tabbar>
  </div>
</template>

<script>
import Topnav2 from '../components/Topnav2'
import Searchbar from '../components/Searchbar'
import Slide from '../components/Slide'
import Datahead from '../components/Datahead'
import Datalist from '../components/DataList'
import Delimiter from '../components/Delimiter'
import Tabbar from '@/components/tabbar/tabbar'

export default {
  name: 'Amusement',
  components: {
    Topnav2,
    Searchbar,
    Slide,
    Datahead,
    Datalist,
    Delimiter,
    Tabbar
  }
}
</script>

<style scoped>

</style>
