<template>
  <div class="demo-milestone">
    <tiny-milestone
      :data="milestoneData"
      :milestones-status="statusMap"
      @click="nodeClick"
      @flag-click="flagClick"
    ></tiny-milestone>
  </div>
</template>

<script lang="jsx">
import { TinyMilestone, TinyNotify } from '@opentiny/vue'

export default {
  components: {
    TinyMilestone
  },
  data() {
    return {
      statusMap: {
        completed: '#f0f7ff',
        doing: '#e8faff',
        back: '#edf7df',
        end: '#faad14',
        cancel: '#f230301A'
      },
      milestoneData: [
        {
          name: 'POR1',
          time: '2018-9-7',
          status: 'completed',
          flags: [
            {
              status: 'completed',
              name: 'test1',
              content: '已完成'
            }
          ]
        },
        {
          name: 'POR2',
          time: '2018-9-8',
          status: 'completed',
          flags: [
            {
              status: 'back',
              content: '引导用户按照流程完成任务'
            }
          ]
        },
        { name: 'POR3', time: '2018-9-10', status: 'doing', content: null },
        {
          name: 'POR4',
          time: '2018-9-9',
          status: 'cancel',
          flags: [
            {
              status: 'back',
              content: '欢迎使用 vui',
              name: 'test7'
            },
            {
              status: 'doing',
              content: 'test8'
            }
          ]
        },
        { name: 'POR5', time: '2018-9-11', status: 'back' },
        {
          name: 'POR6',
          time: '2018-9-9',
          status: 'end',
          flags: [
            {
              status: 'completed',
              content: 'test6'
            }
          ]
        }
      ]
    }
  },
  methods: {
    nodeClick() {
      TinyNotify({
        title: '提示',
        message: '节点的点击事件',
        offset: 0
      })
    },
    flagClick() {
      TinyNotify({
        title: '提示',
        message: '活动旗子的点击事件',
        offset: 0
      })
    }
  }
}
</script>

<style scoped>
.demo-milestone ::v-deep .tiny-milestone__description-status {
  margin-top: 4px;
}
</style>
