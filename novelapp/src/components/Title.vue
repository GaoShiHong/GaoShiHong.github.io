<template>
    <div class="titles">
        <Arrow></Arrow>
        <slot></slot>
    </div>
</template>
<style lang="less" scoped>
.titles{
    width: 100%;
    background: #4da2fd;      
    text-align: center;
    color: white;
    line-height: 30px; 
    height: 30px; 
    font-size: 10px;
}
</style>
<script>

import Arrow from "@/components/Arrow.vue";
export default {
  components:{
    Arrow
  }
}
</script>
