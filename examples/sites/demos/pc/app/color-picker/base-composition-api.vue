<template>
  <div>
    <tiny-color-picker v-model="color" />
  </div>
</template>

<script setup>
import { TinyColorPicker } from '@opentiny/vue'
import { ref } from 'vue'
const color = ref('#66ccff')
</script>
