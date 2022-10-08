<template>
  <BottomTab :active="0" />
</template>

<script setup lang="ts">
import { reactive } from 'vue'
import { useRouter } from 'vue-router'
import BottomTab from '@/components/BottomTab..vue'

type stateType = {
}

const router = useRouter()
const state: stateType = reactive({
})

async function init() {
}

init()
</script>

<style scoped lang="less">

</style>
