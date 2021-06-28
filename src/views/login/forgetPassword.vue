<template>
  <div class="setPassword themePaddinglr">
      <ul>
          <li>找回密码</li>
          <li>为了保证你账户的安全，一天只能操作一次，否则你的账户将被锁定</li>
          <li class="clearfix">
            <span class="whiteColor fll" @click="openSwitch('isVisible')">{{defaultGlobalRoaming}}</span>
            <nut-textinput
              class="fll transparentBg" 
              placeholder="请输入手机号码"
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
            <nut-button 
              class="wdt100 borderRadius48"
              @click="()=>$router.push('/login/setPassword')"
            >
              完成
            </nut-button>

          </li>
      </ul>
  </div>
</template>
<script>
import globalRoaming from 'src/dictionarys';
export default {
  name:"forgetPassword",
  data(){
      return {
        val:'',
        defaultGlobalRoaming:'',
        phoneVal: "",
        isVisible: false,
        defaultValueData: null,
        globalRoaming,
      }
  },
  components:{
     
  },
  mounted(){
    
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
    onValuesChange(){}
  }
}
</script>
<style lang="scss" scoped>
.setPassword{
  padding-top: .64rem;
  ul{
    padding: 0 .24rem;
      li:nth-child(1){
          font-size: .54rem;
          color: #272728;
          letter-spacing: 0;
          font-weight: 500;
          margin-bottom: .2rem;
      }
      li:nth-child(2){
          font-size:.28rem;
          color: #898A8C;
          letter-spacing: 0;
          font-weight: 400;
          margin-bottom: 1rem;
      }
      li:nth-child(3){
        /deep/ input{
          border-bottom: 1px solid #E8E9ED!important;
          background-color: #f8f8f8;
        }
      }
      li:nth-child(4){
          font-size:.28rem;
          color: #898A8C;
          letter-spacing: 0;
          margin-top: 1rem;
          span{
              color: #42B3BE;
          }
      }
  }
}
</style>
