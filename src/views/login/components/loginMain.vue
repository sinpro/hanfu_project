<template>
  <div class="login-main">
    <bankHeader></bankHeader>
    <router-view></router-view>
  </div>
</template>
<script>
import bankHeader from 'components/bankHeader';
export default {
  name:"LoginMain",
  data(){
      return {
        
      }
  },
  components:{
      bankHeader
  },
  mounted(){
    
  },
  methods:{
    
  }
}
</script>
<style lang="scss" scoped>

</style>
