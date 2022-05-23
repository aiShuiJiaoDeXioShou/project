<!--  -->
<template>
  <div class="my-video-div">
    <vue-aliplayer-v2
      v-if="false"
      class=".my-video"
      :source="source"
      ref="VueAliplayerV2"
      :options="options"
      :rePlay="true"
    />
    <div class="cartmenu">
     <CardMenu></CardMenu>
    </div>
  </div>
</template>

<script>
import VueAliplayerV2 from "vue-aliplayer-v2";
import CardMenu from "./CardMenu.vue";
export default {
  data() {
    return {
      options: {
        isLive: true, //切换为直播流的时候必填
        // format: 'm3u8'  //切换为直播流的时候必填
      },
      source: "http://localhost:8080/hutao2.mp4",
      squareUrl: require("../../assets/icon.png"),
      size: 100,
      userName: "桂钢的个人博客",
      isExistence: false,
    };
  },
  components: {
    VueAliplayerV2,
    CardMenu
  },
};
</script>

<style lang='css' scoped>
.hutao {
  width: 100%;
  height: 100%;
}
.my-video-div {
  position: relative;
  width: 710px;
  height: 300px;
  margin-left: 5px;
}
.my-video {
  border-radius: 5px;
  border: 1px #ffff solid;
}
.cartmenu{
  position: absolute;
  top: 457px;
  right: 487px;
  bottom: 0;
  margin: auto;
  width: 200px;
  height: 250px;
  text-align: center;
  z-index: 2;
}
@keyframes turnX {
  0% {
    transform: rotateY(0deg);
  }

  100% {
    transform: rotateY(180deg) translate(0px, -10px);
  }
}
</style>
