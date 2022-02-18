<template>
  <keep-alive>
    <router-view v-if="route.meta.keepAlive" />
  </keep-alive>
  <router-view v-if="!route.meta.keepAlive" />
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'

const route = useRoute()
</script>
