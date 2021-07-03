<template>
  <div class="index">
    <div class="editor">
      <editor v-model="detail" :isClear="isClear" @change="change"></editor>
    </div>
    
  </div>
</template>
<script>
import editor from "src/components/editor";
export default {
  name:"Index",
  data(){
    return {
      isClear: false,
      detail:"213123312"
    }
  },
  components:{
    editor
  },
  mounted(){
    
  },
  methods:{
    change(val) {
      console.log(val)
      
    },
  }
}
</script>
<style lang="scss" scoped>

</style>
