<template>
  <tiny-row>
    <tiny-col :span="10">
      <div id="container" class="scroll-container">
        <div id="sec-1" class="sec-1">Sec 1</div>
        <div id="sec-2" class="sec-2">Sec 2</div>
        <div id="sec-3" class="sec-3">Sec 3</div>
        <div id="sec-3-1" class="sec-3-1">Sec 3-1</div>
        <div id="sec-3-2" class="sec-3-2">Sec 3-2</div>
      </div>
    </tiny-col>
    <tiny-col :span="2">
      <tiny-anchor
        :links="links"
        container-id="#container"
        @link-click="handleClick"
        mark-class="is-active-anchor"
      ></tiny-anchor>
    </tiny-col>
  </tiny-row>
</template>

<script>
import { TinyAnchor, TinyRow, TinyCol } from '@opentiny/vue'

export default {
  components: {
    TinyAnchor,
    TinyRow,
    TinyCol
  },
  data() {
    return {
      links: [
        {
          key: 'sec-1',
          link: '#sec-1',
          title: 'Sec 1'
        },
        {
          key: 'sec-2',
          link: '#sec-2',
          title: 'Sec 2'
        },
        {
          key: 'sec-3',
          link: '#sec-3',
          title: 'Sec 3',
          children: [
            {
              key: 'sec-3-1',
              link: '#sec-3-1',
              title: 'Sec 3-1'
            },
            {
              key: 'sec-3-2',
              link: '#sec-3-2',
              title: 'Sec 3-2'
            }
          ]
        }
      ]
    }
  },
  methods: {
    handleClick(e, link) {
      e.preventDefault()
      console.log('link', link)
    }
  }
}
</script>

<style scoped>
.is-active-anchor {
  border: 1px solid #333;
}
.scroll-container {
  height: 40vh;
  overflow: auto;
  text-align: center;
  font-size: 24px;
}
.scroll-container > div {
  padding-top: 20%;
}
.sec-1 {
  height: 50vh;
  background: #b6d4f2;
}
.sec-2 {
  height: 50vh;
  background: #c2c2c2;
}
.sec-3 {
  background: #fff4e8;
}
.sec-3-1 {
  height: 50vh;
  background: #b9e683;
}
.sec-3-2 {
  height: 50vh;
  background: #f2c5c2;
}
</style>
