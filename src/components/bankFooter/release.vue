<template>
  <div class="release">
    <nut-actionsheet :is-visible="isVisible" 
          @close="()=>null"
      >
        <div slot="custom" class="custom-wrap">
          <ul>
            <li v-for="item in releseList" :key="item.id" @click="releaseLoad(item.id)">
              <div><img :src="item.imgUrl" alt=""></div>
              <div>
                <span>{{item.title}}</span>
                <span>{{item.summary}}</span>
              </div>
            </li>
            <p>
              <span @click="closeRelease"><img src="../../images/icon/close_white.png" alt=""></span>
            </p>
          </ul>
        </div>
    </nut-actionsheet>
  </div>
</template>
<script>
export default {
  name:'Release',
  props:{
    isVisible:{
        type:Boolean,
        default:false
    }
  },
  data(){
    return {
      releseList:[
          {id:'1',title:'发动态',summary:'用图文、视屏分享生活，记录美好',imgUrl:require('../../images/icon/search.png'),url:''},
          {id:'2',title:'发设计',summary:'让设计面向同袍',imgUrl:require('../../images/icon/setting.png'),url:''}
      ]
    }
  },
  computed: {
    
  },
  mounted(){
    
  },
  methods:{
    closeRelease(){
      this.$emit('update:isVisible', false);
    },
    releaseLoad(key){
        console.log(key)
    }
  }
}
</script>
<style lang="scss" scoped>
.custom-wrap{
    width: 100%;
    padding: .4rem;
    background-color: #fff;
    ul{
      li{
        width: 100%;
        height: 1.5rem;
        border-radius: 16px;
        box-shadow: 0px 6px 20px 0px rgba(39,39,40,0.04);
        display: flex;
        div{
          display: flex;
          justify-content: center;
          img{
            width: .7rem;
            height: .7rem;
          }
          span{
            color: #fff;
            &:nth-child(1){
              font-size: .32rem;
            }
            &:nth-child(2){
              font-size: .26rem;
            }
          }
        }
        div:nth-child(1){ 
          flex: 2;
          justify-content: flex-end;
          align-items: center;
          
        }
        div:nth-child(2){
          flex: 8;
          flex-direction: column;
          padding-left: .33rem;
        }
      }
      li:nth-child(1){
        background-image: linear-gradient(127deg, #FFC34A 0%, #FF9A22 100%);
      }
      li:nth-child(2){
        background-image: linear-gradient(127deg, #82D5DD 0%, #42B3BE 100%);
        margin-top: .48rem;
        margin-bottom: .8rem;
      }
      p{
        text-align: center;
        span{
          display: inline-block;
          width: .96rem;
          height: .96rem;
          border-radius: 100%;
          background-color: #42B3BE;
          text-align: center;
          line-height: 1.2rem;
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
