<template>
  <div class="verificateCode themePaddinglr">
      <ul>
          <li>请输入验证码</li>
          <li>验证码以发送至&nbsp;&nbsp;<span>13145240506</span></li>
          <li><msyCode/></li>
          <li><span>{{ times }}s</span>后重新发送验证码</li>
      </ul>
  </div>
</template>
<script>
import msyCode from './components/msyCode';
export default {
  name:"verificateCode",
  data(){
      return {
        times: 60,
        show:true
      }
  },
  components:{
      msyCode
  },
  mounted(){
    this.getCode()
  },
  methods:{
    getCode() {
      this.show = false
      this.timer = setInterval(()=>{
        this.times--
        if(this.times===0){
          this.show = true
          clearInterval(this.timer)
        }
      },1000)
    }
  }
}
</script>
<style lang="scss" scoped>
.verificateCode{
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
    li:nth-child(4){
        font-size:.28rem;
        color: #898A8C;
        letter-spacing: 0;
        margin-top: .36rem;
        span{
            color: #42B3BE;
        }
    }
  }
}
</style>
