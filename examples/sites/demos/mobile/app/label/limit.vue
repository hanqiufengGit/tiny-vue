<template>
  <div class="mobile-label-demo">
    <h2>是否限制文本数</h2>
    <tiny-label :limit="5" label="123456789"></tiny-label>
  </div>
</template>

<script>
import { TinyLabel } from '@opentiny/vue-mobile'

export default {
  components: {
    TinyLabel
  }
}
</script>

<style scoped>
.mobile-label-demo {
  height: 100%;
  background: #f4f4f4;
  overflow-y: auto;
}
</style>
