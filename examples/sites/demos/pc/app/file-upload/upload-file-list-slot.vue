<template>
  <tiny-file-upload name="fileName" :action="action" show-file-list :file-list="fileList">
    <tiny-button>点击上传</tiny-button>
    <template #file="data">
      <div>{{ data.file.name }}</div>
    </template>
  </tiny-file-upload>
</template>

<script>
import { TinyFileUpload, TinyButton } from '@opentiny/vue'

export default {
  components: {
    TinyFileUpload,
    TinyButton
  },
  data() {
    return {
      action: 'http://localhost:3000/api/upload',
      fileList: [
        {
          name: 'test1',
          url: `${import.meta.env.VITE_APP_BUILD_BASE_URL}static/images/ld.png`
        },
        {
          name: 'test2',
          url: `${import.meta.env.VITE_APP_BUILD_BASE_URL}static/images/ry.png`
        }
      ]
    }
  }
}
</script>
