<template>
    <van-nav-bar safe-area-inset-top @click-left="back" class="bg-blue-400">
        <template #left>
            <van-icon name="arrow-left" size="20" color="white" class="my-auto" />
        </template>
        <template #title>
            <div class="text-white text-base">报名详情</div>
        </template>
    </van-nav-bar>
    <div class="flex flex-col space-y-4 p-4">
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
import { useRouter, useRoute } from 'vue-router'
import type { reviewItem } from '@/models'
import { getRecordById } from '@/services'

type stateType = {
    data: reviewItem
}

const route = useRoute()
const router = useRouter()
const state: stateType = reactive({
    data: {} as reviewItem
})

async function init() {
    const id = route.query.id
    state.data = await getRecordById(id)
}

function back() {
    router.go(-1)
}

init()
</script>