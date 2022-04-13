<!-- 这个是文章的组件 -->
<template>
  <div class="root">
    <div class="card">
      <div class="imgBox">
        <img src="../assets/icon.png" alt="" />
      </div>
      <div class="content">
        <h2>可申缩卡片1</h2>
        <p>
          这里是传说汇总的收到激发了开始的和福克斯的反馈分厘使得房价来说看到解放立刻介绍的方法离开s
        </p>
        <br />
        <el-row class="operation">
          <el-col :span="8">
            <i class="el-icon-star-off" v-if="!cart_collection"></i>
            <i class="el-icon-star-on" v-if="cart_collection"></i>
          </el-col>
          <el-col :span="8">
            <el-popover placement="top" width="160" v-model="pop_visible">
              <p>这是一段内容这是一段内容确定删除吗？</p>
              <div style="text-align: right; margin: 0">
                <el-button size="mini" type="text" @click="pop_visible = false"
                  >取消</el-button
                >
                <el-button type="primary" size="mini" @click="pop_visible = false"
                  >确定</el-button
                >
              </div>
              <i slot="reference" class="el-icon-delete"></i>
            </el-popover>
          
          </el-col>
          <el-col :span="8">
            <el-popover
              placement="top-start"
              title="相信您乐助于分享知识"
              width="200"
              trigger="hover"
            >
              <div>
                <ul class="sci" id="sci">
                  <li>
                    <a href="#"
                      ><i class="fa fa-github" aria-hidden="true"></i
                    ></a>
                  </li>
                  <li>
                    <a href="#"><i class="fa fa-qq" aria-hidden="true"></i></a>
                  </li>
                  <li>
                    <a href="#"
                      ><i class="fa fa-weixin" aria-hidden="true"></i
                    ></a>
                  </li>
                </ul>
              </div>
              <i slot="reference" class="el-icon-s-promotion"></i>
            </el-popover>
          </el-col>
        </el-row>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      cart_collection: false,
      pop_visible:false
    };
  },
};
</script>

<style lang='css' scoped>
.card {
  position: relative;
  max-width: 300px;
  height: 215px;
  background: #ffff;
  transition: 0.5s ease-in-out;
  margin: 30px 10px;
  padding: 20px 15px;
  display: flex;
  flex-direction: column;
  box-shadow: 0 5px 202px rgba(0, 0, 0, 0.5);
}
.card:hover {
  height: 420px;
}
.card .imgBox {
  position: relative;
  width: 260px;
  height: 260px;
  top: -60px;
  left: -20px;
  z-index: 1;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.2);
  transition: 0.5s ease-in-out;
}
.card .imgBox img {
  max-width: 100%;
  border-radius: 4px;
}
.card .content {
  position: relative;
  margin-top: -140px;
  padding: 10px 15px;
  text-align: center;
  color: #111;
  visibility: hidden;
  opacity: 0;
  transition: 0.3s ease-in-out;
}
.card:hover .content {
  opacity: 1;
  visibility: visible;
  margin-top: -40px;
  transition-delay: 0.3;
}
.operation i:hover {
  color: #91d5ff;
}

.sci {
  display: flex;
  margin-top: 5px;
}
.sci li {
  list-style: none;
  margin: 4px;
}
.sci li a {
  width: 45px;
  height: 45px;
  background: transparent;
  font-size: 1.5em;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  color: #444;
  text-decoration: none;
  box-shadow: 0 7px 15px rgba(0, 0, 0, 0.1);
  border-top: 1px solid rgb(0, 0, 0, 0.05);
  transition: 0.5s;
}
.sci li a:hover {
  background: #03a9f4;
  color: #ffff;
}
</style>
