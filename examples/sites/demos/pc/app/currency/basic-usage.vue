<template>
  <div class="demo-currency-class">
    <tiny-currency v-model="value" placeholder="请选择" @change="change"></tiny-currency>
    <p>当前选中值：{{ value }}</p>
  </div>
</template>

<script lang="jsx">
import { TinyCurrency, TinyModal } from '@opentiny/vue'

export default {
  components: {
    TinyCurrency
  },
  data() {
    return {
      value: 'VUV'
    }
  },
  methods: {
    change(value) {
      TinyModal.message({ message: `当前值为 ${value}`, status: 'info' })
    }
  }
}
</script>

<style scoped>
.demo-currency-class {
  width: 280px;
}
p {
  font-size: 14px;
  line-height: 1.5;
  padding: 16px 0;
}
</style>
