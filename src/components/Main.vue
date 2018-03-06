<template>
  <div>
    <v-nav></v-nav>
    <Searchbar></Searchbar>
    <Slide></Slide>
    <v-swiper></v-swiper>
  </div>
</template>

<style>
</style>

<script>
import nav from '@/components/nav'
import swiper from '@/components/swiper'
import Searchbar from '@/components/Searchbar'
import Slide from '@/components/Slide'

export default {
  name: 'Main',
  components: {
    'v-nav': nav,
    'v-swiper': swiper,
    Searchbar,
    Slide
  }
}
</script>