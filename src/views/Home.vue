<template>
  <!-- 1 -->
  <div class="flex flex-col bg-gradient-to-t from-blue-500 to-blue-400 p-4 pb-12">
    <div class="flex">
      <van-icon name="location-o" color="white" class="my-auto" />
      <span class="text-white ml-2">{{ state.location }}</span>
    </div>
    <div class="flex flex-col mt-10">
      <span class="text-white text-2xl tracking-wider">Vue Mobile</span>
      <span class="text-white text-sm">&lt;Vant&gt;</span>
    </div>
  </div>
  <!-- 2 -->
  <div class="flex flex-col space-y-4 p-4 -mt-9">
    <!-- 2.1 -->
    <div class="flex space-x-2 bg-white rounded-md shadow-md p-4 text-gray-500 text-sm">
      <span class="my-auto w-1/12 h-5 bg-blue-400 rounded px-1 text-white">Intro</span>
      <span class="my-auto w-2/3">·&nbsp;{{ state.notice }}</span>
      <span class="my-auto">|</span>
      <span class="my-auto flex w-1/12 pl-2">More</span>
    </div>
    <!-- 2.2 -->
    <div class="jump_box">
      <div class="jump_item" @click="() => router.push('/activity')">Activity</div>
      <div class="jump_item" @click="() => router.push('/review')">Review</div>
    </div>
    <div class="jump_box">
      <div class="jump_item" @click="() => router.push('/person')">Person</div>
      <div class="jump_item" @click="() => router.push('/collection')">Collection</div>
    </div>
  </div>
  <RowDivider />
  <!-- 3 -->
  <div class="flex px-4 mt-4">
    <!-- 3.1 -->
    <div class="flex w-4/5 justify-start">
      <div class="my-auto border_b">
        <span class="g_title block -mb-2">To be reviewed</span>
      </div>
    </div>
    <!-- 3.2 -->
    <div class="flex w-1/5 justify-end" @click="() => router.push('/review')">
      <span class="my-auto text-gray-300 text-sm">More</span>
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
  state.location = 'XXXXXXXX'
  state.notice = 'xxxxxxxxxxxxxxxx'
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
