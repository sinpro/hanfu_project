<template>
  <div class="passwordLogin themePaddinglr">
      <ul>
          <li>账号密码登录</li>
          <li>
            <nut-textinput 
                v-model="val"
                placeholder="请输入手机号"
                class="transparentBg" 
                :has-border="false"
                :clearBtn="true"
                :disabled="false"
            />
          </li>
          <li>
            <nut-textinput 
                v-model="val"
                placeholder="请输入密码"
                class="transparentBg" 
                :has-border="false"
                :clearBtn="true"
                :disabled="false"
            />
          </li>
          <li>
            <nut-button 
              :disabled='true'
              class="wdt100 borderRadius48"
            >
              完成
            </nut-button>
          </li>
          <li>
            <label @click="()=>$router.push('/login/verificateCode')">验证码登录</label>
            <span class="flr" @click="()=>$router.push('/login/forgetPassword')">忘记密码</span>
          </li>
      </ul>
  </div>
</template>
<script>
export default {
  name:"passwordLogin",
  data(){
      return {
        val:''
      }
  },
  components:{
      
  },
  mounted(){
    
  },
  methods:{
    
  }
}
</script>
<style lang="scss" scoped>
.passwordLogin{
  padding-top: .64rem;
  ul{
    padding: 0 .24rem;
      li:nth-child(1){
          font-size: .54rem;
          color: #272728;
          letter-spacing: 0;
          font-weight: 500;
          margin-bottom: .8rem;
      }
      li:nth-child(2){
          font-size:.28rem;
          color: #898A8C;
          letter-spacing: 0;
          font-weight: 400;
          margin-bottom: .32rem;
      }
      li:nth-child(3){
         margin-bottom: 1rem;
      }
      li:nth-child(4){
           margin-bottom: .36rem;
      }
      li:nth-child(5){
        label{
          color: #42B3BE;
          letter-spacing: 0;
          font-weight: 400;
          color: #42B3BE;
        }
      }
      li{
        /deep/ input{
          border-bottom: 1px solid #E8E9ED!important;
          background-color: #f8f8f8;
        }
      }
  }
}
</style>
