<template>
  <!-- 1 -->
  <HeaderNav right>
    <template #right>
      <van-icon name="search" size="25" color="white" class="my-auto" />
    </template>
  </HeaderNav>
  <!-- 2 -->
  <CommentList :data="state.data" />
</template>

<script setup lang="ts">
import { reactive } from 'vue'
import { useRoute } from 'vue-router'
import HeaderNav from '@/components/Common/HeaderNav.vue'
import CommentList from '@/components/Common/CommentList.vue'
import type { commentItem } from '@/models'
import { getCommentListByActivityId } from '@/services'

type stateType = {
  data: commentItem[]
}

const route = useRoute()
const state: stateType = reactive({
  data: []
})

async function init() {
  if (route.query.id) {
    const id = parseInt(route.query.id.toString())
    state.data = await getCommentListByActivityId(id)
  }
}

init()
</script>
