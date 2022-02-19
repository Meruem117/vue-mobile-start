<template>
  <HeaderNav />
  <div class="g_container">
    <!-- 1 -->
    <van-cell-group>
      <van-cell title="姓名" :value="state.data.name" />
      <van-cell title="称号" :value="state.data.title" />
      <van-cell title="简介">
        <template #label>
          <div class="bg-gray-100 p-2 h-40 rounded overflow-auto">{{ state.data.description }}</div>
        </template>
      </van-cell>
      <van-cell title="图片上传">
        <template #label>
          <ImageList :images="state.data.images" />
        </template>
      </van-cell>
      <van-cell title="视频上传">
        <template #label>
          <VideoBox :video="state.data.video">
            <template #button>
              <van-button type="primary" plain class="g_video_button">播放</van-button>
              <van-button type="danger" plain class="g_video_button">重录</van-button>
            </template>
          </VideoBox>
        </template>
      </van-cell>
    </van-cell-group>
  </div>
  <!-- 2 -->
  <div class="fixed bottom-0 w-full">
    <div class="flex space-x-4 bg-gray-100 p-4">
      <van-button block type="primary" class="rounded-md">保&nbsp;&nbsp;存</van-button>
      <van-button block type="primary" plain class="rounded-md">取&nbsp;&nbsp;消</van-button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue'
import { useRoute } from 'vue-router'
import HeaderNav from '@/components/Common/HeaderNav.vue'
import VideoBox from '@/components/Common/VideoBox.vue'
import ImageList from '@/components/Common/ImageList.vue'
import type { personItem } from '@/models'
import { getPersonById } from '@/services'

type stateType = {
  data: personItem
}

const route = useRoute()
const state: stateType = reactive({
  data: {} as personItem
})

async function init() {
  if (route.query.id) {
    const id = parseInt(route.query.id.toString())
    state.data = await getPersonById(id)
  }
}

init()
</script>
