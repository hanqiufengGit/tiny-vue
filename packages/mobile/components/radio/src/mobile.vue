<!--
 * Copyright (c) 2022 - present TinyVue Authors.
 * Copyright (c) 2022 - present Huawei Cloud Computing Technologies Co., Ltd.
 *
 * Use of this source code is governed by an MIT-style license.
 *
 * THE OPEN SOURCE SOFTWARE IN THIS PRODUCT IS DISTRIBUTED IN THE HOPE THAT IT WILL BE USEFUL,
 * BUT WITHOUT ANY WARRANTY, WITHOUT EVEN THE IMPLIED WARRANTY OF MERCHANTABILITY OR FITNESS FOR
 * A PARTICULAR PURPOSE. SEE THE APPLICABLE LICENSES FOR MORE DETAILS.
 *
 -->
<template>
  <label
    class="tiny-mobile-radio"
    :class="[{ 'is-disabled': state.isDisabled }, { 'is-focus': state.focus }, { 'is-checked': state.model === label }]"
    role="radio"
    :aria-checked="state.model === label"
    :aria-disabled="state.isDisabled"
    :tabindex="state.tabIndex"
    @keydown.space.stop.prevent="state.model = state.isDisabled ? state.model : label"
  >
    <div class="tiny-mobile-radio__input">
      <div class="tiny-mobile-radio__outer">
        <div class="tiny-mobile-radio__inner"></div>
      </div>

      <input
        ref="radio"
        class="tiny-mobile-radio__original"
        :value="label"
        type="radio"
        aria-hidden="true"
        v-model="state.model"
        @focus="state.focus = true"
        @blur="state.focus = false"
        @change="handleChange"
        :name="name"
        :disabled="state.isDisabled"
        tabindex="-1"
      />
    </div>
    <span class="tiny-mobile-radio__label" @keydown.stop>
      <slot>{{ text || label }}</slot>
    </span>
  </label>
</template>

<script lang="ts">
import { renderless, api } from './renderless/vue'
import { setup, defineComponent } from '@mobile-root/common'
import { radioProps } from './radio'
import '@opentiny/vue-theme-mobile/radio/index.less'

export default defineComponent({
  emits: ['change', 'update:modelValue'],
  props: radioProps,
  setup(props, context) {
    return setup({ props, context, renderless, api })
  }
})
</script>
