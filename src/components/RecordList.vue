<template>
    <div class="flex flex-col space-y-4 p-4">
        <div
            v-for="item in props.data"
            :key="item.id"
            class="flex flex-col space-y-2 p-4 shadow-md"
            @click="() => router.push({ name: 'recordDetail', query: { id: item.id } })"
        >
            <div class="flex">
                <div class="flex w-4/5">
                    <van-icon name="manager" size="20" color="#60A5FA" class="my-auto" />
                    <div class="my-auto ml-2 text-base">{{ item.name }}</div>
                </div>
                <div class="flex w-1/5 justify-end">
                    <van-icon name="arrow" size="15" color="#9CA3AF" class="my-auto" />
                </div>
            </div>
            <div class="flex">
                <div
                    class="text-sm text-gray-300"
                >{{ item.gender }}&nbsp;|&nbsp;{{ item.age }}岁&nbsp;|&nbsp;联系电话:&nbsp;{{ item.tel }}</div>
                <van-icon name="phone" size="10" color="#60A5FA" class="my-auto ml-2" />
            </div>
            <div class="flex flex-col space-y-2 text-sm text-gray-500">
                <div class="flex">
                    <div>活动参与人:&nbsp;</div>
                    <div class="text-blue-400">{{ item.attend }}</div>
                </div>
                <div>报名时间:&nbsp;{{ item.time }}</div>
                <div>打卡时间:&nbsp;{{ item.clock }}</div>
            </div>
            <van-divider />
            <div class="flex">
                <van-icon name="location-o" color="#60A5FA" class="my-auto" />
                <div class="text-gray-500 text-sm ml-1">居住地址:&nbsp;{{ item.location }}</div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
import type { reviewItem } from '@/models'

type propsType = {
    data: reviewItem[]
}

const router = useRouter()
const props = defineProps<propsType>()
</script>