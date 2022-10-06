<template>
  <BottomTab :active="0" />
</template>

<script setup lang="ts">
import { reactive } from 'vue'
import { useRouter } from 'vue-router'
import BottomTab from '@/components/BottomTab..vue'
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

<style scoped lang="less">

</style>
