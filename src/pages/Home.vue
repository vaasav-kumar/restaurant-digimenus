<template>
  <div class="outline">
    <div class="streamer">
      <svg viewBox="0 0 100 100" width="340px">
        <path d="M25,2 L2,2 L2,25" fill="none" class="pri-color" stroke-width="3" />
        <path d="M2,75 L2,98 L25,98" fill="none" class="sec-color" stroke-width="3" />
        <path d="M75,98 L98,98 L98,75" fill="none" class="pri-color" stroke-width="3" />
        <path d="M98,25 L98,2 L75,2" fill="none" class="sec-color" stroke-width="3" />
      </svg>
      <qrcode-stream @decode="onDecode" class="scanner" />
    </div>
  </div>
</template>

<script>
import { QrcodeStream } from 'vue-qrcode-reader'

export default {
  name: 'Home',
  components: { QrcodeStream },
  methods: {
    onDecode (url) {
      const params = url.slice(url.indexOf('?'))
      this.$router.push({name: 'Menus', params: {id: new URLSearchParams(params).get('q')}})
    }
  }
}
</script>

<style scoped lang="scss">
  @import '../assets/scss/themes.scss';

  .outline {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
  }
  .streamer {
    position: relative;

    .pri-color {
      stroke: $primary;
    }
    .sec-color {
      stroke: $secondary;
    }

    .scanner {
      height: 300px;
      width: 300px;
      position: absolute;
      top: 20px;
      left: 20px;
    }
  }
</style>
