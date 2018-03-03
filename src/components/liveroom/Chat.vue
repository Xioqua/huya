<template>
  <div class="live-chat">
    <div class="content" v-html="msg">
    </div>
    <div class="btn-wrap">
      <input type="text" placeholder="说点什么呢"  @keyup.enter="submit" ref="input">
    </div>
  </div>
</template>

<script>
export default {
  name: 'Chat',
  data() {
    return {
      msg: '這裏有一些原始數據<br>這裏有一些原始數據<br>這裏有一些原始數據<br>這裏有一些原始數據<br>這裏有一些原始數據<br>'
    }
  },
  methods: {
    submit() {
      this.msg += this.$refs.input.value + '<br>'
      this.$refs.input.value = ''

    }
  }
}
</script>

<style scoped>
input{padding:0;margin:0;border:none;background:none;outline:none;}

.live-chat {
  text-align: left;
}
.content {
  padding: 10px 10px;
}

.btn-wrap {
  position: fixed;
  bottom: 0;
  padding: 10px 10px;
  width: 100%;
  border-top: 1px solid #ccc;
}
.btn-wrap > input {
  width: 100%;
  padding: 10px 20px;
  font-size: 20px;
  border-radius: 50px;
  background-color: #f4f4f4;
}
</style>

