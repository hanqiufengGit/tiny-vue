<template>
  <div>
    <tiny-grid
      :data="tableData"
      :edit-config="{ trigger: 'click', mode: 'cell', showStatus: true }"
      :tooltip-config="{ appendToBody: false, placement: 'right' }"
      :edit-rules="validRules"
      show-overflow="tooltip"
    >
      <tiny-grid-column type="index" width="60"></tiny-grid-column>
      <tiny-grid-column field="name" title="名称" :editor="{ component: 'input' }"></tiny-grid-column>
      <tiny-grid-column field="area" title="区域" :editor="{ component: 'input' }"></tiny-grid-column>
      <tiny-grid-column field="address" title="地址" :editor="{ component: 'input' }"></tiny-grid-column>
      <tiny-grid-column field="introduction" title="公司简介" :editor="{ component: 'input' }"></tiny-grid-column>
    </tiny-grid>
  </div>
</template>

<script lang="jsx">
import { TinyGrid, TinyGridColumn } from '@opentiny/vue'

export default {
  components: {
    TinyGrid,
    TinyGridColumn
  },
  data() {
    const validRules = {
      name: [
        { required: true, message: '名称必填' },
        { min: 3, max: 50, message: '名称长度在 3 到 50 个字符' }
      ],
      area: {
        type: 'string',
        required: true,
        validator: (rule, value) => ['华东区', '华南区', '华中区'].includes(value),
        message: '区域格式不正确'
      },
      address: {
        type: 'string',
        validator: (rule, value) => {
          return new Promise((resolve, reject) => {
            if (!value) {
              reject(new Error('地址不能为空'))
            } else if (value.length > 10) {
              reject(new Error('地址过长'))
            } else {
              resolve()
            }
          })
        }
      }
    }
    return {
      validRules,
      tableData: [
        {
          id: '1',
          name: 'GFD 科技 YX 公司',
          userId: 421000103624183,
          area: '华东区',
          province: '福建省',
          city: '福州',
          contact: '许生',
          telephone: '1234567890',
          address: '福州',
          ipaddress: '192.168.111.111',
          introduction: '公司技术和研发实力雄厚，是国家 863 项目的参与者，并被政府认定为“高新技术企业”。',
          employees: 800,
          createdDate: '2014-04-30 00:56:00',
          boole: false,
          assets: '1000000',
          rate: 0.9
        },
        {
          id: '2',
          name: 'WWW 科技 YX 公司',
          userId: 421000103624183,
          area: '华南区',
          province: '广东省',
          city: '深圳',
          contact: '朱生',
          telephone: '1234567890',
          address: '深圳福田区',
          ipaddress: '192.168.111.1',
          introduction: '公司技术和研发实力雄厚，是国家 863 项目的参与者，并被政府认定为“高新技术企业”。',
          employees: 300,
          createdDate: '2016-07-08 12:36:22',
          boole: true,
          assets: '1500000',
          rate: 0.7
        },
        {
          id: '3',
          name: 'RFV 有限责任公司',
          userId: 441047913162396,
          area: '华南区',
          province: '广东省',
          city: '中山',
          contact: '秦生',
          telephone: '1234567890',
          address: '中山市',
          ipaddress: '192.168.111.120',
          introduction: '公司技术和研发实力雄厚，是国家 863 项目的参与者，并被政府认定为“高新技术企业”。',
          employees: 1300,
          createdDate: '2014-02-14 14:14:14',
          boole: false,
          assets: '1500000',
          rate: 0.6
        },
        {
          id: '4',
          name: 'TGB 科技 YX 公司',
          userId: 702973890055088,
          area: '华东区',
          province: '福建省',
          city: '龙岩',
          contact: '周生',
          telephone: '1234567890',
          address: '龙岩',
          ipaddress: '192.168.11.111',
          introduction: '公司技术和研发实力雄厚，是国家 863 项目的参与者，并被政府认定为“高新技术企业”。',
          employees: 360,
          createdDate: '2013-01-13 13:13:13',
          boole: true,
          assets: '1200000',
          rate: 0.5
        },
        {
          id: '5',
          name: 'YHN 科技 YX 公司',
          userId: 702973890055088,
          area: '华南区',
          province: '广东省',
          city: '韶关',
          contact: '郑生',
          telephone: '1234567890',
          address: '韶关',
          ipaddress: '192.168.101.111',
          introduction: '公司技术和研发实力雄厚，是国家 863 项目的参与者，并被政府认定为“高新技术企业”。',
          employees: 810,
          createdDate: '2012-12-12 12:12:12',
          boole: true,
          assets: '1500000',
          rate: 0.6
        }
      ]
    }
  }
}
</script>
