<template>
  <div>
    <tiny-popconfirm :title="title" :message="message" placement="bottom">
      <template #reference>
        <tiny-button>显示在下方</tiny-button>
      </template>
    </tiny-popconfirm>
    <tiny-popconfirm :title="title" :message="message" placement="right" class="ml-8">
      <template #reference>
        <tiny-button>显示在右边</tiny-button>
      </template>
    </tiny-popconfirm>
  </div>
</template>

<script>
import { TinyPopconfirm, TinyButton } from '@opentiny/vue'

export default {
  components: {
    TinyPopconfirm,
    TinyButton
  },
  data() {
    return {
      title: '这是气泡标题',
      message: '这是气泡提示框内容。'
    }
  }
}
</script>

<style scoped>
.ml-8 {
  margin-left: 8px;
}
</style>
