<template>
  <div class="content">
    <tiny-button @click="baseClick" :reset-time="0">默认3000ms后自动关闭提示框 </tiny-button>
    <tiny-button @click="successClick" :reset-time="0"> 500ms后自动关闭提示框 </tiny-button>
    <tiny-button @click="errorClick" :reset-time="0"> 5000ms后自动关闭提示框 </tiny-button>
  </div>
</template>

<script>
import { TinyButton, TinyModal } from '@opentiny/vue'

export default {
  components: {
    TinyButton
  },
  methods: {
    baseClick() {
      TinyModal.message({ message: '默认3000ms后自动关闭提示框' })
    },
    successClick() {
      TinyModal.message({
        message: '500ms后自动关闭提示框',
        status: 'success',
        duration: '500'
      })
    },
    errorClick() {
      TinyModal.message({
        message: '5000ms后自动关闭提示框',
        status: 'error',
        duration: '5000'
      })
    }
  }
}
</script>
