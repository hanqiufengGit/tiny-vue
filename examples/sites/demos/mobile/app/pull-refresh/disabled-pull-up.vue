<template>
  <div>
    <div class="page__hd">
      <h1 class="page__title">Refresh</h1>
      <p class="page__desc">刷新</p>
    </div>
    <div class="page__content">
      <tiny-pull-refresh v-model="value" :has-more="hasMore" disabled-pull-up @pullDown="handlerPullDown">
        <div :key="item.name" v-for="item in data">{{ item.label }}</div>
      </tiny-pull-refresh>
    </div>
  </div>
</template>

<script>
import { TinyPullRefresh } from '@opentiny/vue-mobile'

export default {
  components: {
    TinyPullRefresh
  },
  data() {
    return {
      data: [...Array(30)].map((i, index) => {
        return { label: `${index + 1} list data` }
      }),
      value: false,
      hasMore: true
    }
  },
  methods: {
    handlerPullDown() {
      setTimeout(() => {
        this.data = []
        const length = this.data.length
        for (let i = 1; i <= 20; i++) {
          this.data.push({ label: `${i + length} list data` })
        }
        this.value = false
      }, 3000)
    }
  }
}
</script>

<style scoped>
.page__hd {
  padding: 40px;
}

.page__title {
  font-weight: 400;
  font-size: 21px;
  text-align: left;
}

.page__desc {
  margin-top: 5px;
  color: #888;
  font-size: 14px;
  text-align: left;
}

.page__content {
  height: 350px;
}
</style>
