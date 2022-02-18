<template>
    <van-nav-bar safe-area-inset-top @click-left="back" class="bg-blue-400">
        <template #left>
            <van-icon name="arrow-left" size="20" color="white" class="my-auto" />
        </template>
        <template #title>
            <div class="text-white text-base">活动详情</div>
        </template>
    </van-nav-bar>
    <div class="flex flex-col space-y-4 p-4">
        <div class="text-lg text-blue-400 font-semibold">基本信息</div>
        <van-cell-group>
            <van-cell title="所属地区" :value="state.data.area" />
            <van-cell title="主题活动分类" :value="state.data.type" />
            <van-cell title="活动标题" :value="state.data.area" />
            <van-cell title="活动地点" :value="state.data.area" />
            <van-cell title="活动开始时间" :value="state.data.area" />
            <van-cell title="活动结束时间" :value="state.data.area" />
            <van-cell title="限额人数" :value="state.data.area" />
            <van-cell title="单位名称" :value="state.data.area" />
            <van-cell title="活动内容">
                <template #label>
                    <div class="bg-gray-100 p-2 h-20 overflow-auto">{{ state.data.content }}</div>
                </template>
            </van-cell>
        </van-cell-group>
        <div class="w-full h-2 bg-gray-100"></div>
        <div class="flex flex-col space-y-4 px-4">
            <div class="text-lg text-blue-400 font-semibold">精彩影集</div>
            <ImageList :images="state.data.images" />
            <div class="w-full h-2 bg-gray-100"></div>
            <div class="text-lg text-blue-400 font-semibold">精彩视频</div>
            <div class="flex space-x-2">
                <div class="h-12 w-12 bg-blue-500"></div>
                <div class="w-56">
                    <div>{{ state.data.video.name }}</div>
                    <div class="text-sm text-gray-400">时长:&nbsp;{{ state.data.video.length }}</div>
                </div>
                <van-button type="primary" plain class="rounded-md h-6 my-auto">播放</van-button>
            </div>
            <div class="flex space-x-2 h-16 p-2 bg-gray-100" @click="() => router.push('/record')">
                <div class="bg-white rounded-full h-14 w-14 my-auto"></div>
                <div class="my-auto w-3/4">查看报名记录</div>
                <van-icon name="arrow" size="20" color="#9CA3AF" class="my-auto" />
            </div>
            <div
                class="flex space-x-2 h-16 p-2 bg-gray-100"
                @click="() => router.push({ name: 'comment', query: { id: state.data.id } })"
            >
                <div class="bg-white rounded-full h-14 w-14 my-auto"></div>
                <div class="my-auto w-3/4">查看评论记录</div>
                <van-icon name="arrow" size="20" color="#9CA3AF" class="my-auto" />
            </div>
        </div>
        <div class="flex space-x-4 bg-gray-100 p-4">
            <van-button block type="primary" class="rounded-md">保&nbsp;&nbsp;存</van-button>
            <van-button block type="primary" plain class="rounded-md">取&nbsp;&nbsp;消</van-button>
        </div>
    </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import ImageList from '@/components/ImageList.vue'
import type { activityItem } from '@/models'
import { getAcitivityById } from '@/services'

type stateType = {
    data: activityItem
}

const route = useRoute()
const router = useRouter()
const state: stateType = reactive({
    data: {} as activityItem
})

async function init() {
    const id = route.query.id
    state.data = await getAcitivityById(id)
}

function back() {
    router.go(-1)
}

init()
</script>