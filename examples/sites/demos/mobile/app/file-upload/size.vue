<template>
  <tiny-file-upload ref="upload" :action="action" :header-show="false" size="medium">
    <template #trigger>
      <tiny-button size="medium">上传</tiny-button>
    </template>
  </tiny-file-upload>
</template>

<script lang="jsx">
import { TinyFileUpload, TinyButton } from '@opentiny/vue-mobile'

export default {
  components: {
    TinyFileUpload,
    TinyButton
  },
  data() {
    return {
      action: 'http://localhost:3000/api/upload'
    }
  }
}
</script>
