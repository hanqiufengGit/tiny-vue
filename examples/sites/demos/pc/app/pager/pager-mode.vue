<template>
  <div class="content">
    显示模式：
    <tiny-radio-group v-model="mode">
      <tiny-radio-button label="number"></tiny-radio-button>
      <tiny-radio-button label="simple"></tiny-radio-button>
      <tiny-radio-button label="complete"></tiny-radio-button>
      <tiny-radio-button label="fixed"></tiny-radio-button>
      <tiny-radio-button label="simplest"></tiny-radio-button>
    </tiny-radio-group>
    <tiny-pager :mode="mode" :total="100"></tiny-pager>
  </div>
</template>

<script>
import { TinyPager, TinyRadioButton, TinyRadioGroup } from '@opentiny/vue'

export default {
  components: {
    TinyPager,
    TinyRadioButton,
    TinyRadioGroup
  },
  data() {
    return {
      mode: 'number'
    }
  }
}
</script>

<style scoped>
.content {
  margin-bottom: 20px;
}
.tiny-radio-group {
  margin-bottom: 10px;
}
</style>
