<template>
  <div class="demo-input">
    <tiny-input v-model="input" placeholder="Please input" input-box-type="underline"></tiny-input>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { TinyInput } from '@opentiny/vue'

const input = ref('')
</script>

<style scoped>
.demo-input .tiny-input {
  width: 250px;
}
</style>
