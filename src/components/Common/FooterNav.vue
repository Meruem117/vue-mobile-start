<template>
  <van-tabbar v-model="active" route fixed>
    <van-tabbar-item replace to="/home" icon="wap-home">首页</van-tabbar-item>
    <van-tabbar-item replace to="/mine" icon="manager">我的</van-tabbar-item>
  </van-tabbar>
</template>

<script setup lang="ts">
defineProps({
  active: Number
})
</script>
