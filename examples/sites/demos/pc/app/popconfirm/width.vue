<template>
  <div>
    <tiny-popconfirm :title="title" :message="message" width="200">
      <template #reference>
        <tiny-button>悬浮我提示</tiny-button>
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
      message: '这是气泡确认框提示内容。'
    }
  }
}
</script>
