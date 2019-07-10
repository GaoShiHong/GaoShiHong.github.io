<template>
  <div class="search">
       <!-- <Title>搜索</Title> -->
   <div class="insert">
     <div class="bg"></div>
     <span class="fa fa-search" v-on:click="getsearch()"></span>
     <div class="listcontent">
        <input type="text" placeholder="请输入内容" v-model="keyword"> 
       <ul v-if="show" class="ullist">
          <li v-for="(item, index) in listKey" :key="index" v-on:click="getnovel(item)">{{item}}</li> 
       </ul>
     </div>
      <Firstintroduction :content="contents"></Firstintroduction>
   </div>
  </div>
</template>
<style lang="less" scoped>
.search{
  .insert{
    width: 100%;
    position: relative;
    .bg{
       width: 100%;
       height: 30px;
      background: #4da2fd; 
       position: absolute;
        top: 0;
        left: 0;
        z-index: -1;
    }
    span{
      position: absolute;
      top: 5px;
      left: 35px;
      width: 20px;
      height: 20;
      display: block;
      color: #333;
      z-index: 999;
    }
    .listcontent{
       width: 80%;
        margin: 0 auto;
       position: relative;
      input{
      
      // width: 100%;
      line-height: 29px;
     border-radius: 10px;
    outline: none;
    border: none;
      display: block;
      padding:0 20px;
      width: 83%;
    }
    .ullist{
      background: #f2f2f2;
      position: absolute;
      top: 30px;
      left: 0;
      width: 100%;
        li{
        list-style: none;
        // background: #f0f5f7;
        // margin: 2px 0;
        line-height: 29px;
        border-bottom: 1px solid #add8e6;
        padding-left: 5px;
      }
    }
    
    }
    
  }
}
</style>

<script>
import Title from "@/components/Title.vue";
import Firstintroduction from "@/components/Firstintroduction.vue";

import axios from "axios";
export default {
  components:{
    Title,
    Firstintroduction
  },
  data() {
    return {
      keyword:null,
      gethttp:null,
      listKey:null,
      show:true,
      
      contents:null
    }
    
  },
  watch: {
    keyword:function(){
      
        this.show=true;
      this.gethttp='http://api.kele8.cn/agent/http://api.zhuishushenqi.com/book/auto-complete?query='
       +this.keyword;
       axios
       
      .get(this.gethttp)
      .then(res => {
           this.listKey=res.data.keywords;
           console.log(this.listKey);
      })
      .catch(err => {
        console.error(err);
      });
    }  
  },
  methods: {
    getnovel(item){
      this.keyword=item;
      this.show=false;
    },
    getsearch(){
      this.show=false;
      this.gethttp="http://api.kele8.cn/agent?url=http://api.zhuishushenqi.com/book/fuzzy-search?query="
      +this.keyword
       axios
      .get(
        this.gethttp
      )
      .then(res => {
        this.contents=res.data.books;
        // console.log( this.contents);
      })
      .catch(err => {
        
        console.error(err);
       
      });
        }
  },
}
</script>