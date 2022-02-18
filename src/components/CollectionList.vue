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
                    <div class="my-auto ml-2 text-base">{{ item.title }}</div>
                </div>
                <div class="flex w-1/5 justify-end">
                    <van-icon name="arrow" size="15" color="#9CA3AF" class="my-auto" />
                </div>
            </div>
            <div class="flex text-sm text-gray-500">发布时间:&nbsp;{{ item.time }}</div>
        </div>
    </div>
</template>

<script setup lang="ts">
import type { collectionitem } from '@/models'

type propsType = {
    data: collectionitem[]
}

const props = defineProps<propsType>()
</script>