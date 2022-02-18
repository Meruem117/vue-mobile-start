<template>
    <van-nav-bar safe-area-inset-top @click-left="back" class="bg-blue-400">
        <template #left>
            <van-icon name="arrow-left" size="20" color="white" class="my-auto" />
        </template>
        <template #title>
            <div class="text-white text-base">先锋人物</div>
        </template>
        <template #right>
            <van-icon name="search" size="16" color="white" class="my-auto" />
            <van-icon name="plus" size="16" color="white" class="my-auto ml-2" />
        </template>
    </van-nav-bar>
    <div class="flex flex-col">
        <div class="h-28 bg-blue-100"></div>
        <van-tabs v-model:active="state.active" color="#60A5FA">
            <van-tab title="待审核">
                <div class="w-full h-2 bg-gray-100"></div>
                <PersonList :data="state.data" />
            </van-tab>
            <van-tab title="审核不通过">
                <div class="w-full h-2 bg-gray-100"></div>
                <PersonList :data="state.data" />
            </van-tab>
            <van-tab title="审核通过">
                <div class="w-full h-2 bg-gray-100"></div>
                <PersonList :data="state.data" />
            </van-tab>
        </van-tabs>
    </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue'
import { useRouter } from 'vue-router'
import PersonList from '@/components/PersonList.vue'
import type { personItem } from '@/models'
import { getPersonList } from '@/services'

type stateType = {
    active: number,
    data: personItem[]
}

const router = useRouter()
const state: stateType = reactive({
    active: 0,
    data: []
})

async function init() {
    state.data = await getPersonList()
}

function back() {
    router.go(-1)
}

init()
</script>
