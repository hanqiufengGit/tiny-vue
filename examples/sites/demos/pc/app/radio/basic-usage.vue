<template>
  <div>
    <tiny-radio v-model="value" label="1">选项一</tiny-radio>
    <tiny-radio v-model="value" label="2">选项二</tiny-radio>
  </div>
</template>

<script>
import { TinyRadio } from '@opentiny/vue'

export default {
  components: {
    TinyRadio
  },
  data() {
    return {
      value: '1'
    }
  }
}
</script>
