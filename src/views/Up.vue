<template>
  <HeaderNav left />
  <div class="up-info">
    <div class="up-info-head">
      <img :src="state.up.card.face" />
      <div class="up-info-num">
        <div class="num-follower">{{ convertNumber(state.up.follower) }}</div>
        <div class="num-attention">{{ convertNumber(state.up.card.attention) }}</div>
        <div class="num-like">{{ convertNumber(state.up.like_num) }}</div>
      </div>
    </div>
    <div class="up-info-content"></div>
  </div>
</template>

<script setup lang="ts">
import { reactive, onMounted } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import HeaderNav from '@/components/HeaderNav.vue'
import type { upDetailItem } from '@/models/up'
import type { videoItem } from '@/models/video'
import { getUpDetail } from '@/services/up'
import { getVideos } from '@/services/video'
import { convertNumber } from '@/utils'

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
    archive_count: 0,
    follower: 0,
    like_num: 0
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
.up-info {
  padding: 20px;

  .up-info-head {
    display: flex;
    align-items: center;
    justify-content: space-between;

    img {
      width: 50px;
      border-radius: 50%;
    }

    .up-info-num {
      width: 80%;
      padding: 0 30px;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
  }
}
</style>