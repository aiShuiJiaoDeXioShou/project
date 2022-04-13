<template>
  <div class="home" @mousewheel="wheel()">
    <div class="top">
      <div class="progress">
        <el-progress
          :percentage="Math.floor(speed * 100)"
          :text-inside="true"
        ></el-progress>
      </div>
      <top style="width: 100%"></top>
    </div>

    <el-row class="content-core">
      <el-col :span="6">
        <div class=".menu">
          <menus></menus>
        </div>
      </el-col>

      <el-col :span="16">
        <!-- 这个是主题视频 -->
        <Video></Video><br /><br />
        <el-collapse accordion style="padding: 10px;">
          <el-collapse-item id="geren">
            <template slot="title">
              GitHub 个人项目<i class="header-icon el-icon-info"></i>
            </template>
            <div>
              与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；
            </div>
            <div>
              在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。
            </div>
          </el-collapse-item>
        </el-collapse>

        <!-- 这个介绍自己的一些项目的地方 -->
        <el-row class="card-dev">
          <el-col :span="8">
            <card></card>
          </el-col>
          <el-col :span="8">
            <card></card>
          </el-col>
          <el-col :span="8">
            <card></card>
          </el-col>
        </el-row>

        <el-collapse accordion class="text-tilte" style="padding: 10px;">
          <el-collapse-item>
            <template slot="title">
              下面是一些自己编写的个人博客，文章<i
                class="header-icon el-icon-info"
              ></i>
            </template>
            <div>
              与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；
            </div>
            <div>
              在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。
            </div>
          </el-collapse-item>
        </el-collapse>

        <el-row v-for="i in 10" :key="i" :gutter="20" style="margin-top: 10px">
          <el-col :span="12">
            <Article></Article>
          </el-col>
          <el-col :span="12">
            <Article></Article>
          </el-col>
        </el-row>
      </el-col>
    </el-row>

    <div class="music">
      <Music
        :class="{
          'music-click': this.music_show,
          'music-data': !this.music_show,
        }"
      ></Music>
      <div class="music-show">
        <i><i class="fa fa-music" @click="show_music" aria-hidden="true"></i
        ></i>
      </div>
    </div>
    <video2 class="bg-hutao" v-if="true"></video2>
    <Liuxinyu v-if="true" class="liuxinyu"></Liuxinyu>
  </div>
</template>

<script>
import Menus from "./Menus.vue";
import Video from "./Video.vue";
import Card from "./Card.vue";
import Top from "./Top.vue";
import Article from "./Article.vue";
import Music from "./Music.vue";
import Liuxinyu from "./Liuxinyu.vue"
import video2 from "./Video_Background.vue";

export default {
  name: "Home",
  data() {
    return {
      speed: 0,
      music_show: false,
    };
  },
  components: {
    Menus,
    Video,
    Card,
    Top,
    Article,
    Music,
    Liuxinyu,
    video2
  },
  methods: {
    wheel() {
      let windowHeight = window.screen.height;
      //获取鼠标滚动条位置
      let scrollTop =
        document.documentElement.scrollTop || document.body.scrollTop;
      //获取页面滚动条长度
      let scrollHeight =
        document.documentElement.scrollHeight || document.body.scrollHeight;
      if (scrollTop > 0) {
        let speedSpan = (windowHeight + scrollTop) / scrollHeight;
        this.speed = speedSpan > 1 ? 1 : speedSpan;
      } else {
        this.speed = 0;
      }
    },
    show_music() {
      this.music_show = !this.music_show;
    },
  },
};
</script>

<style lang="css" scope>
.bg-hutao{
  position: fixed;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  border: rgba(255, 192, 105, 0.15) solid 1px;
  border-radius:20px;
}
.el-collapse-item__header{
  background-color: rgba(0,0,0,0.3) !important;
  border-radius: 20px;
  color: #fff !important;
  border: rgba(0,0,0,0.3) 0px solid !important;
}
.el-collapse-item__content{
  padding: 10px !important;
  color: #fff !important;
}
.el-collapse-item__content div{
   background-color: rgba(0,0,0,0.1) !important;
   border: none !important;
}
.el-collapse-item__wrap{
  background-color: rgba(0,0,0,0.1) !important;
  border-radius: 20px !important;
}
.progress {
  position: fixed;
  top: -10px;
  left: 0;
  width: 100%;
  height: 3px;
  background: #fff;
}
.top {
  position: fixed;
  z-index: 100;
  width: 100%;
}
.text-tilte {
  margin-top: 40px;
  margin-bottom: 30px;
}
.music {
  top: 650px;
  position: fixed;
  z-index: 3;
}
.music .music-show {
  position: absolute;
  left: 0;
  top: -30%;
  z-index: 3;
  font-size: 30px;
  background-image: -webkit-linear-gradient(bottom, red, #fd8403, yellow);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.music .music-show:hover {
  color: skyblue;
}
.music-click {
  opacity: 1;
  transition: 1s ease-in-out;
}
.music-data {
  opacity: 0;
  transition: 1s ease-in-out;
}
.home{
  position: relative;
}
.liuxinyu{
  z-index: -1;
  position: absolute;
  top: 0;
  height: 100%;
}
</style>
