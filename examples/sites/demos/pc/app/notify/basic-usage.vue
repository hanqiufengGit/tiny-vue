<template>
  <div class="content">
    <tiny-button @click="handleClick" :reset-time="0">弹出提示框</tiny-button>
    <tiny-button @click="handleClickJxs" :reset-time="0">弹出提示框-jsx</tiny-button>
  </div>
</template>

<script lang="jsx">
import { TinyNotify, TinyButton } from '@opentiny/vue'

export default {
  components: {
    TinyButton
  },
  methods: {
    handleClick() {
      TinyNotify({
        type: 'info',
        title: '通知消息的标题',
        message: '通知消息的正文，通知消息的正文，通知消息的正文，通知消息的正文，通知消息的正文，通知消息的正文',
        position: 'top-right',
        duration: 5000,
        customClass: 'my-custom-cls'
      })
    },
    handleClickJxs() {
      TinyNotify({
        type: 'info',
        title: () => <h4 style="margin:0">通知消息的标题</h4>,
        message: () => (
          <span>通知消息的正文，通知消息的正文，通知消息的正文，通知消息的正文，通知消息的正文，通知消息的正文</span>
        ),

        position: 'top-right',
        duration: 5000,
        customClass: 'my-custom-cls'
      })
    }
  }
}
</script>
