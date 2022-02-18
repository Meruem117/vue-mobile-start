<template>
  <!-- 1 -->
  <HeaderNav />
  <!-- 2 -->
  <div class="g_list_container">
    <van-cell-group>
      <van-cell title="报名人" :value="state.data.name" />
      <van-cell title="活动参与人" :value="state.data.attend" />
      <van-cell title="联系电话" :value="state.data.tel" />
      <van-cell title="性别" :value="state.data.gender" />
      <van-cell title="年龄" :value="state.data.age" />
      <van-cell title="居住地址" :value="state.data.location" />
      <van-cell title="报名时间" :value="state.data.time" />
      <van-cell title="打卡时间" :value="state.data.clock" />
    </van-cell-group>
  </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue'
import { useRoute } from 'vue-router'
import HeaderNav from '@/components/Common/HeaderNav.vue'
import type { reviewItem } from '@/models'
import { getRecordById } from '@/services'

type stateType = {
  data: reviewItem
}

const route = useRoute()
const state: stateType = reactive({
  data: {} as reviewItem
})

async function init() {
  if (route.query.id) {
    const id = parseInt(route.query.id.toString())
    state.data = await getRecordById(id)
  }
}

init()
</script>
