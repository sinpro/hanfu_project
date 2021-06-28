<template>
  <div class="login">
    <div class="login-content">
      <div class="empty"></div>
      <div class="themePaddinglr login-content-phone">
        <ul>
          <li class="clearfix">
            <span class="whiteColor fll" @click="openSwitch('isVisible')">{{defaultGlobalRoaming}}</span>
            <nut-textinput
              class="fll transparentBg" 
              v-model="phoneVal"
              :has-border="false"
              :clear-btn="false"
            />
            <nut-picker
              :is-visible="isVisible"
              :list-data="globalRoaming"
              :default-value-data="defaultValueData"
              @close="closeSwitch('isVisible')"
              @confirm="confirm"
            ></nut-picker>
          </li>
          <li>
            <nut-button class="themeBgColor_light whiteColor" @click="()=>$router.push('/login/verificateCode')">获取验证码</nut-button>
          </li>
          <li class="whiteColor" @click="()=>$router.push('/login/passwordLogin')">密码登录</li>
        </ul>
      </div>
      <div class="whiteColor themePaddinglr agrees">登录即表示同意<span class="themeColor_dark">《用户协议》</span>和<span class="themeColor_dark">《隐私协议》</span></div>
    </div>
  </div>
</template>
<script>
import api from 'apis/common';
import { mapMutations } from "vuex";
import globalRoaming from 'src/dictionarys';
export default {
  name:"Login",
  data(){
      return {
        defaultGlobalRoaming:'',
        phoneVal: "",
        isVisible: false,
        defaultValueData: null,
        globalRoaming,
      }
  },
  mounted(){
    console.log(globalRoaming[0][0],111)
    this.defaultGlobalRoaming=globalRoaming[0][0].value;
  },
  methods:{
    openSwitch(param) {
      this[`${param}`] = true;
    },

    closeSwitch(param) {
      this[`${param}`] = false;
    },

    confirm(chooseData) {
      this.defaultGlobalRoaming = `${chooseData[0].value}`;
    },
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
              this.$router.push('/home/index');
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
    .empty{
      display: flex;
      flex: 6;
    }
    &-phone{
      display: flex;
      flex: 4;
      ul{
        padding: 0 .2rem;
        li{
          margin-bottom: 15px;
          .transparentBg{
            /deep/ input{
              background: transparent;
              width: 3rem;
            }
          }
          span.whiteColor{
            display: inline-block;
            background: url('../../images/icon/down-drop.png') no-repeat;
            background-position: 100% 50%;
            background-size: 45% 110%;
            padding-right: 23px;
            margin-top: 14px;
            /deep/ i{
              color: rgb(255, 255, 255)!important;
            }
          }
          button{
            border-radius: .48rem;
            width:4rem;
          }
        }
        li:nth-child(1){
          border-bottom: 1px solid #fff;
        }
      }
    }
    .agrees{
      display: flex;
      flex: 1;
    }
  }
  
}
</style>
