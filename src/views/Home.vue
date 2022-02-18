<template>
  <!-- 1 -->
  <div class="flex flex-col bg-gradient-to-t from-blue-500 to-blue-400 p-4 pb-12">
    <div class="flex">
      <van-icon name="location-o" color="white" class="my-auto" />
      <span class="text-white ml-2">{{ state.location }}</span>
    </div>
    <div class="flex flex-col mt-10">
      <span class="text-white text-2xl tracking-wider">新北E家</span>
      <span class="text-white text-sm">&lt;工作人员版&gt;</span>
    </div>
  </div>
  <!-- 2 -->
  <div class="flex flex-col space-y-4 p-4 -mt-9">
    <!-- 2.1 -->
    <div class="flex space-x-2 bg-white rounded-md shadow-md p-4 text-gray-500 text-sm">
      <span class="my-auto w-1/12 h-5 bg-blue-400 rounded px-1 text-white">公告</span>
      <span class="my-auto w-2/3">·&nbsp;{{ state.notice }}</span>
      <span class="my-auto">|</span>
      <span class="my-auto flex w-1/12 pl-2">更多</span>
    </div>
    <!-- 2.2 -->
    <div class="jump_box">
      <div class="jump_item" @click="() => router.push('/activity')">活动管理</div>
      <div class="jump_item" @click="() => router.push('/review')">报名审核</div>
    </div>
    <div class="jump_box">
      <div class="jump_item" @click="() => router.push('/person')">先锋人物</div>
      <div class="jump_item" @click="() => router.push('/collection')">乐享集锦</div>
    </div>
  </div>
  <RowDivider />
  <!-- 3 -->
  <div class="flex px-4 mt-4">
    <!-- 3.1 -->
    <div class="flex w-4/5 justify-start">
      <div class="my-auto border_b">
        <div class="text-blue-400 text-xl font-semibold -mb-2">待审核</div>
      </div>
    </div>
    <!-- 3.2 -->
    <div class="flex w-1/5 justify-end" @click="() => router.push('/review')">
      <div class="my-auto text-gray-300 text-sm">查看更多</div>
      <van-icon name="arrow" size="15" color="#D1D5DB" class="my-auto" />
    </div>
  </div>
  <!-- 4 -->
  <div class="pb-12">
    <ReviewList :data="state.data" />
  </div>
  <!-- 5 -->
  <FooterNav :active="0" />
</template>

<script setup lang="ts">
import { reactive } from 'vue'
import { useRouter } from 'vue-router'
import RowDivider from '@/components/Common/RowDivider.vue'
import FooterNav from '@/components/Common/FooterNav.vue'
import ReviewList from '@/components/ReviewList.vue'
import type { reviewItem } from '@/models'
import { getReviewList } from '@/services'

type stateType = {
  location: string,
  notice: string,
  data: reviewItem[]
}

const router = useRouter()
const state: stateType = reactive({
  location: '',
  notice: '',
  data: []
})

async function init() {
  state.location = '国宾社区第一网格'
  state.notice = '众志成城, 共战疫情主题绘画活动'
  state.data = await getReviewList()
}

init()
</script>

<style scoped>
.jump_box {
  @apply flex space-x-4 h-20;
}

.jump_item {
  @apply w-1/2 rounded-md shadow-md;
}

.border_b {
  @apply border-b-4 border-solid border-blue-200;
  @apply border-t-transparent border-x-transparent;
}
</style>
