<template>
  <div class="flex">
    <div class="flex space-x-2 w-3/5">
      <div class="h-12 w-12 bg-blue-500"></div>
      <div class="flex flex-col space-y-1">
        <span>{{ props.video ? props.video.name : '暂无' }}</span>
        <span class="text-gray-400 text-sm">
          <span>时长:&nbsp;</span>
          <span>{{ props.video ? props.video.length : '暂无' }}</span>
        </span>
      </div>
    </div>
    <div class="flex justify-end space-x-2 w-2/5 pr-1">
      <slot name="button"></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { videoItem } from '@/models'

const props = defineProps<{
  video: videoItem
}>()
</script>
