<template>
  <tiny-checkbox-group v-model="checked">
    <tiny-checkbox-button label="复选框1"></tiny-checkbox-button>
    <tiny-checkbox-button label="复选框2"></tiny-checkbox-button>
  </tiny-checkbox-group>
</template>

<script>
import { TinyCheckboxButton, TinyCheckboxGroup } from '@opentiny/vue'

export default {
  components: {
    TinyCheckboxButton,
    TinyCheckboxGroup
  },
  data() {
    return {
      checked: ['复选框1']
    }
  }
}
</script>
