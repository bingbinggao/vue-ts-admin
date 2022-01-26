<template>
  <div class="login">
    <el-form
      class="login-box"
      :model="loginForm"
      :rules="rules"
      ref="loginForm"
    >
      <el-form-item prop="username">
        <el-input
          v-model="loginForm.username"
          prefix-icon="el-icon-user-solid"
        />
      </el-form-item>
      <el-form-item prop="password">
        <el-input
          v-model="loginForm.password"
          type="password"
          prefix-icon="el-icon-lock"
        />
      </el-form-item>
      <el-form-item>
        <el-button style="width: 100%" type="primary" @click="handlerLogin"
          >登录</el-button
        >
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { LOGIN_FORM } from "@/types/login/login";

@Component
export default class Login extends Vue {
  private loginForm: LOGIN_FORM = {
    username: "admin",
    password: "123456",
  };

  private rules = {
    username: [{ required: true, message: "请输入用户名", trigger: "blur" }],
    password: [{ required: true, message: "请输入密码", trigger: "blur" }],
  };

  private handlerLogin(): void {
    this.$refs["loginForm"].validate((valid) => {
      if (valid) {
        sessionStorage.setItem("username", this.loginForm.username);
        this.$router.push("/");
      }
    });
  }
}
</script>

<style lang="scss" scoped>
.login {
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgb(45, 58, 75);
  .login-box {
    width: 300px;
    padding: 100px;
    background: rgba(0, 0, 0, 0.1);
    box-shadow: 10px 10px 10px #202020;
  }
}
</style>
<style lang="scss">
.login {
  .el-input__inner {
    background: transparent;
    color: #ffffff;
  }
}
</style>
