<template>
  <div class="main">
    <div class="flex mb-8">
      <div class="border_b">
        <span class="block text-3xl font-semibold -mb-4">Vue Mobile</span>
      </div>
      <span class="mt-4 ml-1">(Vant)</span>
    </div>
    <van-field v-model="state.username" left-icon="manager" placeholder="请输入用户名" clearable />
    <van-field v-model="state.password" left-icon="lock" placeholder="请输入密码" clearable />
    <van-button type="primary" size="large" class="mt-12" @click="toHome">登 陆</van-button>
  </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue'
import { useRouter } from 'vue-router'

type stateType = {
  username: string,
  password: string
}

const router = useRouter()
const state: stateType = reactive({
  username: '',
  password: ''
})

function toHome() {
  router.push('/home')
}
</script>

<style scoped lang="less">
.main {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  padding: 0 40px;
  padding-top: 180px;
  display: flex;
  flex-direction: column;
  background: linear-gradient(to bottom, #fff, @theme-color);
}
</style>
