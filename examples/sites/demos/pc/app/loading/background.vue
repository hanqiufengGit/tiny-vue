<template>
  <div id="tiny-demo-loading-background"></div>
</template>

<script>
import { TinyLoading } from '@opentiny/vue'

export default {
  mounted() {
    TinyLoading.service({
      text: '自定义背景颜色和透明度',
      target: document.getElementById('tiny-demo-loading-background'),
      background: 'rgba(0, 0, 0, 0.2)'
    })
  }
}
</script>

<style scoped>
#tiny-demo-loading-background {
  height: 120px;
}
</style>
