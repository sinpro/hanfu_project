<template>
  <div class="more-feature">
    <nut-actionsheet 
      :is-visible="isVisible" 
      @close="()=>null"
      cancelTxt="取消"
      @cancel="cancelHandle"
      >
        <div slot="custom" class="more-feature">
          <p v-if="isShare">分享至</p>
          <ul>  
            <li v-for="item in (isShare?shareList:featureList)" :key="item.id" >
              <label @click="featureLoad(item)">
                <img :src="item.imgUrl" alt="">
                <span>{{item.title}}</span>
              </label>
            </li>
          </ul>
        </div>
    </nut-actionsheet>
  </div>
</template>
<script>
export default {
  name:'BankHeader',
  props:{
    isVisible:{
      type:Boolean,
      default:false
    },
    isShare:{
      type:Boolean,
      default:false
    }
  },
  data(){
    return {
      featureList:[
        {id:'1',title:'私聊',imgUrl:require('../../images/pages/chart.png'),url:''},
        {id:'2',title:'关注',imgUrl:require('../../images/pages/follow.png'),url:''},
        {id:'3',title:'不喜欢',imgUrl:require('../../images/pages/dotlike.png'),url:''},
        {id:'4',title:'举报',imgUrl:require('../../images/pages/report.png'),url:''},
      ],
      shareList:[
        {id:'1',title:'微信好友',imgUrl:require('../../images/pages/wechat.png'),url:''},
        {id:'2',title:'朋友圈',imgUrl:require('../../images/pages/wechatmoments.png'),url:''},
        {id:'3',title:'新浪微博',imgUrl:require('../../images/pages/microblog.png'),url:''},
        {id:'4',title:'QQ好友',imgUrl:require('../../images/pages/qq.png'),url:''},
        {id:'5',title:'复制链接',imgUrl:require('../../images/pages/copylink.png'),url:''},
      ]
    }
  },
  computed: {
    
  },
  mounted(){
    
  },
  methods:{
    cancelHandle(){
      this.$emit('update:isVisible', false);
    },
    featureLoad(key){
      console.log(key)
    }
  }
}
</script>
<style lang="scss" scoped>
.more-feature{
  width: 100%;
  padding: .6rem 0; 
  background-color: #fff;
  /deep/.nut-actionsheet-cancel, .nut-actionsheet-item{
    height: 1rem;
    line-height: .7rem;
  }
  p{
    font-size: .28rem;
    color: #646466;
    letter-spacing: 0;
    text-align: center;
    margin-bottom: .36rem;
    margin-top: -.1rem;
  }
  ul{
    display: flex;
flex-wrap: wrap;
    li{
      width: 25%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      margin-bottom: .4rem;
      label{
        text-align: center;
      }
      img{
        width: .96rem;
        height: .96rem;
        margin-bottom: .2rem;
      }
      span{
        font-size: .26rem;
        color: #646466;
      }
    }
  }
}
</style>
