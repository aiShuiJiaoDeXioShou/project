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

    <div class="touxian">
      <el-dropdown>
        <el-avatar class="head-portrait" shape="circle" :size="size" :src="squareUrl"></el-avatar><br />
        <div style="color">桂钢的个人博客</div>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item :disabled="true" >登入</el-dropdown-item> 
          <el-dropdown-item v-if="isExistence">注册</el-dropdown-item>
          <el-dropdown-item divided>退出登陆</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>

<script>
import VueAliplayerV2 from "vue-aliplayer-v2";
export default {
  data() {
    return {
      options: {
        isLive: true, //切换为直播流的时候必填
        // format: 'm3u8'  //切换为直播流的时候必填
      },
      source: "http://localhost:8080/hutao2.mp4",
      squareUrl: require("../assets/icon.png"),
      size: 100,
      userName: "桂钢的个人博客",
      isExistence: false,
    };
  },
  components:{
      VueAliplayerV2,
  }
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
  margin-left:5px ;
}
.my-video{
  border-radius: 5px;
  border: 1px #ffff solid;
}
.touxian {
  position: absolute;
  top: 105px;
  /* top: -65px; */
  /* left: 0;
  right: 0;
  bottom: 0; */
  margin: auto;
  width: 200px;
  height: 250px;
  text-align: center;
  z-index: 2;
}
.touxian:hover .head-portrait{
  animation: turnX 1s infinite;
  animation-iteration-count:1;
  animation-fill-mode: forwards;
}
@keyframes turnX{

  0%{
    transform:rotateY(0deg);
  }

  100%{
    transform:rotateY(180deg) translate(0px, -10px);
  }

}
</style>
