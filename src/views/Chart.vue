<template>
  <HeaderNav />
  <BottomTab :active="1" />
</template>

<script setup lang="ts">
import { reactive } from 'vue'
import { useRouter } from 'vue-router'
import HeaderNav from '@/components/HeaderNav.vue'
import BottomTab from '@/components/BottomTabbar.vue'

type stateType = {
}

const router = useRouter()
const state: stateType = reactive({
})
</script>

<style scoped lang="less">

</style>
