<template>
  <van-tabbar v-model="props.active" route fixed>
    <van-tabbar-item replace to="/home" icon="wap-home">首页</van-tabbar-item>
    <van-tabbar-item replace to="/chart" icon="diamond">统计</van-tabbar-item>
  </van-tabbar>
</template>

<script setup lang="ts">
const props = defineProps<{
  active: number
}>()
</script>

<style scoped lang="less">

</style>
