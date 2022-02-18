<template>
    <van-nav-bar safe-area-inset-top @click-left="back" class="bg-blue-400">
        <template #left>
            <van-icon name="arrow-left" size="20" color="white" class="my-auto" />
        </template>
        <template #title>
            <div class="text-white text-base">报名记录</div>
        </template>
        <template #right>
            <van-icon name="search" size="16" color="white" class="my-auto" />
            <van-icon name="share" size="16" color="white" class="my-auto ml-2" />
        </template>
    </van-nav-bar>
    <RecordList :data="state.data" />
</template>

<script setup lang="ts">
import { reactive } from 'vue'
import { useRouter } from 'vue-router'
import RecordList from '@/components/RecordList.vue'
import type { applyItem } from '@/models'
import { getApplyList } from '@/services'

type stateType = {
    active: number,
    data: applyItem[]
}

const router = useRouter()
const state: stateType = reactive({
    active: 0,
    data: []
})

async function init() {
    state.data = await getApplyList()
}

function back() {
    router.go(-1)
}

init()
</script>
