<template>
  <tiny-tabs v-model="activeName" tab-style="card">
    <tiny-tab-item title="表格组件A" name="first">
      <tiny-grid :data="tableData" :auto-resize="true">
        <tiny-grid-column type="index" width="60"></tiny-grid-column>
        <tiny-grid-column type="selection" width="60"></tiny-grid-column>
        <tiny-grid-column field="name" title="公司名称(默认为左对齐)"></tiny-grid-column>
        <tiny-grid-column field="employees" title="员工数(左对齐)" align="left"></tiny-grid-column>
        <tiny-grid-column field="created_date" title="创建日期(右对齐)" align="right"></tiny-grid-column>
        <tiny-grid-column field="city" title="城市(居中对齐)" align="center"></tiny-grid-column>
      </tiny-grid>
    </tiny-tab-item>
    <tiny-tab-item title="表格组件B" name="second">
      <tiny-grid :data="tableData" :auto-resize="true">
        <tiny-grid-column type="index" width="60"></tiny-grid-column>
        <tiny-grid-column type="selection" width="60"></tiny-grid-column>
        <tiny-grid-column field="name" title="公司名称(默认为左对齐)"></tiny-grid-column>
        <tiny-grid-column field="employees" title="员工数(左对齐)" align="left"></tiny-grid-column>
        <tiny-grid-column field="created_date" title="创建日期(右对齐)" align="right"></tiny-grid-column>
        <tiny-grid-column field="city" title="城市(居中对齐)" align="center"></tiny-grid-column>
      </tiny-grid>
    </tiny-tab-item>
  </tiny-tabs>
</template>

<script>
import { TinyTabs, TinyTabItem, TinyGrid, TinyGridColumn } from '@opentiny/vue'

export default {
  components: {
    TinyTabs,
    TinyTabItem,
    TinyGrid,
    TinyGridColumn
  },
  data() {
    return {
      activeName: 'second',
      tableData: [
        {
          id: '1',
          name: 'GFD科技有限公司',
          city: '福州',
          employees: 800,
          created_date: '2014-04-30 00:56:00'
        },
        {
          id: '2',
          name: 'WWW科技有限公司',
          city: '深圳',
          employees: 300,
          created_date: '2016-07-08 12:36:22'
        },
        {
          id: '3',
          name: 'RFV有限责任公司',
          city: '中山',
          employees: 1300,
          created_date: '2014-02-14 14:14:14'
        },
        {
          id: '4',
          name: 'TGB科技有限公司',
          city: '龙岩',
          employees: 360,
          created_date: '2013-01-13 13:13:13'
        },
        {
          id: '5',
          name: 'YHN科技有限公司',
          city: '韶关',
          employees: 810,
          created_date: '2012-12-12 12:12:12'
        },
        {
          id: '6',
          name: 'WSX科技有限公司',
          city: '黄冈',
          employees: 800,
          created_date: '2011-11-11 11:11:11'
        },
        {
          id: '7',
          name: 'KBG物业有限公司',
          city: '赤壁',
          employees: 400,
          created_date: '2016-04-30 23:56:00'
        },
        {
          id: '8',
          name: '深圳市福德宝网络技术有限公司',
          city: '厦门',
          employees: 540,
          created_date: '2016-06-03 13:53:25'
        }
      ]
    }
  }
}
</script>
