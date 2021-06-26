<template>
  <div>
    <!--头部-->
    <bankHeader></bankHeader>
    <!--内容-->
    <bankMain></bankMain>
    <!--头部-->
    <bankFooter></bankFooter>
  </div>
</template>
<script>
import bankHeader from '../bankHeader';
import bankMain from '../bankMain';
import bankFooter from '../bankFooter';
export default {
  name:'Layout',
  data(){
    return {
      isFixed:false
    }
  },
  components:{
    bankHeader,
    bankMain,
    bankFooter
  },
  created(){},
  mounted(){
  
  },
  methods:{
    
  },
  beforeDestroy() {
   
  }
}
</script>
<style lang="scss" scoped>
</style>
