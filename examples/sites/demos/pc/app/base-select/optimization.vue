<template>
  <div>
    <p>单选：</p>
    <tiny-base-select v-model="value1" :options="options" optimization @change="onChange"></tiny-base-select>
    <p>多选：</p>
    <tiny-base-select
      v-model="value2"
      optimization
      multiple
      collapse-tags
      :multiple-limit="5"
      :options="options"
      @change="onChange"
    ></tiny-base-select>
  </div>
</template>

<script>
import { TinyBaseSelect, TinyModal } from '@opentiny/vue'

const buildOptions = () =>
  Array.from({ length: 100000 }).map((item, i) => JSON.parse(`{"value":"选项 ${i}","label":"北京 ${i}"}`))

export default {
  components: {
    TinyBaseSelect
  },
  data() {
    return {
      value1: '',
      value2: [],
      options: buildOptions()
    }
  },
  methods: {
    onChange(value) {
      TinyModal.message({
        message: JSON.stringify(value),
        status: 'info'
      })
    }
  }
}
</script>

<style lang="less" scoped>
.tiny-base-select {
  width: 280px;
}
p {
  font-size: 14px;
  line-height: 1.5;
  padding: 16px 0;
}
</style>
