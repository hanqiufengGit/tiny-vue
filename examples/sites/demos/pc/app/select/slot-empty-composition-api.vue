<template>
  <tiny-select v-model="value">
    <template #empty>
      <div class="custom-empty">
        <p>APIG 网关异常</p>
        <tiny-button size="small">重新加载</tiny-button>
      </div>
    </template>
  </tiny-select>
</template>

<script setup>
import { ref } from 'vue'
import { TinySelect, TinyButton } from '@opentiny/vue'

const value = ref('')
</script>

<style lang="less" scoped>
.tiny-select {
  width: 280px;
}
.custom-empty {
  padding: 87px 0;
  text-align: center;

  p {
    font-size: 12px;
    color: #595959;
    line-height: 1.5;
  }
  .tiny-button {
    margin-top: 8px;
  }
}
</style>
