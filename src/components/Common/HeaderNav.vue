<template>
  <van-nav-bar safe-area-inset-top @click-left="() => router.go(-1)" class="bg-blue-400 py-2">
    <template #left>
      <van-icon name="arrow-left" size="20" color="white" class="my-auto" />
    </template>
    <template #title>
      <div class="text-white text-xl tracking-wider">{{ props.title || route.meta.title }}</div>
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
  right?: boolean
}
>()
</script>
