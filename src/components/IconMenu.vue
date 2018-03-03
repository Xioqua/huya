<template>
    <div class="topbarbutton">
      <a href="#"></a>
    </div>
</template>

<script>
export default {
  name: 'IconMenu',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style scoped>
.topbarbutton,.topbarbutton a{
    position:fixed;
    width: 34px;
    height: 34px;
    top:0;
    right:-2px;  /* 因为图没截好,后期需要再调整 */
    background-color: #fff;
    z-index:2;
    background: url(../assets/img/icon/pic.png) no-repeat;
    background-size: contain;
    box-shadow: -2px 0 1px #c8c8c8;
    border-radius: 3px 0 0 3px;
    z-index: 3;
}

</style>
