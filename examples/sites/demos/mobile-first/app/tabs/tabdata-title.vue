<template>
  <tiny-tabs v-model="activeName" v-if="showTab" tab-style="card" :with-close="true" @close="close">
    <tiny-tab-item :key="item.name" v-for="item in tabs" :title="item.title" :name="item.name">
      {{ item.content }}
    </tiny-tab-item>
  </tiny-tabs>
</template>

<script>
import { TinyTabs, TinyTabItem } from '@opentiny/vue'

export default {
  components: {
    TinyTabs,
    TinyTabItem
  },
  data() {
    return {
      activeName: '',
      showTab: false,
      tabs: []
    }
  },
  mounted() {
    setTimeout(() => {
      this.tabs = [
        {
          title: '表单组件',
          name: 'first',
          content: '表单组件,具有与用户交互，并可完成数据采集功能的控件。 '
        },
        {
          title: '数据组件',
          name: 'second',
          content: ' 数据组件,提供了非常强大数据表格功能，在Grid可以展示数据列表，可以对数据列表进行选择、编辑等。'
        },
        {
          title: '导航组件',
          name: 'third',
          content: ' 导航组件,帮助网站访问者浏览站点的组件。'
        },
        {
          title: '业务组件',
          name: 'fourth',
          content: '业务组件,与业务紧密相关实现某种业务功能的组件集。'
        },
        {
          title: '其他组件',
          name: 'fifth.',
          content: '其他组件，更多种类组件。'
        }
      ]

      this.activeName = 'first'
      this.showTab = true
    }, 1000)
  },
  methods: {
    close(name) {
      this.tabs = this.tabs.filter((tab) => {
        return tab.name !== name
      })
    }
  }
}
</script>
