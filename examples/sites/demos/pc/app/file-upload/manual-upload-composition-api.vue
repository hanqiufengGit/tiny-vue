<template>
  <tiny-file-upload ref="uploadRef" :action="action" :file-list="fileList" :auto-upload="false">
    <template #trigger>
      <tiny-button>选取文件</tiny-button>
    </template>
    <tiny-button style="margin-left: 10px" type="success" @click="submitUpload">上传到服务器</tiny-button>
  </tiny-file-upload>
</template>

<script setup>
import { ref } from 'vue'
import { TinyFileUpload, TinyButton } from '@opentiny/vue'

const action = ref('http://localhost:3000/api/upload')
const fileList = ref([])
const uploadRef = ref()

function submitUpload() {
  uploadRef.value.submit()
}
</script>
