<template>
  <div class="about">
     <aplayer
      autoplay
      :music="{
        title: 'secret base~君がくれたもの~',
        artist: 'Silent Siren',
        src: 'http://172.25.204.192:8080/music/Owane羽沙 - 绘梨衣.mp3',
        pic: 'https://moeplayer.b0.upaiyun.com/aplayer/secretbase.jpg',
      }"
    />
  </div>
</template>

<script>
import aplayer from 'vue-aplayer'
export default {
  components: {
    aplayer
  },
}
</script>
