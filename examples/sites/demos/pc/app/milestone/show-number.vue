<template>
  <div class="demo-milestone">
    <tiny-button @click="handleClick(!showNum)" style="max-width: unset"
      >设置 show-number 值为 {{ !showNum }}</tiny-button
    >
    <tiny-milestone
      :data="milestoneData"
      :milestones-status="statusMap"
      :show-number="showNum"
      :start="1"
    ></tiny-milestone>
  </div>
</template>

<script lang="jsx">
import { TinyMilestone, TinyButton } from '@opentiny/vue'

export default {
  components: {
    TinyMilestone,
    TinyButton
  },
  data() {
    return {
      showNum: true,
      statusMap: {
        completed: 'var(--tv-color-bg-disabled-control-active)',
        doing: '#7ED321',
        back: '#f5222d',
        end: '#faad14',
        cancel: '#d9d9d9'
      },
      milestoneData: [
        {
          name: 'completed 完成状态',
          time: '2018-9-7',
          status: 'completed'
        },
        {
          name: 'completed 完成状态',
          time: '2018-9-8',
          status: 'completed'
        },
        {
          name: 'doing 未完成状态',
          time: '2018-9-10',
          status: 'doing'
        },
        {
          name: 'cancel 未完成状态',
          time: '2018-9-9',
          status: 'cancel'
        },
        {
          name: 'back 未完成状态',
          time: '2018-9-11',
          status: 'back'
        },
        {
          name: 'end 未完成状态',
          time: '2018-9-9',
          status: 'end'
        }
      ]
    }
  },
  methods: {
    handleClick(value) {
      this.showNum = value
    }
  }
}
</script>

<style scoped>
.demo-milestone ::v-deep .tiny-milestone__description-status {
  margin-top: 4px;
}
</style>
