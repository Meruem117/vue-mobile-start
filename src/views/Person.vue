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
        @click="() => router.push('/personAdd')"
      />
    </template>
  </HeaderNav>
  <!-- 2 -->
  <HeadTabs :tabs="state.tabs" @set-active="(index: number) => state.active = index">
    <template #tab>
      <PersonList :data="state.data[state.active]" />
    </template>
  </HeadTabs>
</template>

<script setup lang="ts">
import { reactive } from 'vue'
import { useRouter } from 'vue-router'
import HeaderNav from '@/components/Common/HeaderNav.vue'
import HeadTabs from '@/components/Common/HeadTabs.vue'
import PersonList from '@/components/PersonList.vue'
import type { personItem } from '@/models'
import { getPersonList } from '@/services'

type stateType = {
  active: number,
  tabs: string[],
  data: personItem[][]
}

const router = useRouter()
const state: stateType = reactive({
  active: 0,
  tabs: ['To be reviewed', 'Denied', 'Pass'],
  data: []
})

async function init() {
  state.data[0] = await getPersonList()
  state.data[1] = await getPersonList()
  state.data[2] = []
}

init()
</script>
