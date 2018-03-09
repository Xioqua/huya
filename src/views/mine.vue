<template>
<div>
  <div class="person">
    <!-- 头部 -->
    <div class="zp_header">
      <ul class="zp_head">
        <li><a class="zp_head_L" href="#"><img src="../assets/img/person/01.gif"></a></li>
        <li><h3>我的</h3></li>
        <li><a class="zp_head_R" href="#"><img src="../assets/img/person/02.gif"></a></li>
      </ul>
    </div>
    <!-- 登录 -->
    <a class="zp_loginer">
      <ul class="zp_login">
        <li>登录领福利，订阅主播，开播当万人迷</li>
        <li class="zp_login_second" >立即登录</li>
        <li id="zp_login_span" >></li>
      </ul>
    </a>
    <!-- 列表 -->
    <ul class="zp_list">
      <li><a class="zp_list_a zp_list_a1" href="#">我的订阅<span class="zp_login_span">></span></a></li>
      <li><a class="zp_list_a zp_list_a2" href="#">我的粉丝<span class="zp_login_span">></span></a></li>
      <li><a class="zp_list_a zp_list_a3" href="#">我看过的<span class="zp_login_span">></span></a></li>
    </ul>
    <!-- 带图标的小模块 -->
    <ul class="zp_module" >
      <li><a href="#"><img src="../assets/img/person/1.gif" width="40" height="40"><br><br><span>我要充值</span></a></li>
      <li><a href="#"><img src="../assets/img/person/2.gif" width="40" height="40"><br><br><span>虎牙贵族</span></a></li>
      <li><a href="#"><img src="../assets/img/person/3.gif" width="40" height="40"><br><br><span>粉丝徽章</span></a></li>
      <li><a href="#"><img src="../assets/img/person/4.gif" width="40" height="40"><br><br><span>我的守护</span></a></li>
      <li><a href="#"><img src="../assets/img/person/5.gif" width="40" height="40"><br><br><span>任务中心</span></a></li>
      <li><a href="#"><img src="../assets/img/person/6.gif" width="40" height="40"><br><br><span>我要开播</span></a></li>
      <li><a href="#"><img src="../assets/img/person/7.gif" width="40" height="40"><br><br><span>手游开播</span></a></li>
    </ul>
  </div>
  <tabbar></tabbar>
  </div>
</template>

<script>
import Tabbar from '@/components/tabbar/tabbar'

export default {
  name: 'Person',
  components:{
    Tabbar
  }
}
</script>

<style scoped>
/* 头部 */
.zp_header{
  border-bottom: 10px solid #f5f5f4;
}
.zp_head{
  box-sizing: border-box;
  font: 20px/30px "MicrosoftYaHei";
  color:black;
  display: flex;
  justify-content:space-between;
}
.zp_head_L{
  padding-left:15px;
}
.zp_head_R{
  padding-right:15px;
}
/* 登录 */
.zp_login{
  position: relative;
  background: url("../assets/img/person/03.gif") no-repeat 10px 20px;
  background-size: contain; /* 这块结构有问题 */
  padding:20px 0  20px 80px;
  border-bottom:  10px solid #f5f5f4;
}
.zp_login>li{
  font:14px/30px "MicrosoftYaHei";
  text-align: left;
}
.zp_login_second{
  width: 100px;
  height: 30px;
  background: #ffa200;
  color:#fff;
  border-radius: 15px;
  padding-left:20px;
}
#zp_login_span{
  position: absolute;
  right:20px;
  top:35px;
  font-size: 25px;
  font-weight: bold;
  color: #ccc;
}
.zp_login_span{
  font-size: 25px;
  font-weight: bold;
  color: #ccc;
  float: right;
  padding-right: 20px;
}
/* 列表 */
.zp_list{
  text-align: left;
    border-bottom:  10px solid #f5f5f4;
}
.zp_list_a{
  color: #000;
  font: 20px/40px "MicrosoftYaHei";
  padding:30px 0 30px 40px;
}
.zp_list_a1{
  background: url("../assets/img/person/05.gif") no-repeat 10px 30px;
  background-size: 25px 25px;
}
.zp_list_a2{
  background: url("../assets/img/person/06.gif") no-repeat 10px 30px;
  background-size: 25px 25px;
}
.zp_list_a3{
  background: url("../assets/img/person/07.gif") no-repeat 10px 30px;
  background-size: 25px 25px;
}
/* 带图标的小模块 */
.zp_module>li{
  box-sizing: border-box;
  float:left;
  width:25%;
  padding:20px 0;
}
.zp_module>li>a{
  color:#000;
}

.zp_head a {
  display: inline-block;
}
.zp_head img {
  height:100%;
}
.zp_head h3,.zp_head a {
  height: 30px;
  font-weight: normal;
}


</style>
