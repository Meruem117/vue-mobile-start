<template>
  <div class="flex flex-col">
    <div class="h-32 bg-blue-100"></div>
    <van-tabs v-model:active="active" color="#60A5FA" @change="change">
      <van-tab v-for="(tab, index) in props.tabs" :key="index" :title="tab">
        <div class="w-full h-2 bg-gray-100"></div>
        <slot name="tab"></slot>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const active = ref(0)
const props = defineProps<{
  tabs: string[]
}>()
const emit = defineEmits<{
  (e: 'setActive', index: number): void
}>()

function change() {
  emit('setActive', active.value)
}
</script>
