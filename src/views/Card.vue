<!-- 这个是卡片特效的代码 -->
<template>
  <div>
    <div class="card">
      <div class="imgBox">
        <img src="../assets/icon.png" />
      </div>

      <br /><br /><br /><br /><br /><br />
      <div class="content">
        <div class="details">
          <h2>
            你是个女孩 <br />
            <br /><span>你是一个坏女孩</span>
          </h2>
        </div>
      </div>
      <p>
       要实现旋转动画需要用到transform属性中rotate ()来设置，可以在X轴方向，Y轴方向，Z轴方向上进行旋转。 在代码中指定旋转方向。 这次的起点是0度，终点是360度（一次旋转），向X轴方向指定旋转。 然后利用鼠标悬停让图片旋转。 animation-duration是动画处理的时间，animation-iteration-count是动画处理的次数。 基本与X轴的旋转几乎相同。 仅旋转更改为Y轴方向的旋转。 将鼠标悬停在图像上时，它会沿Y轴方向旋转，效果如下： 也基本与X轴的旋转几乎相同。 仅更改旋转到Z轴方向的旋转
      </p>
      <ul class="sci" id="sci">
        <li>
          <a href="#"><i class="fa fa-github" aria-hidden="true"></i></a>
        </li>
        <li>
          <a href="#"><i class="fa fa-qq" aria-hidden="true"></i></a>
        </li>
        <li>
          <a href="#"><i class="fa fa-weixin" aria-hidden="true"></i></a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>

<style lang='css' scoped>
.card {
  position: relative;
  width: 275px;
  height: 400px;
  background: #ffff;
  box-shadow: 0 15px 25px rgb(0, 0, 0, 0.1);
  border-radius: 10px;
  background: rgba(255, 255, 255, 0.1);
  border-top: 1px solid rgba(255, 255, 255, 0.5);
  backdrop-filter: blur(15px);
  transition: 1s;
  z-index: 1;
}

.card p {
  width: 90%;
  height: 240px;
  padding: 10px;
  position: absolute;
  top: 0;
  text-align: left;
  text-align: justify;
  text-indent: 10px;
  letter-spacing: 3px;
  line-height: 2;
  /* 每个行字之间的间隔为5px */
 /*  background: linear-gradient(to bottom,white,black);
  color: transparent;
  background-clip:text ; */
  opacity: 0;
  transform: rotateY(180deg);
  /* white-space: nowrap; */
  overflow: hidden;
  /* 对溢出的文本做省略号处理 */
  text-overflow: ellipsis;
}

.card:hover {
  /*  animation: turnX 1.5s infinite;
  animation-iteration-count:1;
  animation-fill-mode: forwards; */
  transform: rotateY(180deg) translate(0px, -10px);
}
.card:hover div {
  opacity: 0;
}
.card:hover p {
  opacity: 1;
}
.card:hover .sci{
  opacity: 1;
}

@keyframes turnX {
  0% {
    transform: rotateY(0deg);
  }
  100% {
    transform: rotateY(180deg) translate(0px, -10px);
  }
}
@keyframes turnX2 {
  0% {
    transform: rotateY(0deg);
  }
  100% {
    transform: rotateY(-180deg) translate(0px, -10px);
  }
}
.imgBox {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  border-radius: 10px;
  transform: translateY(30px) scale(0.5);
  transform-origin: top;
}
.imgBox img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.content {
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-end;
}
.content .details {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
}
.content .details h2 {
  font-size: 1.2em;
  font-weight: 500;
  color: #444;
  margin-bottom: 10px;
}
.content .details h2 span {
  font-size: 0.8em;
  color: #03a9f4;
  font-weight: 400;
}

.sci {
  opacity: 0;
  position: absolute;
  display: flex;
  margin-top: 5px;
  top: 300px;
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
