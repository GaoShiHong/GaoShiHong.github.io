<template>
  <div class="home">
   <h1>home</h1>
  </div>
</template>

<script>
// @ is an alias to /src

import axios from "axios";
export default {
  name: 'home',
  data() {
    return {
      recommends: null
    };
  },
  created() {
    axios
      .get('http://api.kele8.cn/agent?url=http://api.zhuishushenqi.com/book/fuzzy-search?query=斗罗', {
    query: {
      recommends: '斗罗'
    }
  })
      .then(res => {
        console.log(res);
        // this.recommends = res.data.data;
      })
      .catch(err => {
        console.error(err);
      });
  }
}
</script>
