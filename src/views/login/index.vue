<template>
  <div class="login">
    <div class="login-content">
      <div></div>
      <div class="themePaddinglr login-content-phone">
        <ul>
          <li>
            <mt-actionsheet
              :actions="actions"
              v-model="sheetVisible">
            </mt-actionsheet>
            <mt-field label="email"></mt-field>
          </li>
          <li>
            <mt-button class="themeBgColor_light whiteColor" @click="loginSubmit">获取验证码</mt-button>
          </li>
          <li class="whiteColor">密码登录</li>
        </ul>
      </div>
      <div class="whiteColor themePaddinglr">登录即表示同意<span class="themeColor_dark">《用户协议》</span>和<span class="themeColor_dark">《隐私协议》</span></div>
    </div>
  </div>
</template>
<script>
import api from 'apis/common';
import { mapMutations } from "vuex";
export default {
  name:"Login",
  data(){
      return {
        sheetVisible:true,
        actions:[
          {name:'1',value:'DDD'},
          {name:'2',value:'DDD'},
          {name:'3',value:'DDD'}
        ],
        slots: [
          {
            flex: 1,
            values: ['1', '2', '3', '4', '5', '6'],
            className: 'slot1',
            textAlign: 'right'
          }
        ]
      }
  },
  mounted(){
  },
  methods:{
    ...mapMutations([
      "setToken"
    ]),
    loginSubmit(){
      const params = {
        account:'',
        pass:'', // 密码
        checkPass:'',// 确认密码
      };
      api.loginApi(params).then(
          ({ data = {}, errorCode = '', errorMessage = '响应失败' }) => {
            if (errorCode === '000000') {
              console.log(data,666)
              this.setToken(data.token);
              this.$router.push('/home');
            } else {
              this.$message.error(errorMessage);
            }
          }
      );
    },
    onValuesChange(){}
  }
}
</script>
<style lang="scss" scoped>
.login{
  background: url('../../images/common/login_bg.png') no-repeat;
  background-size: 100% 100%;
  position: fixed;
  top: 0;
  bottom: 0;
  width: 100%;
  overflow-y: auto;
  overflow-x: hidden;
  &-content{
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 100%;
    div:nth-child(1){
      display: flex;
      flex: 6;
    }
    &-phone{
      display: flex;
      flex: 3;
      ul{
        li{
          // height: 6rem;
          button{
            border-radius: 48px;
            width:40rem;
          }
        }
      }
    }
    div:nth-child(3){
      display: flex;
      flex: 1;
    }
  }
  
}
</style>
