<template>
  <tiny-grid
    :data="tableData"
    column-key
    :drop-config="dropConfig"
    @column-drag-start="columnDragStart"
    @column-drop="columnDrop"
    column-min-width="180"
    :optimization="{ scrollX: { gt: 10, rSize: 15 } }"
    show-header-overflow
  >
    <tiny-grid-column title="group">
      <tiny-grid-column type="index" width="60" fixed="left"></tiny-grid-column>
      <tiny-grid-column field="name" title="公司名称"></tiny-grid-column>
    </tiny-grid-column>
    <tiny-grid-column title="group1">
      <tiny-grid-column field="employees" title="员工数 1"></tiny-grid-column>
      <tiny-grid-column field="created_date" title="创建日期 1"></tiny-grid-column>
    </tiny-grid-column>
    <tiny-grid-column title="group2">
      <tiny-grid-column field="employees" title="员工数 2"></tiny-grid-column>
      <tiny-grid-column field="created_date" title="创建日期 2"></tiny-grid-column>
    </tiny-grid-column>
    <tiny-grid-column title="group3">
      <tiny-grid-column field="employees" title="员工数 3"></tiny-grid-column>
      <tiny-grid-column field="created_date" title="创建日期 3"></tiny-grid-column>
    </tiny-grid-column>
    <tiny-grid-column title="group4">
      <tiny-grid-column field="employees" title="员工数 4"></tiny-grid-column>
      <tiny-grid-column field="created_date" title="创建日期 4"></tiny-grid-column>
    </tiny-grid-column>
    <tiny-grid-column title="group5">
      <tiny-grid-column field="employees" title="员工数 5"></tiny-grid-column>
      <tiny-grid-column field="created_date" title="创建日期 5"></tiny-grid-column>
    </tiny-grid-column>
    <tiny-grid-column title="group6">
      <tiny-grid-column field="employees" title="员工数 6"></tiny-grid-column>
      <tiny-grid-column field="created_date" title="创建日期 6"></tiny-grid-column>
    </tiny-grid-column>
    <tiny-grid-column title="group7">
      <tiny-grid-column field="employees" title="员工数 7"></tiny-grid-column>
      <tiny-grid-column field="created_date" title="创建日期 7"></tiny-grid-column>
    </tiny-grid-column>
    <tiny-grid-column title="group8">
      <tiny-grid-column field="employees" title="员工数 8"></tiny-grid-column>
      <tiny-grid-column field="created_date" title="创建日期 8"></tiny-grid-column>
    </tiny-grid-column>
    <tiny-grid-column title="group9">
      <tiny-grid-column field="employees" title="员工数 9"></tiny-grid-column>
      <tiny-grid-column field="created_date" title="创建日期 9"></tiny-grid-column>
    </tiny-grid-column>
    <tiny-grid-column title="group10">
      <tiny-grid-column field="employees" title="员工数 10"></tiny-grid-column>
      <tiny-grid-column field="created_date" title="创建日期 10"></tiny-grid-column>
    </tiny-grid-column>
    <tiny-grid-column title="group11">
      <tiny-grid-column field="employees" title="员工数 11"></tiny-grid-column>
      <tiny-grid-column field="created_date" title="创建日期 11"></tiny-grid-column>
    </tiny-grid-column>
    <tiny-grid-column title="group12">
      <tiny-grid-column field="employees" title="员工数 12"></tiny-grid-column>
      <tiny-grid-column field="created_date" title="创建日期 12"></tiny-grid-column>
    </tiny-grid-column>
    <tiny-grid-column title="group13">
      <tiny-grid-column field="employees" title="员工数 13"></tiny-grid-column>
      <tiny-grid-column field="created_date" title="创建日期 13"></tiny-grid-column>
    </tiny-grid-column>
    <tiny-grid-column title="group14">
      <tiny-grid-column field="employees" title="员工数 14"></tiny-grid-column>
      <tiny-grid-column field="created_date" title="创建日期 14"></tiny-grid-column>
    </tiny-grid-column>
    <tiny-grid-column title="group15">
      <tiny-grid-column field="employees" title="员工数 15"></tiny-grid-column>
      <tiny-grid-column field="created_date" title="创建日期 15"></tiny-grid-column>
    </tiny-grid-column>
    <tiny-grid-column title="group16">
      <tiny-grid-column field="employees" title="员工数 16"></tiny-grid-column>
      <tiny-grid-column field="created_date" title="创建日期 16"></tiny-grid-column>
    </tiny-grid-column>
    <tiny-grid-column title="group17">
      <tiny-grid-column field="employees" title="员工数 17"></tiny-grid-column>
      <tiny-grid-column field="created_date" title="创建日期 17"></tiny-grid-column>
    </tiny-grid-column>
    <tiny-grid-column title="group18">
      <tiny-grid-column field="employees" title="员工数 18"></tiny-grid-column>
      <tiny-grid-column field="created_date" title="创建日期 18"></tiny-grid-column>
    </tiny-grid-column>
    <tiny-grid-column title="group19">
      <tiny-grid-column field="employees" title="员工数 19"></tiny-grid-column>
      <tiny-grid-column field="created_date" title="创建日期 19"></tiny-grid-column>
    </tiny-grid-column>
    <tiny-grid-column title="group20">
      <tiny-grid-column field="employees" title="员工数 20"></tiny-grid-column>
      <tiny-grid-column field="created_date" title="创建日期 20"></tiny-grid-column>
    </tiny-grid-column>
    <tiny-grid-column field="city" title="城市" fixed="right"></tiny-grid-column>
  </tiny-grid>
</template>

<script>
import { TinyGrid, TinyGridColumn, TinyModal } from '@opentiny/vue'

export default {
  components: {
    TinyGrid,
    TinyGridColumn
  },
  data() {
    return {
      dropConfig: {
        // 在设置 scheme 标志位 v2 时，列拖拽使用新方案。不影响行拖拽使用 sortablejs
        scheme: 'v2',
        // 开启列拖拽
        column: true,
        // 可选值：level（同层级拖拽）和 nested（跨层级拖拽），默认值 level
        columnGroup: 'level',
        // 拖拽前处理，返回 false 则阻止拖拽，其它返回值不阻止拖拽。支持异步。
        columnBeforeDrop: ({ dragColumn, dropColumn }) => {
          console.log('columnBeforeDrop', dragColumn, dropColumn)
          return true
        },
        // 可放置列临时样式类
        columnDropClass: 'in-drop'
      },
      tableData: [
        {
          id: '1',
          name: 'GFD 科技有限公司',
          city: '福州',
          employees: 800,
          created_date: '2014-04-30 00:56:00'
        },
        {
          id: '2',
          name: 'WWW 科技有限公司',
          city: '深圳',
          employees: 300,
          created_date: '2016-07-08 12:36:22'
        },
        {
          id: '3',
          name: 'RFV 有限责任公司',
          city: '中山',
          employees: 1300,
          created_date: '2014-02-14 14:14:14'
        }
      ]
    }
  },
  methods: {
    columnDragStart() {
      TinyModal.message({ message: '列拖拽开始', status: 'info' })
    },
    columnDrop() {
      TinyModal.message({ message: '列拖拽结束', status: 'info' })
    }
  }
}
</script>

<style>
.in-drop {
  outline: 1px dashed rgba(170, 50, 220, 0.6);
  outline-offset: -2px;
}
</style>
