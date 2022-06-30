<!-- 这个是登入界面 -->
<template>
  <div class="userlogin-root">
    <div class="login-container">
      <div class="span-tu glass"></div>
      <form class="login glass" action="/user/login" method="post" enctype="application/x-www-form-urlencoded">
        <div class="login-title">我每天遥望天空，星空中满是日月星辰。</div>
        <input type="text" v-if="!hide" name="username" v-model="user.userName" placeholder="靓仔请输入你的雅名"><br>
        <input type="text" name="userphone" v-model="user.phone" placeholder="请输入手机号" /><br />
        <input type="password" name="password" v-model="user.password" placeholder="请输入密码" /><br />
        <input type="text" v-if="!hide" name="email" v-model="user.email" placeholder="请输入邮箱地址" /><br />

        <div class="verification-code">
           <input type="text" name="code" placeholder="请输入验证码" /><br />
           <div>验证码图片</div>
        </div>
       
        <input type="button" @click="login" v-if="hide" value="登录" /><br />
        <input type="button" @click="register" v-if="!hide" value="注册" /><br />
        <div style="
            height: 10%;
            width: 80%;
            font-size: 15px;
            justify-content: center;
            margin: 0 auto;
          ">
          <input class="login-agreement" title="同意用户协议" type="checkbox" name="agreement" id="agreement-id" />
          <span style="flex: 0.5">同意用户协议</span>
        </div>
        <div v-if="hide">{{text}}</div>
      </form>
    </div>
  </div>
</template>

<script>
import Axios from 'axios';
import Cookie from 'js-cookie';
export default {
  data() {
    return {
      hide:undefined,//判断是登入还是注册
      user:{
        user_name: "",
        password: "",
        email: "",
        code: "",
        phone: "",
      },
      text:""
    };
  },
  created(){
    let islogin = this.$route.query.isLogin
    if(islogin === "显示"){
      this.hide = true
    }else{
      this.hide = false
    }
  },
  methods:{ 
    register(){
      Axios({
        method:"post",
        url:this.$url.baseUrl+'backstage/user',
        data:this.user
      }).then(res=>{
        if(res.status == 200){
          this.$router.push({ path: "/login",query:{isLogin:"隐藏"} });
        }
      })
    },
    login(){
      Axios({
        method:"post",
        url:this.$url.baseUrl+'backstage/user/validate',
        data:this.user
      }).then(res=>{
        // 保存时间为7天
        if(res.status == 200){
          if(res.data.data.token)Cookie.set("user_id",res.data.data.token,{expires: 7})
          this.$router.push({ path: "/" });
        }
      })
    }
  }
};
</script>

<style lang='css' scoped>
*{
  margin: 0;
  padding: 0;

}
/* 总结一下就是第一个不能是相对的，其他的子盒子都能用百分比来布局 */
.login-container{
    width: 800px;
    /* height: 550px; */
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin: 0 auto;
    padding-top:100px ;
}
/* 注意子类的宽高不会默认继承百分比 */
.glass{
     box-shadow: 0 15px 25px rgb(0 0 0 / 10%);
    border-radius: 10px;
    background: rgba(255, 255, 255, 0.4);
    border-top: 1px solid rgba(255, 255, 255, 0.5);
}
.login{
    width: 75%;
    height: 100%;
    transition: all 0.5s;
    display: flex;
    flex-direction: column;
    padding: 20px;
}
.login:hover{
    transition: all 0.5s;
    /* 平移5px */
    transform: translateY(5px);
}
.userlogin-root{
    width: 100%;
    height:800px;
    background: url("../../assets/img/luligaoqian.jpg") no-repeat;
    background-size: cover;
}
.login-title{
    font-weight: bold;
    line-height: 20px;
    padding: 10px 0px 20px 20px;
    color: #ffff;
}
.login>input{
    /* 取消input的外边框 */
    outline-style: none ;
    height: 45px;
    width: 80%;
    border: 0px solid #fff;
    border-radius: 5px;
    display: block;
    margin: 0 auto;
    margin-top: 10px;
}
.login>input[type=submit]:hover{
    background: rgba(255, 255, 255, 0.6);
}
.login>input[type=button]{
    background-color: #95de64;
}
.login>input[type=button]:hover{
    background: rgb(130, 190, 93);
}
#agreement-id{
    height: 12px;
    width: 12px;
    flex: 0.5;
    text-align: center;
}
.span-tu{
    width: 25%;
    height: 500px;
    background: url('../../assets/img/486.jpg');
    background-size: cover;
    margin-right:40px;
    padding-top: 5%;
}
.verification-code{
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-top: 10px;
}
.verification-code input{
    outline-style: none ;
    height: 45px;
    width: 30%;
    border: 0px solid #fff;
    border-radius: 5px;
    display: block;
    margin-right: 20px;
}
.verification-code div{
    width: 30%;
    height: 45px;
    background-color: #fff;
    background-size: cover;
    box-shadow: 0 0 5px 5px #fff; 
}
.verification-code{
  display: flex;
  flex-direction: row;
  justify-content: center;
  text-align: center;
}
</style>
