<template>
  <tiny-button @click="btnClick" :reset-time="0">可以拖动调整窗口大小</tiny-button>
</template>

<script lang="jsx">
import { TinyButton, TinyModal } from '@opentiny/vue-mobile'

export default {
  components: {
    TinyButton
  },
  methods: {
    btnClick() {
      TinyModal.alert({
        message: '可以拖动调整窗口大小',
        resize: true,
        height: 188,
        width: 366,
        tiny_mode: 'mobile'
      })
    }
  }
}
</script>
