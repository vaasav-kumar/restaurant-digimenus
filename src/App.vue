<template>
  <div id="app" :class="$mq">
    <router-view />

    <div :class="{'section': $route.name !== 'Home'}">
      <router-view name="section" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style lang="scss">
  body {
    margin: 0;
  }

  #app {
    font-family: 'Nunito', Arial, sans-serif;

    h5, h6, p {
      margin: 0;
    }
  }
</style>

<style scoped lang="scss">
  .section {
    height: calc(100vh - 60px);
    padding: 20px;
    overflow: auto;
  }
</style>
