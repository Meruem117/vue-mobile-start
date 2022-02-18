<template>
  <div class="g_list_container">
    <div
      v-for="item in props.data"
      :key="item.id"
      class="g_list_item"
      @click="() => router.push({ name: 'reviewDetail', query: { id: item.id } })"
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
      <div class="flex">
        <div class="flex flex-col w-4/5 space-y-2 text-sm text-gray-500">
          <div class="flex">
            <div>报名时间:&nbsp;</div>
            <div class="text-blue-400">{{ item.time }}</div>
          </div>
          <div>联系电话:&nbsp;{{ item.tel }}</div>
          <div>居住地址:&nbsp;{{ item.location }}</div>
        </div>
        <van-icon name="phone-circle" size="20" color="#60A5FA" class="m-auto" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
import type { reviewItem } from '@/models'

const router = useRouter()
const props = defineProps<{
  data: reviewItem[]
}>()
</script>
