<template>
  <div class="index">
    <div class="editor">
      <editor v-model="detail" :isClear="isClear" @change="change"></editor>
    </div>
    <!-- <moreFeature :isVisible.sync="isShow" :isShare="false"/> -->
  </div>
</template>
<script>
import editor from "src/components/editor";
// import moreFeature from "src/components/feature";
export default {
  name:"Index",
  data(){
    return {
      isClear: false,
      detail:"213123312",
      isShow:false
    }
  },
  components:{
    editor,
    // moreFeature
  },
  mounted(){
    
  },
  methods:{
    change(val) {
      console.log(val)
      this.isShow=true;
    },
  }
}
</script>
<style lang="scss" scoped>

</style>
