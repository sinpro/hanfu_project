<template>
  <div class="bank-footer">
    <ul>
      <li v-for="item in tabList" :key="item.tabTitle">
        <img :src="item.icon" alt="">
        <span>{{item.tabTitle}}</span>
      </li>
      <div class="release" @click="releaseHandle">
        <div class="release-add">
          <!-- <nut-icon type="plus"></nut-icon> -->
          <img src="../../images/icon/plus_white.png" alt="">
        </div>
      </div>
      <!-- 弹窗 -->
      <nut-actionsheet :is-visible="isVisible" 
          @close="()=>null"
          @choose="chooseItem"
      >
        <div slot="custom" class="custom-wrap">
          <ul>
            <li></li>
            <li></li>
            <p>
              <span @click="releaseHandle"><img src="../../images/icon/close_white.png" alt=""></span>
            </p>
          </ul>
          
        </div>
        <!-- <div slot="cancel" class="cancel-wrap">
          取消
        </div> -->
      </nut-actionsheet>
    </ul>
  </div>
</template>
<script>
export default {
  name:'BankFooter',
  data(){
    return {
      tabList:[
        {
          'tabTitle':'广场',
          'curr':true,
          'icon':'http://img13.360buyimg.com/uba/jfs/t30331/209/562746340/2190/6619973d/5bf763aaN6ff02099.jpg',
          'activeIcon':'http://img20.360buyimg.com/uba/jfs/t28675/125/569589124/2710/fe1b0e7c/5bf79218Nbc49fc24.jpg'
        },
        {
          'tabTitle':'遇见',
          'curr':false,
          'icon':'http://img13.360buyimg.com/uba/jfs/t27280/289/2061314663/2392/872e32ff/5bf76318Ndc80c1d8.jpg',
          'activeIcon':'http://img14.360buyimg.com/uba/jfs/t28468/128/565494642/3313/ce508dd6/5bf79214Nab2a3076.jpg'
        },
        {
          'tabTitle':'发布',
          'curr':false,
          'icon':'',
          'activeIcon':''
        },
        {
          'tabTitle':'聊天',
          'curr':false,
          'icon':'http://img10.360buyimg.com/uba/jfs/t26779/215/2118525153/2413/470d1613/5bf767b2N075957b7.jpg',
          'activeIcon':'http://img11.360buyimg.com/uba/jfs/t27370/260/2117900302/3274/bd097e85/5bf7921bNafc526e2.jpg'
        },
        {
          'tabTitle':'我的',
          'curr':false,
          'icon':'http://img10.360buyimg.com/uba/jfs/t26779/215/2118525153/2413/470d1613/5bf767b2N075957b7.jpg',
          'activeIcon':'http://img11.360buyimg.com/uba/jfs/t27370/260/2117900302/3274/bd097e85/5bf7921bNafc526e2.jpg'
        }
      ],
      sex: '请选择',
      isVisible: false,
      menuItems: [
          {
              'name': '男',
              'value': 0
          },
          {
              'name': '女',
              'value': 1
          }
      ]
    }
  },
  components:{

  },
  mounted(){

  },
  watch:{
  },
  methods: {
    tabSwitch1:function(value,index){
      console.log(index);
    },
    releaseHandle(){
      this.isVisible = !this.isVisible;
    },
    switchActionSheet() {
        this.isVisible = !this.isVisible;
    },

    chooseItem(itemParams) {
        this.sex = itemParams.name;
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
}
</style>
