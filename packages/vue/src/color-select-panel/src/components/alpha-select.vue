<template>
  <div class="tiny-color-select-panel__alpha" ref="alphaWrapper" @click="onClick">
    <div
      class="tiny-color-select-panel__alpha__slider"
      :style="{
        background: state.background
      }"
      ref="slider"
    ></div>
    <div
      class="tiny-color-select-panel__alpha__thumb"
      :style="{
        top: 0,
        left: state.left + 'px',
        transform: 'translateX(-50%)'
      }"
      ref="alphaThumb"
    ></div>
  </div>
</template>

<script>
import { defineComponent, setup } from '@opentiny/vue-common'
import { renderless, api } from '@opentiny/vue-renderless/color-select-panel/alpha-select/vue'

export default defineComponent({
  emits: ['ready'],
  props: {
    color: {
      type: Object
    }
  },
  setup(props, context) {
    return setup({ props, context, renderless, api, mono: true })
  }
})
</script>
