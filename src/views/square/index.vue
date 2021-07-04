<template>
  <div class="square">
    <!-- <feature :isVisible.sync="isShow" :isShare="false"/> -->
    <bankHeader :isBack="false"/>
  </div>
</template>
<script>
import feature from "src/components/feature";
import bankHeader from 'components/bankHeader';
export default {
  name:"Square",
  data(){
    return {
      isShow:false
    }
  },
  components:{
    feature,
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
