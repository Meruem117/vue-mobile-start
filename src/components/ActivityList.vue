<template>
  <div class="g_container">
    <div
      v-for="item in props.data"
      :key="item.id"
      class="g_list_item"
      @click="() => router.push({ name: 'activityDetail', query: { id: item.id } })"
    >
      <!-- 1 -->
      <div class="flex">
        <div class="flex w-4/5">
          <van-icon name="manager" size="20" color="#60A5FA" class="my-auto" />
          <div class="my-auto ml-2 text-base">{{ item.title }}</div>
        </div>
        <div class="flex w-1/5 justify-end">
          <van-icon name="arrow" size="15" color="#9CA3AF" class="my-auto" />
        </div>
      </div>
      <!-- 2 -->
      <div class="flex flex-col space-y-2 text-sm text-gray-500">
        <div>活动开始时间:&nbsp;{{ item.start }}</div>
        <div class="flex">
          <div class="num_box">
            <div class="w-2/3">已报名人数</div>
            <div class="num_text">{{ item.total }}人</div>
          </div>
          <div class="num_box ml-2">
            <div class="w-2/3">限额人数</div>
            <div class="num_text">{{ item.restrict }}人</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
import type { activityItem } from '@/models'

const router = useRouter()
const props = defineProps<{
  data: activityItem[]
}>()
</script>

<style scoped>
.num_box {
  @apply flex w-1/2 p-1 bg-gray-100;
}

.num_text {
  @apply flex w-1/3 justify-end text-blue-400;
}
</style>
