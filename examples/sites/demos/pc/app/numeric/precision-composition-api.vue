<template>
  <p>数值精度：</p>
  <tiny-numeric v-model="value" :precision="precision" class="numeric-class"></tiny-numeric>
  <p>数值格式：</p>
  <tiny-numeric style="width: 300px" v-model="value1" :format="format" class="numeric-class"></tiny-numeric>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'
import { TinyNumeric } from '@opentiny/vue'

const value = ref(1)
const precision = ref(2)
const value1 = ref(123456879.445566)
const format = reactive({
  zeroize: true, // 是否保留多余的 0 字符
  fraction: 4, // 保留小数位数
  rounding: 0, // 舍入点
  prefix: '$', // 前置标识
  groupSize: 3, // 整数部分分组间隔，即第一个分组位数
  secondaryGroupSize: 2, // 整数部分第二级分组间隔，不设置或为 0 时 自动取 groupSize
  groupSeparator: ',', // 整数部分分组分隔符
  decimalSeparator: '.', // 小数点符号
  fractionGroupSize: 0, // 小数部分分组间隔
  fractionGroupSeparator: '\xA0', // 小数分组分隔符
  suffix: '@' // 后置标识
})
</script>

<style scoped>
.numeric-class {
  margin: 4px 0px;
}
p {
  font-size: 14px;
  line-height: 1.5;
  padding: 16px 0;
}
</style>
