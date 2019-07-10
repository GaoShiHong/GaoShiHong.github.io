<template>
  <div class="novelDetail">
    <Title>{{cont.title}}</Title>
    <div class="introd">
      <img :src="imgsrc" alt>
      <div class="text">
        <strong>{{cont.title}}</strong>
        <p>
          <span>{{cont.author}}</span>
        </p>
        <!-- <p>11小时前</p> -->
        <p>
          <span>{{updated}}</span>|
          <span>{{wordCount}}字</span>|
          <span>{{majorCate}}</span>
        </p>
      
      </div>
        <button class="newtext" v-on:click="getLast">追更新</button>
        <button class="firsttext" v-on:click="getFirst">开始阅读</button>
    </div>
    <div class="numbers">
        <li>
            <p>追书人气</p>
            <p>{{latelyFollower}}</p>
        </li>
         <li>
            <p>读者留存率</p>
            <p>{{retentionRatio}}</p>
        </li>
         <li>
            <p>日更新字数</p>
            <p>{{serializeWordCount}}</p>
        </li>
    </div>
    <div class="tag">
        <button v-for="(item, index) in tags" :key="index" >{{item}}</button>
    </div>
    <div class="longIntro">
        <p>{{longIntro}}</p>
    </div>
  </div>
</template>
<style lang="less" scoped>
.novelDetail {
  .introd {
    width: 100%;
    padding: 5px;
    overflow: hidden;
     border-bottom: 1px solid #f0f5f7;
    img {
      width: 20%;
      height: 80px;
      float: left;
    }
    .text {
      float: left;
      padding: 0 10px;
      width: 70%;
      p {
        padding-top: 10px;
      }
     
    }
     button{
          width: 100px;
          line-height: 25px;
          background: #4da2fd;
          outline: none;
          border: none;
          margin:0 20px;
          &:nth-of-type(1){
              float: left;
          }
           &:nth-of-type(2){
              float: right;
          }
      }
  }
  .numbers{
     clear: both;
      padding: 20px 0;
       overflow: hidden;
       border-bottom: 1px solid #f0f5f7;
      li{
          list-style: none;
          width: 33.33%;
          float: left;
          text-align: center;
          // margin: 0 10px;
          
         
         
      }
  }
  .tag{
     border-bottom: 1px solid #f0f5f7;
     padding: 10px;
      button{
          // width: 60px;
          padding: 0 5px;
      line-height: 20px;
    background: #deb887;
    outline: none;
     border: none;
     margin: 5px;
     
     &:nth-child(1){
        background: #ff7f50;
     }
      &:nth-child(3){
          background: #5f9ea0;
     }
      &:nth-child(2){
          background: #4da2fd;
     }
    
      }
  }
  .longIntro{
      p{
          padding: 5px;
          clear: both;
      }
  }
}
</style>

<script>
import Title from "@/components/Title.vue";
import axios from "axios";
export default {
  components: {
    Title
  },
  data() {
    return {
      cont: null,
      imgsrc: null,
      gethttp:null,
      substance:null,
      updated:null,
      wordCount:null,
      majorCate:null,
      latelyFollower:null,
      retentionRatio:null,
      serializeWordCount:null,
      tags:null,
      longIntro:null
      // dataContent:null,
    };
  },
  created() {
    // console.log(this.$route.params.detail);
    this.cont = this.$route.params.detail;
    
    // console.log(this.cont);
    // this.substance=this.getAxios(this.cont['_id']);
    this.gethttp='//api.kele8.cn/agent?url=http://api.zhuishushenqi.com/book/'
    +this.cont['_id'];
          axios
      .get(this.gethttp,)
      .then(res => {
        this.substance=res.data;
        // console.log(this.substance);
        //  console.log(this.cont);
        this.imgsrc = "http://statics.zhuishushenqi.com" + this.substance.cover;
        this.updated=this.substance.updated;
         this.wordCount=this.substance.wordCount;
          this.majorCate=this.substance.majorCate;
           this.latelyFollower=this.substance.latelyFollower;
           this.retentionRatio=this.substance.retentionRatio;
           this.serializeWordCount=this.substance.serializeWordCount;
           this.tags=this.substance.tags;
           this.longIntro=this.substance.longIntro;
        // return res.data;
      })
      .catch(err => {
        console.error(err);
      });
      
    // console.log(this.substance);
    // this.imgsrc = "http://statics.zhuishushenqi.com" + this.substance.cover;
  },
 methods: {
     getFirst(){
         this.$router.push({name:'novelcontent',params:{cont:this.cont},
         query:{gender:this.gender,
         major:this.major
         }});
     },
     getLast(){
         this.$router.push({name:'novelcontent',params:{cont:this.cont},
         query:{
            gender:this.gender,
            major:this.major 
         }
         
         });
     }
 },
  beforeRouteLeave(to, from, next) {
    if (to.name == "seniorityContentId") {
      to.params.gaoshi = from.params.gaoshi;
      to.query.userid = from.query.userid;
    } else if (to.name == "xuanhuanitem") {
      console.log("out--name=xuanhuanitem");

      to.params.partDetail = from.params.detail;
      to.query.back = "yes";
      to.query.gender = from.query.gender;
      to.query.major = from.query.major;
    }

    next();
  },
  beforeRouteEnter(to, from, next) {
    if (from.name == "seniorityContentId") {
      to.params.gaoshi = from.params.gaoshi;
      to.query.userid = from.query.userid;
    } else if (from.name == "xuanhuanitem") {
      console.log("in--name=xuanhuanitem");
      to.query.major = from.query.major;
      to.query.gender = from.query.gender;
    }
    // console.log(from.params.partDetail+"from");

    next();
  }
};
</script>
