<template>
  <div class="g_list_container">
    <div
      v-for="item in props.data"
      :key="item.id"
      class="g_list_item"
      @click="() => router.push({ name: 'recordDetail', query: { id: item.id } })"
    >
      <!-- 1 -->
      <div class="flex">
        <div class="flex w-4/5">
          <van-icon name="manager" size="20" color="#60A5FA" class="my-auto" />
          <span class="text-base my-auto ml-2">{{ item.name }}</span>
        </div>
        <div class="flex w-1/5 justify-end">
          <van-icon name="arrow" size="15" color="#9CA3AF" class="my-auto" />
        </div>
      </div>
      <!-- 2 -->
      <div class="flex">
        <span
          class="text-gray-300 text-sm"
        >{{ GENDER_TEXT[item.gender] }}&nbsp;|&nbsp;{{ item.age }}岁&nbsp;|&nbsp;联系电话:&nbsp;{{ item.tel }}</span>
        <van-icon name="phone" size="10" color="#60A5FA" class="my-auto ml-2" />
      </div>
      <!-- 3 -->
      <div class="flex flex-col space-y-2 text-gray-500 text-sm">
        <div>
          <span>活动参与人:&nbsp;</span>
          <span class="text-blue-400">{{ item.attend }}</span>
        </div>
        <span>报名时间:&nbsp;{{ item.time }}</span>
        <span>打卡时间:&nbsp;{{ item.clock }}</span>
      </div>
      <!-- 4 -->
      <van-divider />
      <div class="flex">
        <van-icon name="location-o" color="#60A5FA" class="my-auto" />
        <span class="text-gray-500 text-sm ml-1">居住地址:&nbsp;{{ item.location }}</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
import type { reviewItem } from '@/models'
import { GENDER_TEXT } from '@/constant'

const router = useRouter()
const props = defineProps<{
  data: reviewItem[]
}>()
</script>
