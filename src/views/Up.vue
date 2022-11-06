<template>
  <HeaderNav left />
  <div class="up-info">
    <div class="up-info-head">
      <img :src="state.up.card.face" />
      <div class="up-info-num">
        <div class="num-item">
          {{ convertNumber(state.up.follower) }}
          <span>粉丝</span>
        </div>
        <div class="num-item">
          {{ convertNumber(state.up.card.attention) }}
          <span>关注</span>
        </div>
        <div class="num-item">
          {{ convertNumber(state.up.like_num) }}
          <span>获赞</span>
        </div>
      </div>
    </div>
    <div class="up-info-content">
      <div class="up-info-name">{{ state.up.card.name }}</div>
      <div class="up-info-title"><span>{{ state.up.card.Official.title }}</span></div>
      <div class="up-info-sign">{{ state.up.card.sign }}</div>
    </div>
  </div>
  <van-divider>投稿</van-divider>
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
      attention: 0,
      Official: {
        title: ''
      }
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
  padding: 20px 40px;

  .up-info-head {
    display: flex;
    align-items: center;
    justify-content: space-between;

    img {
      width: 60px;
      border-radius: 50%;
    }

    .up-info-num {
      width: 60%;
      padding: 0 30px;
      display: flex;
      align-items: center;
      justify-content: space-between;

      .num-item {
        display: flex;
        flex-direction: column;
        align-items: center;
        font-size: 15px;

        span {
          color: #999;
          font-size: 12px;
        }
      }
    }
  }

  .up-info-content {
    margin-top: 20px;

    .up-info-name {
      font-size: 21px;
      font-weight: bold;
    }

    .up-info-title {
      margin-top: 10px;

      span {
        padding: 4px 10px;
        font-size: 12px;
        border-radius: 15px;
        background-color: #f3f4f6;
      }
    }

    .up-info-sign {
      margin-top: 10px;
      font-size: 14px;
      line-height: 20px;
      word-break: break-all;
    }
  }
}
</style>