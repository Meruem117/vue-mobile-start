<template>
  <HeaderNav />
  <div class="g_container">
    <div class="g_title">基本信息</div>
    <van-form class="flex flex-col space-y-4">
      <!-- 1 -->
      <van-cell-group class="px-2">
        <span>所属地区*</span>
        <van-field v-model="state.data.area" placeholder="请输入所属地区" />
        <span>主题活动分类*</span>
        <van-field
          v-model="state.data.type"
          placeholder="请选择主题活动分类"
          right-icon="arrow"
          @click="state.showTypePicker = true"
        />
        <van-popup v-model:show="state.showTypePicker" position="bottom">
          <van-picker
            :columns="typeColumns"
            @confirm="onConfirmType"
            @cancel="state.showTypePicker = false"
          />
        </van-popup>
        <span>活动标题*</span>
        <van-field v-model="state.data.title" placeholder="请输入活动标题" />
        <span>活动地点*</span>
        <van-field v-model="state.data.location" placeholder="请选择活动地点" right-icon="location" />
        <span>活动开始时间*</span>
        <van-field
          v-model="state.data.start"
          placeholder="请选择活动开始时间"
          right-icon="calendar-o"
          @click="state.showStartPicker = true"
        />
        <van-popup v-model:show="state.showStartPicker" position="bottom">
          <van-datetime-picker
            type="datetime"
            :min-date="minDate"
            :max-date="maxDate"
            @confirm="onConfirmStart"
            @cancel="state.showStartPicker = false"
          />
        </van-popup>
        <span>活动结束时间*</span>
        <van-field
          v-model="state.data.end"
          placeholder="请选择活动结束时间"
          right-icon="calendar-o"
          @click="state.showEndPicker = true"
        />
        <van-popup v-model:show="state.showEndPicker" position="bottom">
          <van-datetime-picker
            type="datetime"
            :min-date="minDate"
            :max-date="maxDate"
            @confirm="onConfirmEnd"
            @cancel="state.showEndPicker = false"
          />
        </van-popup>
        <span>限额人数*</span>
        <van-field v-model="state.data.restrict" placeholder="请输入限额人数" />
        <span>单位名称</span>
        <van-field v-model="state.data.unit" placeholder="请输入单位名称" />
        <span>活动内容*</span>
        <van-field
          v-model="state.data.content"
          rows="5"
          autosize
          type="textarea"
          placeholder="请输入活动具体内容"
          class="bg-gray-100 rounded mt-2"
        />
      </van-cell-group>
      <RowDivider />
      <!-- 2 -->
      <div class="g_container">
        <span class="g_title">精彩影集</span>
        <span class="text-sm">图片上传(可选择多张)</span>
        <van-uploader :after-read="afterRead" />
      </div>
      <RowDivider />
      <!-- 3 -->
      <div class="g_container">
        <span class="g_title">精彩视频</span>
        <VideoBox :video="state.data.video">
          <template #button>
            <div class="flex space-x-2 pl-20">
              <van-button type="primary" plain class="h-6 rounded-md my-auto">上传</van-button>
              <van-button type="danger" plain class="h-6 rounded-md my-auto">删除</van-button>
            </div>
          </template>
        </VideoBox>
      </div>
      <!-- 4 -->
      <div class="bg-gray-100 p-4">
        <van-button block type="primary" native-type="submit" class="rounded-md">提交</van-button>
      </div>
    </van-form>
  </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue'
import HeaderNav from '@/components/Common/HeaderNav.vue'
import VideoBox from '@/components/Common/VideoBox.vue'
import RowDivider from '@/components/Common/RowDivider.vue'
import type { activityItem } from '@/models'
import { convertDatetime } from '@/utils'

type stateType = {
  data: activityItem,
  showTypePicker: boolean,
  showStartPicker: boolean,
  showEndPicker: boolean
}

const state: stateType = reactive({
  data: {} as activityItem,
  showTypePicker: false,
  showStartPicker: false,
  showEndPicker: false
})
const typeColumns = ['type1', 'type2']
const minDate = new Date()
const maxDate = new Date(2025, 10, 1)

function onConfirmType(value: string) {
  state.data.type = value
  state.showTypePicker = false
}

function onConfirmStart(value: Date) {
  state.data.start = convertDatetime(value)
  state.showStartPicker = false
}

function onConfirmEnd(value: Date) {
  state.data.end = convertDatetime(value)
  state.showEndPicker = false
}

function afterRead(file: any) {
  console.log(file)
}
</script>
