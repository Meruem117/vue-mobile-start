<template>
  <!-- 1 -->
  <HeaderNav :title="route.meta.title" right>
    <template #right>
      <van-icon name="search" size="25" color="white" class="my-auto" />
      <van-icon
        name="plus"
        size="25"
        color="white"
        class="my-auto ml-2"
        @click="() => router.push('/collectionAdd')"
      />
    </template>
  </HeaderNav>
  <!-- 2 -->
  <CollectionList :data="state.data" />
</template>

<script setup lang="ts">
import { reactive } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import HeaderNav from '@/components/Common/HeaderNav.vue'
import CollectionList from '@/components/CollectionList.vue'
import type { collectionItem } from '@/models'
import { getCollectionList } from '@/services'

type stateType = {
  data: collectionItem[]
}

const route = useRoute()
const router = useRouter()
const state: stateType = reactive({
  data: []
})

async function init() {
  state.data = await getCollectionList()
}

init()
</script>
