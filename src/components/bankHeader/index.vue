<template>
  <div class="bank-header themePaddinglr">
    <img src="../../images/icon/back_left.png" alt="" @click="()=>$router.go(-1)">
  </div>
</template>
<script>
export default {
  name:'BankHeader',
  data(){
    return {
     
    }
  },
  computed: {
    
  },
  mounted(){
    
  },
  methods:{
   
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
}
</style>
