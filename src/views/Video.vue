<template>
  <HeaderNav left :title="state.video.title" />
</template>

<script setup lang="ts">
import { reactive, onMounted } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import HeaderNav from '@/components/HeaderNav.vue'
import { videoDetailItem } from '@/models/video'
import { getVideoDetail } from '@/services/video'
import { convertNumber, convertTime } from '@/utils'

interface stateItem {
  bvid: string,
  video: videoDetailItem
}

const router = useRouter()
const route = useRoute()
const state: stateItem = reactive({
  bvid: '',
  video: {} as videoDetailItem
})

function loadVideo(): void {

}

onMounted(() => {
  state.bvid = route.query.bvid?.toString() || ''
  loadVideo()
})
</script>

<style scoped lang="less">

</style>