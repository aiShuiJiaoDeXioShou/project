<!-- 这个是视频背景 -->
<template>
  <div>
      <video class="video-bg" autoplay muted loop>
          <source src="http://localhost:8080/hutao2.mp4" type="video/mp4">
      </video>
  </div>
</template>

<script>
export default {
  data () {
    return {
    }
  }
}

</script>

<style lang='css' scoped>
.video-bg{
    position: fixed;
    z-index: -1;
    width: 100%;
    height: 100%;
}
</style>
