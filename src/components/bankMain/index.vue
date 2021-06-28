<template>
  <div class="bank-main">
    <bankHeader :isBack="false"/>
    <div class="bank-main-content">
      <router-view></router-view>
    </div>
    <bankFooter></bankFooter>
  </div>
</template>
<script>
import bankHeader from 'components/bankHeader';
import bankFooter from 'components/bankFooter';
export default {
  name:'BankMain',
  data(){
    return {
      
    }
  },
  computed: {
  },
  components:{
    bankHeader,
    bankFooter
  },
  watch: {
  },
  mounted(){
    
  },
  methods:{
    
  }
}
</script>
<style lang="scss" scoped>
.bank-main{
  &-content{
    position: fixed;
    top: .88rem;
    bottom: 1rem;
    left:0;
    background-color:#d1d1d1;
    width: 100%;
  }
}
</style>
