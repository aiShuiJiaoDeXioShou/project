<!-- 这里是头部标签 -->
<template>
  <div>
    <div class="navigation-bar">
      <el-row>
        <el-col :span="4">
          <router-link to="">
            <i class="fa fa-steam play" aria-hidden="true"></i>
          </router-link>
        </el-col>
        <el-col :span="16" class="input">
          <el-input
            prefix-icon="el-icon-search"
            class="search"
            v-model="input"
            placeholder="请输入内容"
            @keydown.enter="search"/>
        </el-col>
        <el-col :span="4"></el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      input: "",
    };
  },
  methods:{
      search(){
          console.log(this.input);
      }
  }
};
</script>

<style lang='css' scoped>
.navigation-bar {
  position: relative;
  height: 75px;
  border-radius: 10px;
  transition: 0.3s;
  line-height: 75px;
}
.navigation-bar:hover {
  box-shadow: 0 15px 25px rgb(0, 0, 0, 0.1);
  background: rgba(255, 255, 255, 0.1);
  border-top: 1px solid rgba(255, 255, 255, 0.5);
  backdrop-filter: blur(15px);
}
.search{
    opacity: 0;
    width: 0px;
}
.navigation-bar:hover .search{
    opacity: 1;
    transform: 1.5s;
    width: 100%;
}

.navigation-bar .play{
  opacity: 0;
}
.navigation-bar:hover .play{
  opacity: 1;
}
</style>
