<template>
  <div>
    <p class="demo-dropdown">场景 1：按钮类型 + 循环 tiny-dropdown-item</p>
    <tiny-dropdown split-button @item-click="itemClick" @button-click="buttonClick" @visible-change="visibleChange">
      <template #dropdown>
        <tiny-dropdown-menu>
          <tiny-dropdown-item
            v-for="(item, index) in options"
            :key="index"
            :label="item.label"
            :disabled="item.disabled"
            :divided="item.divided"
            :icon="item.icon"
            :item-data="item"
          ></tiny-dropdown-item>
        </tiny-dropdown-menu>
      </template>
    </tiny-dropdown>
    <br /><br />

    <p class="demo-dropdown">场景 2：配置式</p>
    <tiny-dropdown class="options-event" @item-click="itemClick" @visible-change="visibleChange">
      <template #dropdown>
        <tiny-dropdown-menu :options="options"> </tiny-dropdown-menu>
      </template>
    </tiny-dropdown>
  </div>
</template>

<script>
import { TinyDropdown, TinyDropdownMenu, TinyDropdownItem, TinyNotify } from '@opentiny/vue'
import { iconStarDisable } from '@opentiny/vue-icon'

export default {
  components: {
    TinyDropdown,
    TinyDropdownMenu,
    TinyDropdownItem
  },
  data() {
    return {
      options: [
        {
          label: '黄金糕'
        },
        {
          label: '狮子头',
          disabled: true
        },
        {
          label: '螺蛳粉',
          divided: true
        },
        {
          label: '双皮奶',
          icon: iconStarDisable()
        },
        {
          label: '蚵仔煎'
        }
      ]
    }
  },
  methods: {
    itemClick(data, vm) {
      // Aurora 主题 item-click 有第二个参数，其他主题只有第一个参数
      const label = vm?.label || data.vm.label

      TinyNotify({
        type: 'info',
        title: 'itemClick 回调事件',
        message: `使用 dropdown-item 的 label 属性：${label}`,
        position: 'top-right',
        duration: 2000
      })
    },
    buttonClick() {
      TinyNotify({ message: '下拉菜单内置按钮点击事件', status: 'info' })
    },
    visibleChange(status) {
      TinyNotify({
        message: `下拉菜单显隐事件，当前为${status ? '显示' : '隐藏'}`,
        status: 'info'
      })
    }
  }
}
</script>

<style lang="less" scoped>
p {
  line-height: 1.5;
  font-size: 14px;
}
.demo-dropdown {
  margin-bottom: 8px;
}
</style>
