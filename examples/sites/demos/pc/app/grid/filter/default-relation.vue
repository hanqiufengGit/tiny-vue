<template>
  <tiny-grid ref="clearfiltergrid" :data="tableData" @filter-change="filterChangeEvent">
    <tiny-grid-column type="index" width="60"></tiny-grid-column>
    <tiny-grid-column type="selection" width="60"></tiny-grid-column>
    <tiny-grid-column field="name" title="公司名称" :filter="nameFilter"></tiny-grid-column>
    <tiny-grid-column field="employees" title="员工数" :filter="employeesFilter"></tiny-grid-column>
    <tiny-grid-column field="createdDate" title="创建日期"></tiny-grid-column>
    <tiny-grid-column field="city" title="城市"></tiny-grid-column>
  </tiny-grid>
</template>

<script lang="jsx">
import { TinyGrid, TinyGridColumn, TinyNumeric, TinyModal } from '@opentiny/vue'

export default {
  components: {
    TinyGrid,
    TinyGridColumn
  },
  data() {
    return {
      tableData: [
        {
          id: '1',
          name: 'GFD 科技 YX 公司',
          city: '福州',
          employees: 800,
          createdDate: '2014-04-30 00:56:00'
        },
        {
          id: '2',
          name: 'WWW 科技 YX 公司',
          city: '深圳',
          employees: 300,
          createdDate: '2016-07-08 12:36:22'
        },
        {
          id: '3',
          name: 'RFV 有限责任公司',
          city: '中山',
          employees: 1300,
          createdDate: '2014-02-14 14:14:14'
        },
        {
          id: '4',
          name: 'TGB 科技 YX 公司',
          city: '龙岩',
          employees: 360,
          createdDate: '2013-01-13 13:13:13'
        },
        {
          id: '5',
          name: 'YHN 科技 YX 公司',
          city: '韶关',
          employees: 810,
          createdDate: '2012-12-12 12:12:12'
        },
        {
          id: '6',
          name: 'WSX 科技 YX 公司',
          city: '黄冈',
          employees: 800,
          createdDate: '2011-11-11 11:11:11'
        }
      ],
      employeesFilter: {
        layout: 'input,enum,default,extends,base',
        inputFilter: {
          component: TinyNumeric,
          attrs: { format: 'yyyy/MM/dd hh:mm:ss' },
          relation: 'A',
          relations: [
            {
              label: '小于',
              value: 'A',
              method: ({ value, input }) => {
                return value < input
              }
            },
            { label: '等于', value: 'equals' },
            { label: '大于', value: 'greaterThan' }
            // value内置有如下取值，不满足时请传method
            // 等于 equals
            // 不等于unequal
            // 大于greaterThan
            // 小于lessThan
            // 大于等于equalToGreaterThan
            // 小于等于equalToLessThan
            // 包含contains
            // 开头是startwith
            // 结尾是endwith
          ]
        },
        extends: [
          {
            label: '我要过滤大于800的数',
            method: ({ value }) => {
              return value > 800
            }
          },
          {
            label: '我要过滤全部的数...',
            method: () => {
              return true
            }
          }
        ]
      },
      nameFilter: {
        multi: false,
        enumable: false,
        defaultFilter: false,
        advancedFilter: false,
        inputFilter: {
          relation: 'startwith'
        }
      }
    }
  },
  methods: {
    filterChangeEvent({ filters }) {
      TinyModal.message({ message: `${JSON.stringify(filters)}`, status: 'info' })
    }
  }
}
</script>
