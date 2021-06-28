<template>
  <div class="bank-footer">
    <ul>
      <li v-for="item in tabList" :key="item.tabTitle">
        <img :src="item.icon" alt="">
        <span>{{item.tabTitle}}</span>
      </li>
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
          'icon':'http://img10.360buyimg.com/uba/jfs/t26779/215/2118525153/2413/470d1613/5bf767b2N075957b7.jpg',
          'activeIcon':'http://img11.360buyimg.com/uba/jfs/t27370/260/2117900302/3274/bd097e85/5bf7921bNafc526e2.jpg'
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
  ul{
    display: flex;
    li{
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
  }
}
</style>
