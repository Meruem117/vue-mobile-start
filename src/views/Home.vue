<template>
  <HeaderNav />
  <div class="main-container">
    <van-divider>用户信息</van-divider>
    <van-row justify="space-around" gutter="20">
      <van-col span="6">
        <van-image width="100" height="100" :src="GENDER_AVATAR_SRC[getGender(store.$state.user.gender)]" />
      </van-col>
      <van-col span="16">
        <div class="user-info">
          <div class="info-name info-card">姓名：{{ store.$state.user.name || '暂无' }}</div>
          <div class="info-content">
            <div class="info-content-item info-card">性别：{{ store.$state.user.gender || '暂无' }}</div>
            <div class="info-content-item info-card">地区：{{ store.$state.user.location || '暂无' }}</div>
          </div>
        </div>
      </van-col>
    </van-row>
    <van-divider>关注列表</van-divider>
  </div>
  <BottomTab :active="0" />
</template>

<script setup lang="ts">
import { reactive, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import HeaderNav from '@/components/HeaderNav.vue'
import BottomTab from '@/components/BottomTabbar.vue'
import { useUserStore } from '@/stores/user'
import type { upItem } from '@/models/up'
import { getUps } from '@/services/up'
import { getGender } from '@/utils'
import { GENDER_AVATAR_SRC } from '@/constant'

type stateType = {
  upList: upItem[],
  page: number
}

const router = useRouter()
const store = useUserStore()
const state: stateType = reactive({
  upList: [],
  page: 0
})

function getUpList(): void {
  getUps(state.page).then(res => {
    state.upList = res
  })
}

onMounted(() => {
  getUpList()
})
</script>

<style scoped lang="less">
.main-container {
  padding: 20px;

  .user-info {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    .info-card {
      display: flex;
      align-items: center;
      padding-left: 12px;
      border-radius: 8px;
      box-shadow: 0 0 8px rgba(0, 0, 0, .1);
    }

    .info-name {
      height: 42%;
      font-size: 16px;
      font-weight: bold;
    }

    .info-content {
      height: 42%;
      display: flex;
      justify-content: space-between;

      .info-content-item {
        font-size: 14px;

        &:first-child {
          width: 35%;
        }

        &:last-child {
          width: 50%;
        }
      }
    }
  }
}
</style>
