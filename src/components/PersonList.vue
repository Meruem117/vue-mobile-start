<template>
  <div class="g_container">
    <div
      v-for="item in props.data"
      :key="item.id"
      class="g_list_item"
      @click="() => router.push({ name: 'personDetail', query: { id: item.id } })"
    >
      <!-- 1 -->
      <div class="flex">
        <div class="flex w-4/5">
          <van-icon name="manager" size="20" color="#60A5FA" class="my-auto" />
          <div class="my-auto ml-2 text-base">{{ item.name }}</div>
        </div>
        <div class="flex w-1/5 justify-end">
          <van-icon name="arrow" size="15" color="#9CA3AF" class="my-auto" />
        </div>
      </div>
      <!-- 2 -->
      <div class="flex text-sm">
        <div class="text-blue-400">荣誉称号:&nbsp;</div>
        <div class="text-gray-500">{{ item.title }}</div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
import type { personItem } from '@/models'

const router = useRouter()
const props = defineProps<{
  data: personItem[]
}>()
</script>
