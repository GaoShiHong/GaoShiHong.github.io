<template>
  <div class="indexs">
    <Title>首页</Title>
    
    
    <div class="boutique">
      <p>精品推荐</p>

    </div>
  </div>
</template>
<style lang="less" scoped>

.indexs {
  
  .boutique{
    p{
      &::before{
        width: 2px;
        height: 5px;
        display: inline-block;
        background: orange;
      }
    }
  }
}
</style>

<script>
import Title from "@/components/Title.vue";

export default {
  components: {
    Title
  },
  
  
};
</script>
 
