<template>
  <tiny-file-upload :action="action" :limit="limit">
    <template #trigger>
      <icon-upload></icon-upload>
    </template>
  </tiny-file-upload>
</template>

<script lang="jsx">
import { TinyFileUpload } from '@opentiny/vue-mobile'
import { iconUpload } from '@opentiny/vue-icon'

export default {
  components: {
    TinyFileUpload,
    IconUpload: iconUpload()
  },
  data() {
    return {
      action: 'http://localhost:3000/api/upload',
      limit: 1
    }
  }
}
</script>
