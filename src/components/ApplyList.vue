<template>
    <div class="flex flex-col space-y-4 p-4">
        <div
            v-for="item in props.data"
            :key="item.id"
            class="flex flex-col space-y-2 p-4 shadow-md"
        >
            <div class="flex">
                <div class="flex w-4/5">
                    <van-icon name="manager" size="20" color="#60A5FA" class="my-auto" />
                    <div class="my-auto ml-2 text-base">{{ item.name }}</div>
                </div>
                <div class="flex w-1/5 justify-end">
                    <van-icon name="arrow" size="15" color="#D1D5DB" class="my-auto" />
                </div>
            </div>
            <div class="flex">
                <div class="flex flex-col w-4/5 space-y-2 text-sm text-gray-500">
                    <div class="flex">
                        报名时间:&nbsp;
                        <div class="text-blue-400">{{ item.time }}</div>
                    </div>
                    <div>联系电话:&nbsp;{{ item.tel }}</div>
                    <div>居住地址:&nbsp;{{ item.location }}</div>
                </div>
                <van-icon name="phone" size="20" color="#60A5FA" class="m-auto" />
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import type { applyItem } from '@/models'

type propsType = {
    data: applyItem[]
}

const props = defineProps<propsType>()
</script>