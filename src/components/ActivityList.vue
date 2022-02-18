<template>
    <div class="flex flex-col space-y-4 p-4">
        <div
            v-for="item in props.data"
            :key="item.id"
            class="flex flex-col space-y-2 p-4 shadow-md"
            @click="() => router.push({ name: 'activityDetail', query: { id: item.id } })"
        >
            <div class="flex">
                <div class="flex w-4/5">
                    <van-icon name="manager" size="20" color="#60A5FA" class="my-auto" />
                    <div class="my-auto ml-2 text-base">{{ item.title }}</div>
                </div>
                <div class="flex w-1/5 justify-end">
                    <van-icon name="arrow" size="15" color="#9CA3AF" class="my-auto" />
                </div>
            </div>
            <div class="flex flex-col space-y-2 text-sm text-gray-500">
                <div>活动开始时间:&nbsp;{{ item.start }}</div>
                <div class="flex">
                    <div class="flex w-1/2 p-1 bg-gray-100">
                        <div class="w-2/3">已报名人数</div>
                        <div class="flex w-1/3 justify-end text-blue-400">{{ item.total }}人</div>
                    </div>
                    <div class="flex w-1/2 p-1 bg-gray-100 ml-2">
                        <div class="w-2/3">限额人数</div>
                        <div class="flex w-1/3 justify-end text-blue-400">{{ item.restrict }}人</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
import type { activityItem } from '@/models'

type propsType = {
    data: activityItem[]
}

const router = useRouter()
const props = defineProps<propsType>()
</script>