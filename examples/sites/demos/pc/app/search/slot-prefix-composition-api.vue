<template>
  <div>
    <tiny-button class="mb10" @click="changeDisabled"
      >点击切换为“{{ disabled ? '非禁用状态' : '禁用状态' }}”</tiny-button
    >
    <tiny-search class="mb10" v-model="value" placeholder="请输入关键字搜索" :disabled="disabled" clearable>
      <template #prefix>
        <tiny-icon-search />
      </template>
    </tiny-search>
    <tiny-search v-model="value" placeholder="请输入关键词" :disabled="disabled"></tiny-search>
    <div class="mt10">{{ value }}</div>
  </div>
</template>

<script setup lang="jsx">
import { ref } from 'vue'
import { TinySearch, TinyButton } from '@opentiny/vue'
import { iconSearch } from '@opentiny/vue-icon'

const value = ref('')
const disabled = ref(false)

const TinyIconSearch = iconSearch()
const changeDisabled = () => {
  disabled.value = !disabled.value
}
</script>
