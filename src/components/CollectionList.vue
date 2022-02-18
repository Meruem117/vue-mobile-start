<template>
  <div class="g_container">
    <div
      v-for="item in props.data"
      :key="item.id"
      class="g_list_item"
      @click="() => router.push({ name: 'collectionDetail', query: { id: item.id } })"
    >
      <div class="flex">
        <div class="flex w-4/5">
          <van-icon name="manager" size="20" color="#60A5FA" class="my-auto" />
          <div class="my-auto ml-2 text-base">{{ item.title }}</div>
        </div>
        <div class="flex w-1/5 justify-end">
          <van-icon name="arrow" size="15" color="#9CA3AF" class="my-auto" />
        </div>
      </div>
      <div class="flex text-sm text-gray-500">发布时间:&nbsp;{{ item.time }}</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
import type { collectionItem } from '@/models'

const router = useRouter()
const props = defineProps<{
  data: collectionItem[]
}>()
</script>
