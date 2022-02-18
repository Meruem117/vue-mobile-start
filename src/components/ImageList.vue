<template>
    <div class="flex space-x-4 overflow-auto">
        <van-image
            v-for="image, index in props.images"
            :key="index"
            width="120"
            height="100"
            :src="image"
        />
    </div>
</template>

<script setup lang="ts">
type propsType = {
    images: string[]
}

const props = defineProps<propsType>()
</script>