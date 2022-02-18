<template>
  <div class="flex flex-col h-screen px-8 pt-48">
    <!-- 1 -->
    <div class="flex">
      <div class="border_b">
        <span class="block text-3xl font-semibold -mb-4">新北E家</span>
      </div>
      <span class="mt-4 ml-1">(工作人员版)</span>
    </div>
    <!-- 2 -->
    <div class="flex flex-col space-y-8 p-1 mt-16">
      <div class="flex">
        <van-icon name="manager" size="30" color="#3B82F6" class="my-auto" />
        <van-field type="tel" v-model="state.tel" placeholder="请输入电话" />
      </div>
      <div class="flex">
        <van-icon name="lock" size="30" color="#3B82F6" class="my-auto" />
        <van-field type="password" v-model="state.password" placeholder="请输入密码" />
      </div>
    </div>
    <!-- 3 -->
    <van-button type="primary" size="large" class="mt-12" @click="toHome">登&nbsp;&nbsp;录</van-button>
  </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue'
import { useRouter } from 'vue-router'

type stateType = {
  tel: string,
  password: string
}

const router = useRouter()
const state: stateType = reactive({
  tel: '',
  password: ''
})

function toHome() {
  console.log(state)
  router.push('/home')
}
</script>

<style scoped>
.border_b {
  @apply border-b-4 border-solid border-blue-300;
  @apply border-t-transparent border-x-transparent;
}
</style>
