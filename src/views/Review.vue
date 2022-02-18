<template>
  <!-- 1 -->
  <HeaderNav right>
    <template #right>
      <van-icon name="search" size="16" color="white" class="my-auto" />
    </template>
  </HeaderNav>
  <!-- 2 -->
  <HeadTabs :tabs="state.tabs" @set-active="(index: number) => state.active = index">
    <template #tab>
      <ReviewList :data="state.data[state.active]" />
    </template>
  </HeadTabs>
</template>

<script setup lang="ts">
import { reactive } from 'vue'
import HeaderNav from '@/components/Common/HeaderNav.vue'
import HeadTabs from '@/components/Common/HeadTabs.vue'
import ReviewList from '@/components/ReviewList.vue'
import type { reviewItem } from '@/models'
import { getReviewList } from '@/services'

type stateType = {
  active: number,
  tabs: string[],
  data: reviewItem[][]
}

const state: stateType = reactive({
  active: 0,
  tabs: ['待审核', '审核不通过', '审核通过'],
  data: []
})

async function init() {
  state.data[0] = await getReviewList()
  state.data[1] = await getReviewList()
  state.data[2] = []
}

init()
</script>
