<template>
  <!-- 1 -->
  <HeaderNav right>
    <template #right>
      <van-icon name="search" size="25" color="white" class="my-auto" />
      <van-icon
        name="plus"
        size="25"
        color="white"
        class="my-auto ml-2"
        @click="() => router.push('/activityAdd')"
      />
    </template>
  </HeaderNav>
  <!-- 2 -->
  <HeadTabs :tabs="state.tabs" @set-active="(index: number) => state.active = index">
    <template #tab>
      <ActivityList :data="state.data[state.active]" />
    </template>
  </HeadTabs>
</template>

<script setup lang="ts">
import { reactive } from 'vue'
import { useRouter } from 'vue-router'
import HeaderNav from '@/components/Common/HeaderNav.vue'
import HeadTabs from '@/components/Common/HeadTabs.vue'
import ActivityList from '@/components/ActivityList.vue'
import type { activityItem } from '@/models'
import { getActivityList } from '@/services'

type stateType = {
  active: number,
  tabs: string[],
  data: activityItem[][]
}

const router = useRouter()
const state: stateType = reactive({
  active: 0,
  tabs: ['未开始', '活动中', '已结束'],
  data: []
})

async function init() {
  state.data[0] = await getActivityList()
  state.data[1] = await getActivityList()
  state.data[2] = []
}

init()
</script>
