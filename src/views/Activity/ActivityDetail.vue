<template>
  <HeaderNav />
  <div class="g_container">
    <!-- 1 -->
    <span class="g_title">基本信息</span>
    <van-cell-group>
      <van-cell title="所属地区" :value="state.data.area" />
      <van-cell title="主题活动分类" :value="state.data.type" />
      <van-cell title="活动标题" :value="state.data.area" />
      <van-cell title="活动地点" :value="state.data.area" />
      <van-cell title="活动开始时间" :value="state.data.area" />
      <van-cell title="活动结束时间" :value="state.data.area" />
      <van-cell title="限额人数" :value="state.data.area" />
      <van-cell title="单位名称" :value="state.data.area" />
      <van-cell title="活动内容">
        <template #label>
          <div class="bg-gray-100 p-2 h-20 rounded overflow-auto">{{ state.data.content }}</div>
        </template>
      </van-cell>
    </van-cell-group>
  </div>
  <RowDivider />
  <!-- 2 -->
  <div class="g_container">
    <!-- 2.1 -->
    <span class="g_title">精彩影集</span>
    <ImageList :images="state.data.images" />
  </div>
  <RowDivider />
  <!-- 2.2 -->
  <div class="g_container">
    <span class="g_title">精彩视频</span>
    <VideoBox :video="state.data.video">
      <template #button>
        <div class="flex space-x-2 pl-44">
          <van-button type="primary" plain class="h-6 rounded-md my-auto">播放</van-button>
        </div>
      </template>
    </VideoBox>
  </div>
  <!-- 2.3 -->
  <div class="g_container">
    <div
      v-for="(item, index) in state.jumps"
      :key="index"
      class="jump_box"
      @click="() => router.push({ name: item.name, query: { id: state.data.id } })"
    >
      <div class="icon_box"></div>
      <span class="my-auto w-3/4">{{ item.text }}</span>
      <van-icon name="arrow" size="20" color="#9CA3AF" class="my-auto" />
    </div>
  </div>
  <!-- 3 -->
  <div class="flex space-x-4 bg-gray-100 p-4">
    <van-button block type="primary" class="rounded-md">保&nbsp;&nbsp;存</van-button>
    <van-button block type="primary" plain class="rounded-md">取&nbsp;&nbsp;消</van-button>
  </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import HeaderNav from '@/components/Common/HeaderNav.vue'
import RowDivider from '@/components/Common/RowDivider.vue'
import VideoBox from '@/components/Common/VideoBox.vue'
import ImageList from '@/components/Common/ImageList.vue'
import type { activityItem } from '@/models'
import { getActivityById } from '@/services'

type stateType = {
  jumps: { text: string, name: string }[],
  data: activityItem
}

const route = useRoute()
const router = useRouter()
const state: stateType = reactive({
  jumps: [
    { text: '查看报名记录', name: 'activityRecord' },
    { text: '查看评论记录', name: 'activityComment' }
  ],
  data: {} as activityItem
})

async function init() {
  if (route.query.id) {
    const id = parseInt(route.query.id.toString())
    state.data = await getActivityById(id)
  }
}

init()
</script>

<style scoped>
.jump_box {
  @apply flex space-x-2 h-16 p-2 bg-gray-100;
}

.icon_box {
  @apply bg-white rounded-full h-14 w-14 my-auto;
}
</style>
