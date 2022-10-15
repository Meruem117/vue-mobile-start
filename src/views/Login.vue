<template>
  <div class="login">
    <div class="login-head">
      <div class="head-title">Vue Mobile</div>
      <div class="head-text">(Vant)</div>
    </div>
    <van-cell-group inset>
      <van-field v-model="state.username" left-icon="manager" placeholder="请输入用户名" clearable />
      <van-field v-model="state.password" left-icon="lock" placeholder="请输入密码" clearable />
    </van-cell-group>
    <div class="login-button">
      <van-button type="primary" size="large" @click="login">登 录</van-button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Toast } from 'vant';
import { reactive } from 'vue'
import { useRouter } from 'vue-router'
import { loginUser } from '@/services/user'

type stateType = {
  username: string,
  password: string
}

const router = useRouter()
const state: stateType = reactive({
  username: '',
  password: ''
})

function check(): boolean {
  if (!state.username) {
    Toast({ message: '请输入用户名' })
    return false
  }
  if (!state.password) {
    Toast({ message: '请输入密码' })
    return false
  }
  return true
}

function login() {
  if (!check()) return
  loginUser({
    name: state.username,
    password: state.password
  }).then(res => {
    console.log(res)
  })
}
</script>

<style scoped lang="less">
.login {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  padding: 0 20px;
  padding-top: 180px;
  display: flex;
  flex-direction: column;
  background: linear-gradient(to bottom, #fff, @theme-color);

  .login-head {
    display: flex;
    align-items: baseline;
    margin-bottom: 40px;
    padding: 0 20px;

    .head-title {
      font-size: 32px;
      font-weight: bold;
    }

    .head-text {
      margin-left: 5px;
      font-size: 20px;
    }
  }

  .login-button {
    margin-top: 20px;
    padding: 20px;
  }
}
</style>
