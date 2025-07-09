
<template>
  <div class="loginContainer">
    <div class="box">
      <h3 class="btitle">欢迎登录</h3>
      <el-form  ref="loginFormRef" status-icon>
        <div class="bform">
          <el-form-item prop="username">
            <el-input
              type="text"
              v-model="account"
              autocomplete="off"
              placeholder="用户名/手机号/邮箱"
            />
          </el-form-item>
          <el-form-item prop="password" >
            <el-input
              type="password"
              v-model="password"
              autocomplete="off"
              placeholder="密码"
              @keyup.enter="handleLogin('loginFormRef')"
            />
          </el-form-item>
          <el-form-item>
            <el-button
                color="#48D1CC"
              @click="login"
              round
              class="login"
              ><span style="color: white">登录</span></el-button
            >
            <span class="toRegister" @click="toRegister">注册</span>
          </el-form-item>
        </div>
      </el-form>
    </div>
  </div>
</template>

<script>
  import axios from '@/http'
  import {ElMessage} from "element-plus";
  import user from '@/http/user.js'
export default {
  data() {
    return {
      account: 'admin',//账户
      password: '123456', //密码
    }
  },
  methods:{
    //登录处理
    login(){
      //获取账户和密码，校验
      let loginForm = new FormData();
      loginForm.append("account",this.account)
      loginForm.append("password",this.password)
      //发送post请求
      user.login(loginForm)
          .then(resp=>{
            console.log('数据：',resp.data)
            console.log('code：',resp.code)
            if (resp.code===20000){
              ElMessage({
                type: 'success',
                message: '登录成功',
              })
              //将用户的token存储到本地
              localStorage.setItem('token',resp.data.token)
              //头像和用户名都要存储在本地，供其他组件/页面使用
              localStorage.setItem('username',resp.data.username)
              if (resp.data.imageUrl){
                localStorage.setItem('imageUrl',resp.data.imageUrl)
              }
              //进入主页
              this.$router.push('/main/home');
            }else{
              ElMessage({
                type: 'error',
                message: '账户名或密码错误'
              })
            }
          })
          .catch(err=>{
            console.log('登录异常:',err);
          })
      /*
      axios.post('/api/user/login',loginForm)
          .then(resp=>{
            console.log('数据：',resp.data)
            console.log('code：',resp.code)
            if (resp.code===20000){
              ElMessage({
                type: 'success',
                message: '登录成功',
              })
              //将用户的token存储到本地
              localStorage.setItem('token',resp.data.token);
              //头像和用户名都要存储在本地，供其他组件/页面使用
              //进入主页
              this.$router.push('/main/home');
            }else{
              ElMessage({
                type: 'error',
                message: '账户名或密码错误'
              })
            }
          })
          .catch(err=>{
            console.log('登录异常:',err);
          })
      */
    },
    toRegister(){
      this.$router.push('/register')
    }
  }
}
</script>
<style lang="less" scoped>
.loginContainer {
  width: 45%;
  height: 70vh;
  position: relative;
  top: 45vh;
  left: 50%;
  transform: translate(-50%, -50%);
  border-left: 1px solid #e9ecef;
  border-top: 1px solid #e9ecef;
  border-radius: 20px;
  box-shadow: 6px 6px 6px #ced4da;
  background-color: #fff;
  text-align: center;

}
.box {
  width: 80%;
  height: 80%;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);


}
.btitle {
  font-size: 2.5em;
  font-family: "楷体";
  font-weight: bold;
  color: #759aa0;
  color: #48d1cc;
}
.bform {
  width: 100%;
  height: 100%;
  padding: 20px 0px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  margin-top: 30px;
}
.login{
  width: 80px;
}
.toRegister {
  font-size: 0.8em;
  margin-left: 85px;
  color: #999;
}

.el-button--goon {
  color: #fff;
  background-color: #48d1cc;
}
</style>
