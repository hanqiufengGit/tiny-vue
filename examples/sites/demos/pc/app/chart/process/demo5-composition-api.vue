<template>
  <div>
    <tiny-chart-process :options="options"></tiny-chart-process>
  </div>
</template>

<script setup lang="jsx">
import { ref } from 'vue'
import { TinyHuichartsProcess as TinyChartProcess } from '@opentiny/vue'

const options = ref({
  name: 'ProcessBarChart',
  theme: 'hwCloud-light',
  padding: [32, 32, 0, 32],
  state: {
    error: 75,
    warning: 60,
    subwarning: 40
  },
  data: [
    { name: 'UniEPMgr', value: 80 },
    { name: 'SMLoglic', value: 65 },
    { name: 'SSO', value: 55 },
    { name: 'APIMgr', value: 35 },
    { name: null, value: null }
  ]
})
</script>
