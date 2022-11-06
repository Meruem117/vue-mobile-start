<template>
  <HeaderNav left :title="state.up.card.name" />
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
  <div class="video-list">
    <van-pull-refresh class="video-scroll-content" v-model="state.refreshing" @refresh="onRefresh">
      <van-empty description="暂无数据" v-if="state.videos.length === 0" />
      <van-list class="video-list-content" v-else v-model="state.loading" :immediate-check="false"
        :finished="state.finished" finished-text="没有更多了~~" @load="loadVideoList" :offset="20">
        <div class="video-list-item" v-for="(item, index) in state.videos" :key="index" @click="toDetail(item.bvid)">
          <div class="item-head">
            <img class="item-avatar" :src="state.up.card.face" />
            <div class="item-author">{{ item.author }}</div>
            <div class="item-time">{{ convertTime(item.created) }}</div>
          </div>
          <img class="item-pic" :src="item.pic" />
          <div class="item-title">{{ item.title }}</div>
          <div class="item-bottom">
            <div class="item-bottom-num"><span>播放</span>{{ convertNumber(item.play) }}</div>
            <div class="item-bottom-num"><span>评论</span>{{ convertNumber(item.comment) }}</div>
            <div class="item-bottom-time">{{ item.length }}</div>
          </div>
        </div>
      </van-list>
    </van-pull-refresh>
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
import { convertNumber, convertTime } from '@/utils'
import { BASE_LIST_SIZE } from '@/constant'

interface stateItem {
  mid: string,
  up: upDetailItem,
  videos: videoItem[],
  page: number,
  loading: boolean,
  refreshing: boolean,
  finished: boolean
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
  loading: false,
  refreshing: false,
  finished: false
})

function getUpInfo(): void {
  getUpDetail(state.mid).then(res => {
    state.up = res
  })
}

function loadVideoList(): void {
  getVideos(state.mid, state.page).then(res => {
    state.page++
    state.loading = false
    state.refreshing = false
    state.finished = res.length < BASE_LIST_SIZE
    if (state.page === 0) {
      state.videos = res
    } else {
      state.videos = state.videos.concat(res)
    }
  })
}

function onRefresh(): void {
  state.page = 0
  state.videos = []
  loadVideoList()
}

function toDetail(bvid: string): void {
  router.push({
    path: '/video',
    query: {
      bvid
    }
  })
}

onMounted(() => {
  state.mid = route.query.mid?.toString() || ''
  getUpInfo()
  loadVideoList()
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

.video-list {
  padding-bottom: 40px;

  .video-scroll-content {
    min-height: calc(100vh - 500px);

    .video-list-content {
      padding: 10px;

      .video-list-item {
        margin-bottom: 15px;
        padding: 10px 16px;
        position: relative;
        border-radius: 8px;
        box-shadow: 0 0 10px rgba(0, 0, 0, .1);

        .item-head {
          padding-left: 50px;

          .item-avatar {
            position: absolute;
            top: 10px;
            left: 16px;
            width: 40px;
            border-radius: 50%;
          }

          .item-author {
            font-size: 16px;
            font-weight: bold;
          }

          .item-time {
            margin-top: 5px;
            color: #999;
            font-size: 14px;
          }
        }

        .item-pic {
          width: 100%;
          margin-top: 10px;
          border-radius: 6px;
        }

        .item-title {
          margin-top: 5px;
          font-size: 16px;
          font-weight: bold;
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
        }

        .item-bottom {
          display: flex;
          align-items: center;
          overflow: hidden;
          margin-top: 10px;

          .item-bottom-num {
            margin-right: 10px;
            font-size: 14px;

            span {
              margin-right: 5px;
              color: #999;
            }
          }

          .item-bottom-time {
            position: absolute;
            right: 16px;
            bottom: 10px;
            font-size: 14px;
          }
        }
      }
    }
  }

}
</style>