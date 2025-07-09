<!-- 注册 -->
<template>
  <div class="loginContainer">
    <div class="box">
      <h3 class="btitle">注册账户</h3>
      <el-form
        :model="registerForm"
        ref="registerFormRef"
        label-width="80px"
        status-icon
        class="bform"
      >
        <el-form-item prop="email"  label="邮箱：">
          <el-input
            type="text"
            v-model="registerForm.email"
            autocomplete="off"
          />
        </el-form-item>
        <el-form-item prop="phone"  label="电话：">
          <el-input
            type="text"
            v-model="registerForm.phone"
            autocomplete="off"
          />
        </el-form-item>
        <el-form-item
          prop="password"
          label="密码："
        >
          <el-input
            type="password"
            v-model="registerForm.password"
            autocomplete="off"
            @keyup.enter="handleRegister('registerFormRef')"
          />
        </el-form-item>
        <el-form-item prop="role" label="角色：">
          <el-select
            v-model="registerForm.role"
            placeholder="请选择角色"
            size="small"
          >
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            >
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item>
          <el-button
              color="#48d1cc"
            type="primary"
            @click="handleRegister"
            round
            class="login"
            ><span style="color: white">注册</span></el-button
          >
          <span class="toLogin" @click="toLogin">去登录</span>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>

export default {
  name: "",
  data() {
    return {
      registerForm: {
        email: "",
        phone: "",
        password: "",
        role: "", // 1为歌手，2为普通用户
      },
      options: [
        {
          value: 1,
          label: "歌手",
        },
        {
          value: 2,
          label: "普通用户",
        },
      ],
    };
  },
  methods: {
    // 去登录
    toLogin() {
      this.$router.push({
        path: "/login",
      });
      this.$refs.registerFormRef.resetFields();
    },
  },
};
</script>
<style lang="less" scoped>
.loginContainer {
  width: 40%;
  height: 80vh;
  position: relative;
  top:50vh;
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
  // color: #759aa0;
  color: #48d1cc;
}
.bform {
  width: 100%;
  height: 100%;
  padding: 20px 0px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.toLogin {
  font-size: 12px;
  margin-left: 85px;
  color: #999;
}
.login{
  width: 80px;
}
.el-button--goon {
  color: #fff;
  background-color: #48d1cc;
}
</style>
