<template>
  <tiny-file-upload ref="uploadRef" :action="action">
    <template #trigger>
      <tiny-button>我是触发源</tiny-button>
    </template>
  </tiny-file-upload>
</template>

<script setup>
import { ref } from 'vue'
import { TinyFileUpload, TinyButton } from '@opentiny/vue'

const action = ref('http://localhost:3000/api/upload')
</script>
