<template>
  <div>
    <p>左对齐：</p>
    <br />
    <div class="demo-date-picker-wrap">
      <tiny-date-picker v-model="value" align="left"></tiny-date-picker>
    </div>
    <br />

    <p>居中对齐：</p>
    <br />
    <div class="demo-date-picker-wrap">
      <tiny-date-picker v-model="value" align="center"></tiny-date-picker>
    </div>
    <br />

    <p>右对齐：</p>
    <br />
    <div class="demo-date-picker-wrap">
      <tiny-date-picker v-model="value" align="right"></tiny-date-picker>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { TinyDatePicker } from '@opentiny/vue'

const value = ref('')
</script>

<style scoped>
.demo-date-picker-wrap {
  width: 360px;
}
</style>
