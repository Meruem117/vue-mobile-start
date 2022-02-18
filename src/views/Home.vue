<template>
    <div class="flex flex-col bg-gradient-to-t from-blue-500 to-blue-400 p-4 pb-12">
        <div class="flex">
            <van-icon name="location-o" color="white" class="my-auto" />
            <div class="text-white ml-1">{{ state.location }}</div>
        </div>
        <div class="flex flex-col mt-10">
            <div class="text-white text-2xl tracking-wider">新北E家</div>
            <div class="text-white text-sm">&lt;工作人员版&gt;</div>
        </div>
    </div>
    <div class="flex flex-col space-y-4 p-4 -mt-9">
        <div class="flex bg-white rounded-md shadow-md px-4 py-3 text-sm">
            <div class="my-auto w-1/12 bg-blue-400 text-white h-5 rounded px-1">公告</div>
            <div class="my-auto w-2/3 ml-2">·&nbsp;{{ state.notice }}</div>
            <div class="my-auto w-1/6 ml-4">|&nbsp;&nbsp;更多</div>
        </div>
        <div class="flex space-x-4 h-20">
            <div class="w-1/2 rounded-md shadow-md" @click="() => router.push('/activity')">活动管理</div>
            <div class="w-1/2 rounded-md shadow-md" @click="() => router.push('/apply')">报名审核</div>
        </div>
        <div class="flex space-x-4 h-20">
            <div class="w-1/2 rounded-md shadow-md" @click="() => router.push('/person')">先锋人物</div>
            <div class="w-1/2 rounded-md shadow-md" @click="() => router.push('/collection')">乐享集锦</div>
        </div>
    </div>
    <div class="w-full h-2 bg-gray-100 mt-2"></div>
    <div class="flex px-4 mt-4">
        <div class="flex w-4/5 justify-start">
            <div class="my-auto border_b">
                <div class="text-blue-400 text-xl font-semibold -mb-2">待审核</div>
            </div>
        </div>
        <div class="flex w-1/5 justify-end" @click="() => router.push('/record')">
            <div class="my-auto text-sm text-gray-300">查看更多</div>
            <van-icon name="arrow" size="15" color="#D1D5DB" class="my-auto" />
        </div>
    </div>
    <div class="pb-12">
        <ApplyList :data="state.data" />
    </div>
    <FooterNav :active="0" />
</template>

<script setup lang="ts">
import { reactive } from 'vue'
import { useRouter } from 'vue-router'
import ApplyList from '@/components/ApplyList.vue'
import FooterNav from '@/components/FooterNav.vue'
import type { applyItem } from '@/models'
import { getApplyList } from '@/services'

type stateType = {
    location: string,
    notice: string,
    data: applyItem[]
}

const router = useRouter()
const state: stateType = reactive({
    location: '',
    notice: '',
    data: []
})

async function init() {
    state.location = '国宾社区第一网格'
    state.notice = '众志成城, 共战疫情主题绘画活动'
    state.data = await getApplyList()
}

init()
</script>

<style scoped>
.border_b {
    @apply border-b-4 border-solid border-blue-200;
    @apply border-t-transparent border-x-transparent;
}
</style>