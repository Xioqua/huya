<template>
 <div class="liveroom">
   <Back/>
    <d-player ref="player" @play="play" :video="video" :contextmenu="contextmenu"></d-player>
    <div class="liveinfo">
      <div class="liveinfohead">
      <router-link to="./chat">聊天</router-link>
      <router-link to="./zhubo">主播</router-link>
      <router-link to="./paihang">排行</router-link>
      <router-link to="./guibin">贵宾</router-link>
      </div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Back from '@/components/Back'
import VueDPlayer from '@/components/VueDPlayerHls'

export default {
  name: 'LiveRoom',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      video: {
          url: 'https://logos-channel.scaleengine.net/logos-channel/live/biblescreen-ad-free/chunklist_w630020335.m3u8',
          pic: 'static/live/cover1.jpg',
          type: 'hls'
        },
        autoplay: false,
        player: null,
        contextmenu: [
            {
                text: 'GitHub',
                link: 'https://github.com/MoePlayer/vue-dplayer'
            }
        ]
    }
  },
  components: {
    'd-player': VueDPlayer,
    Back
  },
  methods: {
    play() {
        // console.log('play callback')
      }
  },
  mounted() {
    this.player = this.$refs.player.dp;
   
    // console.log(this.player);
    var hls = new Hls();
    hls.loadSource('https://logos-channel.scaleengine.net/logos-channel/live/biblescreen-ad-free/chunklist_w630020335.m3u8');
    hls.attachMedia(this.player);
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.liveinfohead {
  display: flex;
}
.liveinfohead > * {
  flex:1;
  border-bottom: 1px solid #ccc;
  padding: 10px;
}
</style>
