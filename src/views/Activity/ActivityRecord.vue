<template>
  <!-- 1 -->
  <HeaderNav right>
    <template #right>
      <van-icon name="search" size="25" color="white" class="my-auto" />
      <van-icon name="share" size="25" color="white" class="my-auto ml-2" />
    </template>
  </HeaderNav>
  <!-- 2 -->
  <RecordList :data="state.data" />
</template>

<script setup lang="ts">
import { reactive } from 'vue'
import HeaderNav from '@/components/Common/HeaderNav.vue'
import RecordList from '@/components/RecordList.vue'
import type { reviewItem } from '@/models'
import { getReviewList } from '@/services'

type stateType = {
  data: reviewItem[]
}

const state: stateType = reactive({
  data: []
})

async function init() {
  state.data = await getReviewList()
}

init()
</script>
