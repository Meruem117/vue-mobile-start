<template>
  <div class="home">
    <!-- 1 -->
    <div class="flex">
      <div class="border_b">
        <span class="block text-3xl font-semibold -mb-4">Vue Mobile</span>
      </div>
      <span class="mt-4 ml-1">(Vant)</span>
    </div>
    <!-- 2 -->
    <div class="flex flex-col space-y-8 p-1 mt-16">
      <div class="flex">
        <van-icon name="manager" size="30" color="#3B82F6" class="my-auto" />
        <van-field type="tel" v-model="state.tel" placeholder="Input your mobile" />
      </div>
      <div class="flex">
        <van-icon name="lock" size="30" color="#3B82F6" class="my-auto" />
        <van-field type="password" v-model="state.password" placeholder="Input your password" />
      </div>
    </div>
    <!-- 3 -->
    <van-button type="primary" size="large" class="mt-12" @click="toHome">Login</van-button>
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
  router.push('/home')
}
</script>

<style lang="less" scoped>
.home {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  padding: 0 40px;
  padding-top: 180px;
  display: flex;
  flex-direction: column;
}
</style>
