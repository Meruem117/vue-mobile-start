<template>
  <HeaderNav />
  <div class="g_container">
    <div class="g_title">基本信息</div>
    <van-form class="flex flex-col space-y-4">
      <!-- 1 -->
      <van-cell-group>
        <div class="p-2">
          <span>姓名*</span>
          <van-field v-model="state.data.name" placeholder="请输入姓名" />
        </div>
        <div class="p-2">
          <span>称号*</span>
          <van-field v-model="state.data.title" placeholder="请输入称号" />
        </div>
        <div class="p-2">
          <span>简介*</span>
          <van-field
            v-model="state.data.description"
            rows="5"
            autosize
            type="textarea"
            placeholder="请输入先锋人物简介..."
            class="bg-gray-100 rounded mt-2"
          />
        </div>
        <!-- 2 -->
        <div class="flex flex-col space-y-4 mt-4 p-2">
          <span class="g_title">精彩影集</span>
          <span class="text-sm">图片上传(可选择多张)</span>
          <van-uploader :after-read="afterRead" />
        </div>
        <!-- 3 -->
        <div class="flex flex-col space-y-4 mt-4 p-2">
          <span class="g_title">精彩视频</span>
          <VideoBox :video="state.data.video">
            <template #button>
              <div class="flex space-x-2 pl-20">
                <van-button type="primary" plain class="h-6 rounded-md my-auto">上传</van-button>
                <van-button type="danger" plain class="h-6 rounded-md my-auto">删除</van-button>
              </div>
            </template>
          </VideoBox>
        </div>
      </van-cell-group>
      <!-- 4 -->
      <div class="bg-gray-100 p-4">
        <van-button block type="primary" native-type="submit" class="rounded-md">提交</van-button>
      </div>
    </van-form>
  </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue'
import HeaderNav from '@/components/Common/HeaderNav.vue'
import VideoBox from '@/components/Common/VideoBox.vue'
import type { personItem } from '@/models'

type stateType = {
  data: personItem
}

const state: stateType = reactive({
  data: {} as personItem
})

function afterRead(file: any) {
  console.log(file)
}
</script>
