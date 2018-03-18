<template>
<div class="mine">
    <div class="header">
      <img src="@/assets/icon/mine/a5k.png">
      <span>我的</span>
      <img src="@/assets/icon/mine/a5t.png">
    </div>
   <Delimiter></Delimiter>
   <div class="login">
     <div class="login_l">
      <img src="@/assets/icon/mine/aki.png">
      <div class="login_r">
        <p>登录领福利, 订阅主播, 开播当万人迷</p>
        <a>立即登录</a>
      </div>
     </div>
     <img src="@/assets/icon/data/arrow_r.png">
   </div>
   <Delimiter></Delimiter>
   <div class="login_f">
   <Datahead to="/mine" title="我的订阅" :icon="iconTitle.dingyue" breadTitle="登录后可查看 " :showRightBtn="true"/>
   <Datahead to="/mine" title="我的粉丝" :icon="iconTitle.fans" breadTitle="登录后可查看 " :showRightBtn="true"/>
   <Datahead to="/mine" title="我看过的" :icon="iconTitle.akw" breadTitle=" " :showRightBtn="true"/>
   </div>
   <Delimiter></Delimiter>
   <div class="mine_list">
     <div v-for="m in mine_list">
       <div><img :src="m.img"></div>
       <span>{{m.name}}</span>
     </div>
   </div>
  <Tabbar></Tabbar>
</div>
</template>

<script>
import Tabbar from '@/components/tabbar/tabbar'
import Datahead from '@/components/data/Datahead'
import Delimiter from '@/components/Delimiter'

export default {
  name: 'Person',
  components:{
    Tabbar,
    Delimiter,
    Datahead
  },
  data() {
    return {
       iconTitle:  {
                dingyue: require('@/assets/icon/mine/dingyue.png'),
                fans: require('@/assets/icon/mine/fans.png'),
                akw: require('@/assets/icon/mine/akw.png')
          },
          mine_list: [
            {name:'我要充值',img:'@/../static/mine/1.gif'},
            {name:'虎牙贵族',img:'@/../static/mine/2.gif'},
            {name:'粉丝徽章',img:'@/../static/mine/3.gif'},
            {name:'我的守护',img:'@/../static/mine/4.gif'},
            {name:'任务中心',img:'@/../static/mine/5.gif'},
            {name:'我要开播',img:'@/../static/mine/6.gif'},
            {name:'手游开播',img:'@/../static/mine/7.gif'},
            {name:'帮助与反馈',img:'@/../static/mine/8.gif'},
            {name:'免流量服务',img:'@/../static/mine/9.gif'},
            {name:'虎牙TV版',img:'@/../static/mine/11.gif'}
          ]
    }
  }
}
</script>

<style scoped>
.mine > .header{
  display: flex;
  width: 98%;
  margin: .5em auto -.5em;
  height: 2.2em;
  justify-content: space-between;
}
.header > img {
  width: 30px;
  height: 30px;
  vertical-align: middle;
}
.login {
  display: flex;
  width: 93.5%;
  margin: 0 auto;
  justify-content: space-between;
}
.login > img{
  display: block;
  width: 12px;
  height: 12px;
  margin-top: 1rem;
}
.login_l {
  display: flex;
}
.login_l > img {
  width: 50px;
  height: 50px;
}
.login_r {
  font: 12px "宋体";
  color: #888;
  text-align: left;
  padding: .4em .8em;
}
.login_r > a {
  display: inline-block;
  background-color: rgb(252,153,0);
  padding: .4em .8em;
  border-radius: 1em;
  margin-top: .5em;
  color: #fff;
}
.login_f {
  width: 95%;
  margin: .6em auto;
}

.mine_list {
  overflow: hidden;
  margin-top: -2em;
}

.mine_list > div {
  float: left;
  width:25%;
  text-align: center;
  margin-top: 2.4em;
}
.mine_list > div > div {
  display: flex;
  justify-content: center;
}
.mine_list img {
  display: block;
  height: 24px;
}
.mine span{
  display: block;
  margin-top: 1em;
  color: #666;
  font-size: 12px;
}
.header > span {
  font-weight: 400;
  font-size: 18px;
  line-height: 10px;
}

</style>
