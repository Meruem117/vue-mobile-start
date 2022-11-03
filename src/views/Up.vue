<template>
  <HeaderNav left />

</template>

<script setup lang="ts">
import { reactive, onMounted } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import HeaderNav from '@/components/HeaderNav.vue'
import type { upDetailItem } from '@/models/up'
import type { videoItem } from '@/models/video'
import { getUpDetail } from '@/services/up'
import { getVideos } from '@/services/video'

interface stateItem {
  mid: string,
  up: upDetailItem,
  videos: videoItem[],
  page: number
}

const router = useRouter()
const route = useRoute()
const state: stateItem = reactive({
  mid: '',
  up: {
    card: {
      mid: '',
      name: '',
      sex: '',
      face: '',
      sign: '',
      fans: 0,
      attention: 0
    },
    archive_count: 0
  },
  page: 1,
  videos: [],
})

function getUpInfo(): void {
  getUpDetail(state.mid).then(res => {
    state.up = res
  })
}

function getVideoList(): void {
  getVideos(state.mid, state.page).then(res => {
    state.page++
    state.videos = res
  })
}

onMounted(() => {
  state.mid = route.query.mid?.toString() || ''
  getUpInfo()
  getVideoList()
})
</script>

<style scoped lang="less">

</style>