<template>
  <div class="g_list_container">
    <van-cell-group v-for="item in props.data" :key="item.id">
      <van-cell>
        <template #title class="flex flex-col">
          <!-- 1 -->
          <div class="flex space-x-2">
            <van-image round width="30" height="30" :src="item.avatar" />
            <div class="flex flex-col w-8/12">
              <span class="text-lg my-auto">{{ item.name }}</span>
              <span class="text-base">{{ item.content }}</span>
            </div>
            <div class="flex h-6 justify-end pl-4">
              <van-icon name="good-job-o" size="15" color="#9CA3AF" class="my-auto" />
              <span class="text-gray-500 my-auto ml-1">{{ item.like }}赞</span>
            </div>
          </div>
          <!-- 2 -->
          <div v-if="item.children" class="flex flex-col bg-gray-100 rounded-md p-2">
            <div v-for="subItem in item.children" :key="subItem.id" class="flex flex-col">
              <div class="flex space-x-2">
                <van-image round width="30" height="30" :src="item.avatar" />
                <div class="flex flex-col">
                  <span class="text-base text-gray-400 my-auto">{{ subItem.name }}</span>
                  <span class="text-base">{{ subItem.content }}</span>
                </div>
              </div>
            </div>
          </div>
          <!-- 3 -->
          <div class="flex text-gray-400">
            <span class="w-5/6">{{ item.time }}</span>
            <span class="w-1/6">查看更多</span>
          </div>
        </template>
      </van-cell>
    </van-cell-group>
  </div>
</template>

<script setup lang="ts">
import type { commentItem } from '@/models'

const props = defineProps<{
  data: commentItem[]
}>()
</script>
