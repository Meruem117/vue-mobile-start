<template>
  <!-- 1 -->
  <div class="flex space-x-4 h-40 bg-blue-500 px-4">
    <div class="flex w-16 h-16 bg-blue-300 rounded-full my-auto">
      <div class="w-14 h-14 bg-gray-200 rounded-full m-auto"></div>
    </div>
    <div class="flex flex-col space-y-1 my-auto">
      <span class="text-white text-lg">{{ state.name }}</span>
      <span class="text-white text-sm font-thin">{{ state.unit }}</span>
    </div>
  </div>
  <!-- 2 -->
  <van-cell-group>
    <van-cell v-for="(item, index) in state.cells" :key="index" is-link>
      <template #title>
        <van-icon :name="item.icon" size="16" color="#60A5FA" class="my-auto" />
        <span class="my-auto ml-2">{{ item.title }}</span>
      </template>
    </van-cell>
  </van-cell-group>
  <!-- 3 -->
  <FooterNav :active="1" />
</template>

<script setup lang="ts">
import { reactive } from 'vue'
import FooterNav from '@/components/Common/FooterNav.vue'

type stateType = {
  name: string,
  unit: string,
  avatar: string,
  cells: { icon: string, title: string }[]
}

const state: stateType = reactive({
  name: '',
  unit: '',
  avatar: '',
  cells: [
    { icon: 'delete', title: '清除缓存' },
    { icon: 'lock', title: '修改密码' },
    { icon: 'info', title: '联系我们' }
  ]
})

async function init() {
  state.name = '张嘉译'
  state.unit = '国宾社区第一网格'
  state.avatar = ''
}

init()
</script>
