<template>
  <div class="setting">
    <router-link to="/">回到首页</router-link>
       <grid
      :center="false"
      :draggable="true"
      :sortable="true"
      :items="colors"
      :height="80"
      :width="80"
      @change="change"
      @remove="remove"
      @sort="sort">
      <template slot="cell" slot-scope="props">
        <Icon :color="props.item"
              :index="props.index"
              :with-button="true"
              @remove="props.remove()"/>
      </template>
    </grid>
  </div>
</template>

<style>
.setting {
  padding: 1vmax;
}
.setting a {
  color:#888;
}
.setting a:hover {
  color: #000;
}
</style>

<script>
import Icon from '@/components/Icon'
import { generateRGBColors } from '@/utils.js'

export default {
  name:'Setting',
  components: {
    Icon
  },
   data () {
    let colors = generateRGBColors(20)
    return {
      colors,
      selected: null
    }
  },
  methods: {
    change (event) {
      // console.log('change', event)
    },
    remove (event) {
      // console.log('remove', event)
    },
    sort (event) {
      // console.log('sort', event)
    }
  }
}
</script>