<template>
  <HeaderNav />
  <div class="user-info"></div>
  <van-divider>用户信息</van-divider>
  <van-row>
    <van-col offset="12" span="8">
      <van-image width="100" height="100" :src="GENDER_AVATAR_SRC[getGender(store.$state.user.gender)]" />
    </van-col>
    <van-col offset="12" span="16"></van-col>
  </van-row>
  <van-divider>关注列表</van-divider>
  <BottomTab :active="0" />
</template>

<script setup lang="ts">
import { reactive } from 'vue'
import { useRouter } from 'vue-router'
import HeaderNav from '@/components/HeaderNav.vue'
import BottomTab from '@/components/BottomTab.vue'
import { useUserStore } from '@/stores/user'
import { getGender } from '@/utils'
import { GENDER_AVATAR_SRC } from '@/constant'

type stateType = {
}

const router = useRouter()
const store = useUserStore()
const state: stateType = reactive({
})

</script>

<style scoped lang="less">

</style>
