<template>
    <a class="m-tabbar-item" :class="{'is-active':isActive}" @click="goToRouter">
        <span class="m-tabbar-item-icon"  v-show="!isActive"><slot name="icon-normal"></slot></span>
        <span class="m-tabbar-item-icon  animated bounceIn"  v-show="isActive"><slot name="icon-active"></slot></span>
        <span class="m-tabbar-item-text"><slot></slot></span>
    </a>
</template>

<style scoped>
.m-tabbar-item {
  flex: 1;
  text-align: center;
}
.m-tabbar-item .m-tabbar-item-icon {
  display: block;
  padding-top: 2px;
}
.m-tabbar-item .m-tabbar-item-icon img {
  width: 28px;
  height: 28px;
}
.m-tabbar-item .m-tabbar-item-text {
  display: block;
  font-size: 12px;
  color: #949494;
}
.m-tabbar-item.is-active .m-tabbar-item-text {
  color:rgb(252,153,0);
}
</style>

<script>
import 'animate.css'

export default {
    props: {
        id:{
            type:String
        },
        isRouter:{
            type:Boolean,
            default:false
        }
    },
    computed: {
        isActive(){
            if(this.$parent.value===this.id){
                return true
            }
        }
    },
    methods:{
        goToRouter(){
            this.$parent.$emit('input',this.id)
            if(this.isRouter){
              this.$router.push(this.id)
            }
        }
    }
}
</script>