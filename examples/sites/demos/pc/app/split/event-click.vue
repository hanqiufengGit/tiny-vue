<template>
  <div class="split-v-model">
    <tiny-split
      v-model="split1"
      trigger-simple
      @left-top-click="leftTopClick"
      @right-bottom-click="rightBottomClick"
      collapse-left-top
      collapse-right-bottom
    >
      <template #left>
        <div class="demo-split-pane">左面板</div>
      </template>
      <template #right>
        <div class="demo-split-pane">右面板</div>
      </template>
    </tiny-split>
  </div>
</template>

<script>
import { TinySplit, TinyModal } from '@opentiny/vue'

export default {
  components: {
    TinySplit
  },
  data() {
    return {
      split1: 0.5
    }
  },
  methods: {
    leftTopClick() {
      TinyModal.message('点击事件 1')
    },
    rightBottomClick() {
      TinyModal.message('点击事件 2')
    }
  }
}
</script>

<style scoped>
.split-v-model {
  height: 200px;
}

.demo-split-pane {
  width: 100%;
  justify-content: center;
  align-items: center;
  display: flex;
  height: 100%;
}
</style>
