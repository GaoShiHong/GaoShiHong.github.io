<template>
  <div class="seniority">
   <Title>排行榜</Title>
   <div class="male">
     <p v-on:click="getSeniorityboy">男</p>
     <ul class="content">

         <!-- <li v-for="(item, index) in boy" :key="index" 
         v-on:click="getSeniorityContent_boy(item)"
         >
            
           </li> -->
           <div v-for="(item, index) in boy" :key="index">
             <li v-if="index<6||isboyShow" v-on:click="getSeniorityContent_boy(item)">
               <img :src="'http://statics.zhuishushenqi.com'+item.cover"> 
               {{item.title}}</li>
           </div>
     </ul>
   </div>
   <div class="female">
     <p v-on:click="getSenioritygirl">女</p>
     <ul class="content">
       <div v-for="(item, index) in girl" :key="index">
             <li v-if="index<6||isgirlShow" v-on:click="getSeniorityContent_girl(item)">
               <img :src="'http://statics.zhuishushenqi.com'+item.cover"> 
               {{item.title}}</li>
        </div>
        <!-- <li v-for="(item, index) in girl" :key="index" v-on:click="getSeniorityContent_girl(item)">{{item.title}}</li> -->
     </ul>
   </div>
  </div>
</template>
<style lang="less" scoped>
 .seniority{
    .male{
      p{
        background: #f9f0f0;
        line-height: 30px;
      }
      ul{
        li{
          
            line-height: 28px;
          border-bottom: 1px solid lightslategrey;
          font-size: 15px;
          padding-left: 10px;
          img{
            width: 20px;
            height: 20px;
            vertical-align: middle;
          }
        }
      }
    }
    .female{
     p{
        background: #f9f0f0;
        line-height: 30px;
      }
      ul{
        li{
          line-height: 28px;
          border-bottom: 1px solid lightslategrey;
          font-size: 15px;
          padding-left: 10px;
          //  border-top: 1px solid lightslategrey;
          img{
            width: 20px;
            height: 20px;
            vertical-align: middle;
          }
        }
      }
    }
  }
</style>
 
<script>
import Title from "@/components/Title.vue";
import axios from "axios";
export default {
  components:{
    Title
  },
  data() {
    return {
      boy:null,
      girl:null,
      isboyShow:false,
      isgirlShow:false,
      imgSrc:null,
    }
  },
  created() {
     axios
      .get('//api.kele8.cn/agent?url=http://api.zhuishushenqi.com/ranking/gender')
      .then(res => {
        this.boy=res.data.male;
        //  console.log(this.boy);
         
         this.girl=res.data.female;
        //  console.log(this.girl);
        // console.log(res);
      })
      .catch(err => {
        console.error(err);
      });
  },
  methods: {
    getSeniorityboy(){
      this.isboyShow=!this.isboyShow;
    },
     getSenioritygirl(){
      this.isgirlShow=!this.isgirlShow;
    },
    getSeniorityContent_boy(item){
      // console.log(item);
      
      this.$router.push({ name: 'seniorityContentId', params: { gaoshi: item},query:{
        userid:"_id"
      }})
      
    },
    getSeniorityContent_girl(item){
      this.$router.push({ name: 'seniorityContentId',  params: { gaoshi: item},query:{
        userid:"_id"
      }})
    }
  },
}
</script>