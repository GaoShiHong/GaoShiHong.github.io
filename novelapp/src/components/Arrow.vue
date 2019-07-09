<template>
  <div class="arrow" v-on:click="back" v-show="this.$route.meta.isArrowShow">
    <span class="fa fa-arrow-left"></span>
  </div>
</template>
<style lang="less" scoped>
.arrow {
  position: absolute;
  top: 8px;
  left: 5px;
  span {
    display: block;
    width: 20px;
    height: 20px;
    color: white;
  }
}
</style>
<script>
export default {
  name: "arrow",
  methods: {
    back() {
      this.$router.go(-1);
      // console.log(this.$route.params);
      
    }
  },
 
};
</script>