<template>
  <div>
    <div style="margin-bottom: 16px">
      <span>功能控制：</span>
      <tiny-button @click="toggleAllBtn()">
        {{ showAllBtn ? '不显示 all-btns' : '显示 all-btns' }}
      </tiny-button>
      <tiny-button @click="toggleDisable()">
        {{ alwaysDisable ? '无选时中禁用' : '无选中时高亮' }}
      </tiny-button>
    </div>
    <tiny-transfer
      v-model="value"
      :data="data"
      :show-all-btn="showAllBtn"
      :button-texts="['left', 'right']"
      :to-left-disable="alwaysDisable"
      :to-right-disable="alwaysDisable"
    ></tiny-transfer>
  </div>
</template>

<script setup lang="jsx">
import { ref } from 'vue'
import { TinyTransfer, TinyButton } from '@opentiny/vue'

const generateData = () => {
  const data = []

  for (let i = 0; i <= 15; i++) {
    data.push({
      key: i,
      label: `备选项 ${i}`,
      disabled: i % 4 === 0
    })
  }

  return data
}

const data = ref(generateData())
const value = ref([1, 4])
const showAllBtn = ref(true)
const alwaysDisable = ref(false)

function toggleAllBtn() {
  showAllBtn.value = !showAllBtn.value
}
function toggleDisable() {
  alwaysDisable.value = !alwaysDisable.value
}
</script>
