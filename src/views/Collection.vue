<template>
    <van-nav-bar safe-area-inset-top @click-left="back" class="bg-blue-400">
        <template #left>
            <van-icon name="arrow-left" size="20" color="white" class="my-auto" />
        </template>
        <template #title>
            <div class="text-white text-base">乐享集锦</div>
        </template>
        <template #right>
            <van-icon name="search" size="16" color="white" class="my-auto" />
            <van-icon name="plus" size="16" color="white" class="my-auto ml-2" />
        </template>
    </van-nav-bar>
    <CollectionList :data="state.data" />
</template>

<script setup lang="ts">
import { reactive } from 'vue'
import { useRouter } from 'vue-router'
import CollectionList from '@/components/CollectionList.vue'
import type { collectionitem } from '@/models'
import { getCollectionList } from '@/services'

type stateType = {
    data: collectionitem[]
}

const router = useRouter()
const state: stateType = reactive({
    data: []
})

async function init() {
    state.data = await getCollectionList()
}

function back() {
    router.go(-1)
}

init()
</script>