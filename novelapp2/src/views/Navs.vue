<template>
    <div class="navs">
        <div id="nav">
      <!-- <router-link to="/">home</router-link> -->
      <ul>
        <li v-on:click="getState(item)" v-for="(item, index) in tabs" :key="index" :class={light:item.isClass}>
          <span>{{item.title}}</span>
        </li>       
      </ul>
       <router-view/>
    </div>
    </div>
</template>
<script>
export default {
  data() {
    return {
      tabs: [
        { title: "书架", path: { name: "bookshelf" }, isClass: true },
        { title: "分类", path: { name: "classify" }, isClass: false },
        { title: "排行", path: { name: "seniority" }, isClass: false },
        { title: "搜索", path: { name: "search" }, isClass: false }
      ]
    };
  },
  methods: {
    getState(params) {
      this.$router.push(params.path);
      for(let i=0;i<this.tabs.length;i++){
        if(this.tabs[i].isClass){
          this.tabs[i].isClass=false;
          break;
        }
      }
      params.isClass=true;
    }
  }
};
</script>
<style >
* {
  margin: 0;
  padding: 0;
}
</style>

<style lang='less' scoped >

.navs {
  #nav {
    overflow: scroll;
    ul {
      max-width: 360px;
      width: 100%;
      list-style: none;
      background: lightblue;
      position: absolute;
      bottom: 0;
      left: 0;
      li {
        float: left;
        width: 25%;
        text-align: center;
        &.light{
          color: blueviolet;
        }
        span{
          
          line-height: 36px;
         
        }
      }
    }
  }
}
</style>