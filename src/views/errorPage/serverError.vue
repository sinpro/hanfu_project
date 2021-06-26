<template>
  <div class="serverError-page">
    <div
      class="bank-header"
      style="position: fixed; z-index: 1; width: 100%;"
    >
      <div class="center-header">
        <img
          @click="handleLogoClick"
          v-bind="{...trackAttr('PALOGO')}"
          src="~/images/scrcu_logo.png"
          class="logo"
        >
      </div>
    </div>
    <div class="serverError-page-box">
      <img
        src="~images/scrcu_logo.png"
        rel="serverError"
      >
      <p class="serverError-tip">
        <b>服务器出错，请重试</b>
      </p>
      <button
        class="retry-btn"
        type="primary"
        @click="retry"
      >
        重试
      </button>
      <div
        v-if="showError"
        class="errorText"
      >
        {{ errorText }}
      </div>
      <p
        class="error-title"
        @click="showThisError"
      >
        {{ tips }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      trackOlabelid: 'DBGNT',  // 埋点区域id
      showError: false,
      tips: '查看错误信息',
      errorText: ''
    };
  },
  methods: {
    handleLogoClick(e) {
      this.$trackHandler(e, true);  // 三级菜单埋点
    },
    trackAttr(tiid) {
      console.log(34234, this.trackOlabelid);
      return this.$getTrackInfo(this.trackOlabelid, tiid);
    },
    retry() {
      // 调用认证中心登出
      window.noPopBeforeUnload = true;
      window.location.href = ENV_CONFIG.logout_url;
      // this.$router.go(-1);
      // let url = ENV_CONFIG.login_url;
      // if (process.env.NODE_ENV !== 'production') {
      //   url = `${url}?redirectUrl=http://localhost:8800/#/temporarily-transit`;
      // }
      // window.location.href = url;
    },
    logOut() {
      window.location.href = ENV_CONFIG.logout_url;
    },
    showThisError() {
      this.showError = !this.showError;
      //  console.log(this.showError);
      if (this.showError === false) {
        this.tips = '查看错误信息';
      } else {
        const text = JSON.parse(window.sessionStorage.getItem('LOGINERRORMESSAGE'));
        // console.log(window.sessionStorage.getItem('LOGINERRORMESSAGE'));
        this.errorText = text.errorMessage ? text.errorMessage : text.message;
        this.tips = '收起错误信息';
      }
    }
  }
};
</script>

<style lang='scss'>
@import './styles/index';
</style>
