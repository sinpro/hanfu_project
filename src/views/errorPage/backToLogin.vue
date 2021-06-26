<template>
  <div>登录失败，{{ Second }} 秒后回到登录页</div>
</template>

<script>
export default {
  name: '',
  data() {
    return {
      Second: 3
    };
  },
  watch: {
    Second(newVal) {
      if (newVal === 0) {
        clearTimeout(this.timer);
        // 方便开发环境也能正常使用
        let url = ENV_CONFIG.login_url;
        if (process.env.NODE_ENV !== 'production') {
          url = `${url}?redirectUrl=http://localhost:8800/#/temporarily-transit`;
        }
        window.noPopBeforeUnload = true;
        window.location.href = url;
      }
    }
  },
  mounted() {
    this.timer = setInterval(() => {
      this.Second -= 1;
    }, 1000);
  }
};
</script>

<style lang="scss" scoped>
  div {
    margin-top: 18%;
    text-align: center;
    font-size: 80px;
    font-weight: bold;
    color: #999;
  }
</style>
