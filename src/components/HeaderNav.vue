<template>
  <van-nav-bar safe-area-inset-top @click-left="() => router.go(-1)" class="bg-blue-400">
    <template #left v-if="props.left">
      <van-icon name="arrow-left" size="20" color="white" class="my-auto" />
    </template>
    <template #title>
      <div class="title">{{ props.title || route.meta.title }}</div>
    </template>
    <template #right v-if="props.right">
      <slot name="right"></slot>
    </template>
  </van-nav-bar>
</template>

<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()
const props = defineProps<{
  title?: string,
  left?: boolean,
  right?: boolean
}
>()
</script>

<style>
.title {
  color: #fff;
  font-size: 18px;
  letter-spacing: 1px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
</style>
