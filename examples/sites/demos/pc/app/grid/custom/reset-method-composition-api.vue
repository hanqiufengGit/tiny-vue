<template>
  <div>
    <tiny-grid :fetch-data="fetchData" :pager="pager">
      <template #toolbar>
        <tiny-grid-toolbar
          id="custom-sorttype-2"
          :setting="{ storage: 'local', sortable: Sortable }"
          :reset-method="resetMethod"
        ></tiny-grid-toolbar>
      </template>
      <tiny-grid-column type="index" width="60"></tiny-grid-column>
      <tiny-grid-column field="name" title="名称" sortable></tiny-grid-column>
      <tiny-grid-column field="area" title="所属区域" sortable></tiny-grid-column>
      <tiny-grid-column field="address" title="地址"></tiny-grid-column>
      <tiny-grid-column field="introduction" title="公司简介" show-overflow></tiny-grid-column>
    </tiny-grid>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { TinyGrid, TinyGridColumn, TinyPager, TinyGridToolbar } from '@opentiny/vue'
import Sortable from 'sortablejs'

const pager = ref({
  component: TinyPager,
  attrs: {
    currentPage: 1,
    pageSize: 10,
    total: 0,
    pageSizes: [3, 5, 10, 20],
    layout: 'total, sizes, prev, pager, next, jumper'
  }
})
const fetchData = ref({
  api: getData
})
const tableData = ref([
  {
    id: '1',
    name: 'GFD 科技有限公司',
    area: '华东区',
    address: '福州',
    introduction: '公司技术和研发实力雄厚，是国家 863 项目的参与者，并被政府认定为“高新技术企业”。'
  },
  {
    id: '2',
    name: 'WWWW 科技有限公司',
    area: '华南区',
    address: '深圳福田区',
    introduction: '公司技术和研发实力雄厚，是国家 863 项目的参与者，并被政府认定为“高新技术企业”。'
  },
  {
    id: '3',
    name: 'RFV 有限责任公司',
    area: '华南区',
    address: '中山市',
    introduction: '公司技术和研发实力雄厚，是国家 863 项目的参与者，并被政府认定为“高新技术企业”。'
  },
  {
    id: '4',
    name: 'TGB 有限公司',
    area: '华北区',
    address: '梅州',
    introduction: '公司技术和研发实力雄厚，是国家 863 项目的参与者，并被政府认定为“高新技术企业”。'
  },
  {
    id: '5',
    name: 'YHN 科技有限公司',
    area: '华南区',
    address: '韶关',
    introduction: '公司技术和研发实力雄厚，是国家 863 项目的参与者，并被政府认定为“高新技术企业”。'
  }
])

function resetMethod() {
  return new Promise((resolve) => {
    const customs = {
      columns: [
        { property: 'name', visible: true, sortable: true, order: '', fixed: '' },
        { property: 'area', visible: false, sortable: true, order: 'asc', fixed: '' },
        { property: 'introduction', visible: true, sortable: true, order: '', fixed: '' },
        { property: 'address', visible: true, sortable: true, order: '', fixed: '' }
      ]
    }

    resolve(customs)
  })
}

function getData({ page }) {
  let curPage = page.currentPage
  let pageSize = page.pageSize
  let offset = (curPage - 1) * pageSize

  return new Promise((resolve) => {
    resolve({
      result: tableData.value.slice(offset, offset + pageSize),
      page: { total: tableData.value.length }
    })
  })
}
</script>
