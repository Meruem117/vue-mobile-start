<template>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
import type { activityItem } from '@/models'

const router = useRouter()
const props = defineProps<{
  data: activityItem[]
}>()
</script>

<style scoped lang="less">

</style>
