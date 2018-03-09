<template>
    <div class="m-tabbar">
       <slot></slot>
    </div>
</template>

<style scoped>
.m-tabbar {
  display: flex;
  flex-direction: row;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 9;
  width: 100%;
  overflow: hidden;
  background-color: #fff;
  border-top: 1px solid #e4e4e4;
  height: 56px;
  cursor: pointer;
}
</style>

<script>
export default {
  computed: {
    value() {
      return this.$route.matched[0].name
    }
  }
}
</script>