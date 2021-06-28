<template>
  <div class="bank-header themePaddinglr">
    <img v-if="isBack" src="../../images/icon/back_left.png" alt="" @click="()=>$router.go(-1)">
    <ul v-else class="bank-header-nav">
      <li v-for="item in navList" :key="item.id" :class="item.isAct?'actHover':''">
        <span @click="switchNav(item)">{{item.name}}</span>
      </li>
      <li>
        <label><nut-icon type="search"></nut-icon></label>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name:'BankHeader',
  props:{
    isBack:{
      type:Boolean,
      default:true
    }
  },
  data(){
    return {
      navList:[
        {name:'关注',id:1,isAct:true},
        {name:'广场',id:2,isAct:false},
        {name:'视屏',id:3,isAct:false},
        {name:'设计大赛',id:4,isAct:false},
      ]
    }
  },
  computed: {
    
  },
  mounted(){
    
  },
  methods:{
    switchNav(key){
     this.navList.forEach(item=>{
       if(item.id===key.id){
         item.isAct=true
       }else{
         item.isAct=false
       }
       
     })
    },
    tabSwitch: function(index, event) {
      console.log(index + '--' + event);
    }
  }
}
</script>
<style lang="scss" scoped>
.bank-header{
  height: .88rem;
  img{
    width: .48rem;
    height: .48rem;
    display: inline-block;
    margin-top: .2rem;
  }
  &-nav{
    display: flex;
    height: 100%;
    li{
      display: flex;
      flex: 1;
      justify-content: center;
      align-items: center;
      font-size:.32rem;
      color: #898A8C;
      font-weight: 400;
    }
    li.actHover{
      font-size: .4rem;
      color: #272728;
      letter-spacing: 0;
      font-weight: 600;
      position: relative;
      &:after {
        content: "";
        position: absolute;
        z-index: 1;
        bottom: 6px;
        left: 36%;
        width:10px;
        height:5px;
        border-radius:0 0 10px 10px;
        // transform: scaleY(-1);
        border: 3px solid #42B3BE;
        border-top: none;
      }
    }
    li:last-child{
     justify-content: flex-end;
    }
  }
}
</style>
