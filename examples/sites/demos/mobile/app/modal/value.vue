<template>
  <div class="content">
    <tiny-button @click="value1 = !value1" :reset-time="0">默认插槽</tiny-button>
    <tiny-modal v-model="value1" :lock-scroll="false" show-footer>
      <template #default>
        <p>test</p>
      </template>
    </tiny-modal>
  </div>
</template>

<script lang="jsx">
import { TinyButton, TinyModal } from '@opentiny/vue-mobile'

export default {
  components: {
    TinyButton,
    TinyModal
  },
  data() {
    return {
      value1: false
    }
  }
}
</script>
