<template>
  <div class="mobile-mask-demo">
    <tiny-button @click="visible = true">点击展示遮罩层</tiny-button>
    <tiny-mask v-model:visible="visible" :z-index="zIndex"></tiny-mask>
  </div>
</template>

<script>
import { TinyMask, TinyButton } from '@opentiny/vue-mobile'

export default {
  components: {
    TinyMask,
    TinyButton
  },
  data() {
    return {
      visible: false,
      zIndex: 9999
    }
  }
}
</script>

<style scoped>
.mobile-mask-demo {
  height: 100%;
  background: #f4f4f4;
}
</style>
