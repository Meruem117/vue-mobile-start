<template>
  <HeaderNav />
  <!-- 1 -->
  <div class="g_container">
    <div class="g_title">基本信息</div>
    <van-cell-group>
      <van-cell title="名称" :value="state.data.title" />
      <van-cell>
        <span>图片上传</span>
        <ImageList :images="state.data.images" class="mt-2" />
      </van-cell>
    </van-cell-group>
  </div>
  <RowDivider />
  <!-- 2 -->
  <div class="flex px-4 mt-4">
    <div class="w-4/5">
      <span class="g_title block">评论记录</span>
    </div>
    <div
      class="flex w-1/5 justify-end"
      @click="() => router.push({ name: 'comment', query: { id: state.data.id } })"
    >
      <span class="my-auto text-blue-400 text-sm">更多评论</span>
      <van-icon name="arrow" size="15" color="#60a5fa" class="my-auto" />
    </div>
  </div>
  <CommentList :data="state.comment" />
</template>

<script setup lang="ts">
import { reactive } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import HeaderNav from '@/components/Common/HeaderNav.vue'
import ImageList from '@/components/Common/ImageList.vue'
import RowDivider from '@/components/Common/RowDivider.vue'
import CommentList from '@/components/Common/CommentList.vue'
import type { collectionItem, commentItem } from '@/models'
import { getCollectionById, getCommentListById } from '@/services'

type stateType = {
  data: collectionItem,
  comment: commentItem[]
}

const route = useRoute()
const router = useRouter()
const state: stateType = reactive({
  data: {} as collectionItem,
  comment: []
})

async function init() {
  if (route.query.id) {
    const id = parseInt(route.query.id.toString())
    state.data = await getCollectionById(id)
    state.comment = await getCommentListById(id)
  }
}

init()
</script>
