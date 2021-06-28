<template>
  <div class="setPassword themePaddinglr">
      <ul>
          <li>重新设置密码</li>
          <li>8-20个字符，不可以是纯数字</li>
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
              class="wdt100 borderRadius48"
            >
              完成
            </nut-button>

          </li>
      </ul>
  </div>
</template>
<script>
export default {
  name:"resetPassword",
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
