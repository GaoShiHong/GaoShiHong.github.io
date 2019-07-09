<template>
  <div>
    <Introduction
      v-for="(item, index) in content"
      :key="index"
      :cont="item"
      data-content="dataContent"
    ></Introduction>
    <p v-if="islive">无数据</p>
  </div>
</template>
<script>
import Introduction from "@/components/Introduction.vue";
export default {
  components: {
    Introduction
  },
  data() {
    return {
      islive: false
    };
  },
  props: ["content", "dataContent"],
  created() {},
  watch: {
    content: function() {
    //   console.log(this.content);
      if (this.content) {
        if (this.content.length != 0) {
          this.islive = false;
        } else {
          this.islive = true;
        }
      } else {
        this.islive = true;
      }
    }
  }
};
</script>
