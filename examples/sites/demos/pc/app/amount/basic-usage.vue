<template>
  <tiny-amount v-model="value"></tiny-amount>
</template>

<script lang="jsx">
import { TinyAmount } from '@opentiny/vue'

export default {
  components: {
    TinyAmount
  },
  data() {
    return {
      value: 88.88
    }
  }
}
</script>
