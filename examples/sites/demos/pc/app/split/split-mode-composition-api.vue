<template>
  <div class="demo-split set">
    <tiny-split v-model="split1" mode="vertical">
      <template #top>
        <div class="demo-split-pane">上面板</div>
      </template>
      <template #bottom>
        <div class="demo-split-pane">下面板</div>
      </template>
    </tiny-split>
  </div>
</template>

<script setup lang="jsx">
import { ref } from 'vue'
import { TinySplit, TinyModal } from '@opentiny/vue'

const split1 = ref(0.3)
const split2 = ref(0.4)

function movestart() {
  TinyModal.message({ message: '拖拽开始', status: 'info' })
}

function moving() {
  TinyModal.message({ message: '正在拖拽...', status: 'info' })
}

function moveend() {
  TinyModal.message({ message: '拖拽结束', status: 'info' })
}
</script>

<style scoped>
.demo-split {
  height: 200px;
  margin-bottom: 20px;
}

.demo-split-pane {
  width: 100%;
  justify-content: center;
  align-items: center;
  display: flex;
  height: 100%;
}

.line {
  width: 5px;
  height: 200px;
  background-color: black;
}
</style>
