<template>
  <div>
    <p class="demo-logout">是否登录：{{ isLogin }}</p>
    <tiny-logout v-bind="service" :is-local="false" :is-mock="false" :before-logout="beforeLogout"></tiny-logout>
  </div>
</template>

<script lang="jsx">
import { TinyLogout, TinyModal } from '@opentiny/vue'

export default {
  components: {
    TinyLogout
  },
  data() {
    return {
      isLogin: false,
      service: {
        getLogoutUrl: this.getLogoutUrl,
        isGuestUser: this.isGuestUser,
        showLogin: this.showLogin
      }
    }
  },
  methods: {
    beforeLogout() {
      // 注销前的回调函数
      TinyModal.message({ message: '注销前的回调函数', status: 'info' })
    },
    getLogoutUrl() {
      return new Promise((resolve, reject) => {
        /* 自定义注销逻辑，返回注销完成后的重定向 url */
        setTimeout(() => {
          window.localStorage.setItem('isLogin', false)
          const url = window.location.href

          resolve(url)
        }, 200)
      })
    },
    isGuestUser() {
      /* 此处为用户自定义获取当前登录状态，未登录为访客，返回 true，已登录返回 false */
      this.isLogin = window.localStorage.getItem('isLogin') === 'true'

      return !this.isLogin
    },
    showLogin() {
      /* 此处为用户的自定义登录逻辑 */
      TinyModal.confirm('模拟登录且登录成功').then(() => {
        window.localStorage.setItem('isLogin', true)
        window.location.reload()
      })
    }
  }
}
</script>

<style scoped>
.demo-logout {
  line-height: 1.5px;
  padding-bottom: 16px;
}
</style>
