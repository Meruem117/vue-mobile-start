<template>
    <van-nav-bar safe-area-inset-top @click-left="back" class="bg-blue-400">
        <template #left>
            <van-icon name="arrow-left" size="20" color="white" class="my-auto" />
        </template>
        <template #title>
            <div class="text-white text-base">活动管理</div>
        </template>
        <template #right>
            <van-icon name="search" size="16" color="white" class="my-auto" />
            <van-icon
                name="plus"
                size="16"
                color="white"
                class="my-auto ml-2"
                @click="() => router.push('/activityAdd')"
            />
        </template>
    </van-nav-bar>
    <div class="flex flex-col">
        <div class="h-28 bg-blue-100"></div>
        <van-tabs v-model:active="state.active" color="#60A5FA">
            <van-tab title="未开始">
                <div class="w-full h-2 bg-gray-100"></div>
                <ActivityList :data="state.data" />
            </van-tab>
            <van-tab title="活动中">
                <div class="w-full h-2 bg-gray-100"></div>
                <ActivityList :data="state.data" />
            </van-tab>
            <van-tab title="已结束">
                <div class="w-full h-2 bg-gray-100"></div>
                <ActivityList :data="state.data" />
            </van-tab>
        </van-tabs>
    </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue'
import { useRouter } from 'vue-router'
import ActivityList from '@/components/ActivityList.vue'
import type { activityItem } from '@/models'
import { getActivityList } from '@/services'

type stateType = {
    active: number,
    data: activityItem[]
}

const router = useRouter()
const state: stateType = reactive({
    active: 0,
    data: []
})

async function init() {
    state.data = await getActivityList()
}

function back() {
    router.go(-1)
}

init()
</script>
