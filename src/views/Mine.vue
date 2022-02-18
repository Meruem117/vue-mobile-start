<template>
    <div class="flex space-x-4 bg-blue-500 h-40 px-4">
        <div class="w-16 h-16 bg-blue-300 flex my-auto rounded-full">
            <div class="w-14 h-14 m-auto rounded-full bg-gray-200"></div>
        </div>
        <div class="flex flex-col my-auto">
            <div class="text-white text-lg">{{ state.name }}</div>
            <div class="text-white text-sm font-thin">{{ state.unit }}</div>
        </div>
    </div>
    <van-cell-group>
        <van-cell v-for="(item, index) in state.cells" :key="index" is-link>
            <template #title>
                <van-icon :name="item.icon" size="16" color="#60A5FA" class="my-auto" />
                <span class="my-auto ml-2">{{ item.title }}</span>
            </template>
        </van-cell>
    </van-cell-group>
    <FooterNav :active="1" />
</template>

<script setup lang="ts">
import { reactive } from 'vue'
import FooterNav from '@/components/FooterNav.vue'

type stateType = {
    name: string,
    unit: string,
    avatar: string,
    cells: { icon: string, title: string }[]
}

const state: stateType = reactive({
    name: '',
    unit: '',
    avatar: '',
    cells: [
        { icon: 'delete', title: '清除缓存' },
        { icon: 'lock', title: '修改密码' },
        { icon: 'info', title: '联系我们' }
    ]
})

async function init() {
    state.name = '张嘉译'
    state.unit = '国宾社区第一网格'
    state.avatar = ''
}

init()
</script>
