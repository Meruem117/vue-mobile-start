<template>
  <HeaderNav />
  <div class="g_container">
    <div class="g_title">基本信息</div>
    <van-form class="flex flex-col space-y-4">
      <!-- 1 -->
      <van-cell-group>
        <div class="py-2">
          <span>标题*</span>
          <van-field v-model="state.data.title" placeholder="请输入标题" />
        </div>
        <div class="flex flex-col space-y-4 py-2">
          <span>图片上传</span>
          <van-uploader :after-read="afterRead" />
        </div>
      </van-cell-group>
      <!-- 2 -->
      <div class="fixed bottom-0 w-full">
        <div class="flex justify-center w-5/6 bg-gray-100 p-4">
          <van-button block type="primary" native-type="submit" class="rounded-md">提交</van-button>
        </div>
      </div>
    </van-form>
  </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue'
import HeaderNav from '@/components/Common/HeaderNav.vue'
import type { activityItem } from '@/models'

type stateType = {
  data: activityItem
}

const state: stateType = reactive({
  data: {} as activityItem
})

function afterRead(file: any) {
  console.log(file)
}
</script>
