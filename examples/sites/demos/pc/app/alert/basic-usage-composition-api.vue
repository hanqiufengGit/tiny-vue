<template>
  <div>
    <tiny-alert description="type 为默认值 info"></tiny-alert>
    <tiny-alert type="error" description="type 为 error"></tiny-alert>
    <tiny-alert type="success" description="type 为 success"></tiny-alert>
    <tiny-alert type="warning">
      <template #description> type 为 warning </template>
    </tiny-alert>
    <tiny-alert type="simple" description="type 为 simple"></tiny-alert>
  </div>
</template>

<script setup>
import { TinyAlert } from '@opentiny/vue'
</script>
