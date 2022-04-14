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
@media (min-aspect-ratio:16/9) {
    .video-bg{
        height: auto;
        width: 100%;
    }
}
@media (max-aspect-ratio:16/9) {
    .video-bg{
        width: auto;
        height: 100%;
    }
}
/* 在手机上替换成图片 */
/* @media (max-width:767px){ */
  /* .video-bg{ */
        /* display: none; */
  /* } */
/* 这里写替换图片的代码 */
/* } */
</style>
