<template></template>

<script setup lang="ts">
import { reactive } from 'vue'
import { useRoute } from 'vue-router'
import type { commentItem } from '@/models'
import { getCommentListByActivityId } from '@/services'

type stateType = {
    data: commentItem[]
}

const route = useRoute()
const state: stateType = reactive({
    data: []
})

async function init() {
    const id = route.query.id
    state.data = await getCommentListByActivityId(id)
}

init()
</script>
