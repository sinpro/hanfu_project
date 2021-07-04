<template>
  <div class="bank-footer">
    <ul>
      <li v-for="item in tabList" :key="item.tabTitle" @click="tabLoad(item)" :class="item.url===$route.path?'selectAct':''">
        <img :src="item.icon" alt="">
        <span>{{item.tabTitle}}</span>
      </li>
      <div class="release" @click="releaseHandle">
        <div class="release-add">
          <img src="../../images/icon/plus_white.png" alt="">
        </div>
      </div>
    </ul>
    <!-- 弹窗 -->
    <release :isVisible.sync="releaseShow"></release>
  </div>
</template>
<script>
import release from './release';
export default {
  name:'BankFooter',
  data(){
    return {
      tabList:[
        {
          'tabTitle':'广场',
          'curr':true,
          url:'/square',
        },
        {
          'tabTitle':'遇见',
          'curr':false,
          url:'/meet',
        },
        {
          'tabTitle':'发布',
          'curr':false,
          url:'/square',
        },
        {
          'tabTitle':'聊天',
          'curr':false,
          url:'/chat',
        },
        {
          'tabTitle':'我的',
          'curr':false,
          url:'/myself',
        }
      ],
      releaseShow:false,
    }
  },
  components:{
    release,
  },
  mounted(){

  },
  watch:{
  },
  methods: {
    tabLoad(key){
      console.log(key);
      this.$router.push(key.url)
    },
    releaseHandle(){
      this.releaseShow = true;
    }
  }
}
</script>
<style lang="scss" scoped>
.bank-footer{
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 1rem;
  background-color: #fff;
  &>ul{
    display: flex;
    position: relative;
    &>li{
      display: flex;
      flex: 1;
      flex-direction:column;
      justify-content: center;
      align-items: center;
      height: 1rem;
      img{
        width: .4rem;
        height: .4rem;
        background: #D8D8D8;
      }
      span{
        font-size: .2rem;
        color: #8C8C8C;
      }
    }
    .selectAct{
      span{
        font-size: .2rem;
        color: #42B3BE;
      }
    }
    .release{
      width: 1.1rem;
      height: 1.1rem;
      border-radius: 100%;
      background-color: #fff;
      box-shadow: 0px -8px 28px 0px rgba(0,0,0,0.03);
      position: absolute;
      left: 43%;
      bottom: .45rem;
      padding: .1rem;
      z-index: 0;
      &-add{
        width: .9rem;
        height: .9rem;
        border-radius: 100%;
        background: #42B3BE;
        box-shadow: 0px 6px 10px 0px rgba(66,179,190,0.2);
        text-align: center;
        line-height: 1.15rem;
        img{
          width: .45rem;
          height: .45rem;
          display: inline-block;
        }
      }
    }
  }
  
}
</style>
