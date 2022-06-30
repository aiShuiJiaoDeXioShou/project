<template>
  <div class="menus-root">
    <div class="wrap">
      <div class="nav">
        <div class="btn">
          <div class="btn-item"></div>
          <div class="btn-item"></div>
          <div class="btn-item"></div>
        </div>
        <div class="icon">
          <div class="icon-img" @click="own()">
            <img src="../../assets/icon.png"/>
          </div>
          <div class="icon-con">
            <p>傻逼钢钢: 66 lv</p>
            <el-progress :percentage="50"></el-progress>
            <p>我仍然无敌于世间</p>
          </div>
        </div>
        <div class="line"></div>
        <div class="tilte">
          <p>Menu</p>
        </div>

        <div class="menu">
          <div class="item" v-for="(item, index) in memu_data" :key="index">
            <div class="ligth">
              <i :class="item.icon" aria-hidden="true"></i>
            </div>
            <div class="licon">
              <span class="iconfont icon-wenjian1"><i :class="item.icon" aria-hidden="true"></i></span>
            </div>
            <div class="con">
              <a style="text-decoration: none" @click="selectMenu(item.address)">{{ item.title }}</a>
            </div>
            <div class="ricon"></div>
          </div>
        </div>

        <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />

        <div class="line"></div>

        <div class="title" style="padding-left: 30px">
          <p>Serve</p>
        </div>

        <div class="serve">
          <div class="menu">
            <div class="item" v-for="(item, i) in serve" :key="i">
              <div class="ligth">
                <i :class="item.icon" aria-hidden="true"></i>
              </div>
              <div class="licon">
                <span class="iconfont icon-wenjian1"><i :class="item.icon" aria-hidden="true"></i></span>
              </div>
              <div class="con" @click="settingClik(item.title)">{{ item.title }}</div>
              <div class="ricon"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      memu_data: [
        {
          title: "首页",
          icon: "fa fa-address-card-o",
          address: "#a-home",
        },
        {
          title: "GitHub开源项目",
          icon: "fa fa-github",
          address: "#a-project",
        },
        {
          title: "博客论文",
          icon: "fa fa-tree",
          address: "#a-blog",
        },
        {
          title: "小说作品",
          icon: "fa fa-book",
          address: "#a-blog",
        },
        {
          title: "个人游戏作品",
          icon: "fa fa-steam",
          address: "#a-blog",
        },
        {
          title: "网站源码",
          icon: "fa fa-code",
          address: "#a-blog",
        },
      ],
      serve: [
        {
          title: "设置",
          icon: "fa fa-cog",
        },
        {
          title: "写作",
          icon: "fa fa-pencil-square-o",
        },
        {
          title: "帮助",
          icon: "fa fa-question-circle",
        },
      ],
    };
  },
  methods: {
    selectMenu(item) {
      console.log(item);
      const returnEle = document.querySelector(item);
      returnEle.scrollIntoView({block: "start", behavior: "smooth"});
    },
    settingClik(item){
      console.log(item);
      if(item === "设置"){
        // this.$router.push({name: "setting"});
      }else if(item === "写作"){
         let routeUrl = this.$router.resolve({name: "edit",path:"/edit"});
         window.open(routeUrl.href, '_blank');
      }else if(item === "帮助"){

      }
    },
    own(){
      let routeUrl = this.$router.resolve({path:'/own'});
      window.open(routeUrl.href, '_blank');
    }
  },
};
</script>

<style lang="css" scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  color: rgba(255, 255, 255, 0.6);
}

.wrap {
  width: 100%;
  height: 100%;
  /* background: url('../images/bg.jpg') center no-repeat; */
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
}

.nav {
  width: 100px;
  height: 867px;
  background: rgba(0, 0, 0, 0.7);
  border-radius: 20px;
  overflow: hidden;
  transition: 0.5s;
  z-index: 2;
}

.nav:hover {
  width: 280px;
}

.btn {
  width: 60px;
  height: 10px;
  display: flex;
  justify-content: space-around;
  margin-left: 25px;
  margin-top: 25px;
}

.but-item {
  width: 10px;
  height: 10px;
  border-radius: 50%;
}

.but-item:nth-child(1) {
  background: #eb5a56;
}

.but-item:nth-child(2) {
  background: #ffc069;
}

.but-item:nth-child(3) {
  background: #1890ff;
}

.icon {
  width: 250px;
  height: 60px;
  margin-left: 25px;
  margin-top: 20px;
  display: flex;
}

.icon-img {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  /* 鼠标移动到该位置改变光标样式 
  Syntax: [ [ <url> [ <x> <y> ]? , ]*
   [ auto | default | none | context-menu 
   | help | pointer | progress | wait 
   | cell | crosshair | text | vertical-text
   | alias | copy |
  */
  cursor: pointer;
  border: 4px solid rgba(255, 255, 255, 0.3);
  overflow: hidden;
}

.icon-img img {
  width: 100%;
  height: 100%;
  border-radius: 50%;
  object-fit: cover;
}

.icon-con {
  height: 60px;
  margin-left: 25px;
}

.icon-con p {
  padding-top: 5px;
}

.icon-con h2 {
  font-weight: 400;
}

.line {
  width: 60px;
  height: 1px;
  background: rgba(245, 253, 255, 0.5);
  margin: 20px 25px;
  transition: 0.5s;
}

.nav:hover .line {
  width: 230px;
}

.tilte {
  width: 60px;
  margin-left: 25px;
  margin-bottom: 20px;
}

.tilte p {
  font-size: 14px;
}

.menu {
  width: 230px;
  margin-left: 25px;
  cursor: pointer;
}

.item {
  display: flex;
  position: relative;
  transition: 0.5s;
  border-radius: 6px;
}

.item:hover {
  background: rgba(255, 255, 255, 0.1);
}

.licon {
  width: 60px;
  height: 50px;
  display: flex;
  justify-self: center;
  align-items: center;
}

.con {
  width: 0;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.5s;
  overflow: hidden;
  position: relative;
  left: -20px;
  opacity: 0;
}

.nav:hover .con {
  width: 160px;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 1;
}

.ricon {
  width: 0;
  height: 50px;
  transition: 0.5s;
  display: flex;
  align-items: center;
  overflow: hidden;
  opacity: 0;
}

.nav:hover .ricon {
  width: 60px;
  display: flex;
  justify-self: center;
  align-items: center;
  opacity: 1;
}

.iconfont {
  font-size: 26px;
}

.ricon .iconfont {
  font-size: 20px;
  color: #62cb44;
}

.ligth {
  width: 6px;
  height: 50px;
  background: #eb5a56;
  position: absolute;
  left: -25px;
  transition: 0.5s;
  border-top-right-radius: 4px;
  border-bottom-right-radius: 4px;
  opacity: 0;
}

.item:hover .ligth {
  opacity: 1;
}

.serve {
  width: 60px;
  background: rgba(0, 0, 0, 0.7);
  margin-left: 25px;
  border-radius: 10px;
  overflow: hidden;
  transition: 0.5s;
  margin-top: 20px;
}

.nav:hover .serve {
  width: 230px;
}
</style>
