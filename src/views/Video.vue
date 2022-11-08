<template>
  <HeaderNav left :title="state.video.title" />
  <div class="video">
    <iframe class="item-video" border="0" scrolling="no" frameborder="no" framespacing="0"
      :src="`https://player.bilibili.com/player.html?bvid=${state.bvid}`"></iframe>
    <div class="item-head">
      <img class="item-avatar" :src="state.video.owner.face" />
      <div class="item-author">{{ state.video.owner.name }}</div>
    </div>
    <div class="item-title">{{ state.video.title }}</div>
    <div class="item-bottom">
      <div class="item-num">
        <van-icon name="play-circle-o" />
        <span>{{ convertNumber(state.video.stat.view) }}</span>
      </div>
      <div class="item-num">
        <van-icon name="comment-circle-o" />
        <span>{{ convertNumber(state.video.stat.danmaku) }}</span>
      </div>
      <div class="item-num">
        <van-icon name="thumb-circle-o" />
        <span>{{ convertNumber(state.video.stat.like) }}</span>
      </div>
      <div class="item-time">{{ convertTime(state.video.pubdate) }}</div>
    </div>
    <div class="item-des">{{ state.video.desc }}</div>
  </div>
</template>

<script setup lang="ts">
import { reactive, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import HeaderNav from '@/components/HeaderNav.vue'
import { videoDetailItem } from '@/models/video'
import { getVideoDetail } from '@/services/video'
import { convertNumber, convertTime } from '@/utils'

interface stateItem {
  bvid: string,
  video: videoDetailItem
}

const route = useRoute()
const state: stateItem = reactive({
  bvid: '',
  video: {
    title: '',
    pubdate: 0,
    desc: '',
    owner: {
      mid: '',
      name: '',
      face: ''
    },
    stat: {
      view: 0,
      danmaku: 0,
      reply: 0,
      favorite: 0,
      coin: 0,
      share: 0,
      like: 0,
      his_rank: 0
    }
  }
})

function loadVideo(): void {
  getVideoDetail(state.bvid).then(res => {
    state.video = res
  })
}

onMounted(() => {
  state.bvid = route.query.bvid?.toString() || ''
  loadVideo()
})
</script>

<style scoped lang="less">
.video {
  .item-video {
    width: 100%;
    height: 240px;
  }

  .item-head {
    display: flex;
    align-items: center;
    margin: 10px 15px;

    .item-avatar {
      width: 40px;
      margin-right: 10px;
      border-radius: 50%;
    }

    .item-author {
      font-size: 16px;
      font-weight: bold;
    }
  }

  .item-title {
    margin: 10px 15px;
    line-height: 30px;
    font-size: 20px;
    font-weight: bold;
    word-break: break-all;
  }

  .item-bottom {
    display: flex;
    align-items: center;
    margin: 10px 15px;
    position: relative;
    color: #999;
    font-size: 14px;

    .item-num {
      margin-right: 10px;

      span {
        margin-left: 5px;
      }
    }

    .item-time {
      position: absolute;
      right: 0;
    }
  }

  .item-des {
    margin: 10px 15px;
    line-height: 25px;
    font-size: 14px;
    word-break: break-all;
  }
}
</style>