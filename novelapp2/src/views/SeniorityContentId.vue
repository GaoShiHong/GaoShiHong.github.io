<template>
  <div class="seniorityContent_id">
      <!-- <p v-for="(item, index) in contents" :key="index">{{item}}</p> -->
    <Firstintroduction :content="contents"></Firstintroduction>
    <!-- <h1>dfasdfas</h1> -->
  </div>
</template>
<script>
import Firstintroduction from "@/components/Firstintroduction.vue";
import axios from "axios";
export default {
  components: {
    Firstintroduction,

  },
  props:[
    'userid'
  ],
    data() {
        return {
            gethttp:null,
            contents:[],
            gaoshi:null,
        }
    },
    watch: {
      userid:function (){
        console.log("userid变化"+this.userid);
            this.$route.query.userid=this.userid; 
            // console.log(this.query);
             
      //  console.log(this.gaoshi[this.userid]);
       
             if (this.gaoshi[this.userid]) {
                 this.getContentid(this.gaoshi[this.userid])
             } 
             else{
                 this.contents=[];
             }
     
      }
      // $route: function(to ,from){
      //   // console.log(this.$route.params);
      //    this.userid=to.query.userid;  
      //  console.log(this.gaoshi[this.userid]);
       
      //        if (this.gaoshi[this.userid]) {
      //            this.getContentid(this.gaoshi[this.userid])
      //        } 
      //        else{
      //            this.contents=[];
      //        }
             
        
      // }
    },
    methods: {
        getContentid(shuju){
            //  console.log(this);
         this.gethttp="//api.kele8.cn/agent?url=http://api.zhuishushenqi.com/ranking/"
        +shuju;
            axios
      .get(
        this.gethttp
      )
      .then(res => {
        // this.contents = res.data.ranking.books;
        this.contents=[];
            for(let i=0;i<10;i++){
           this.contents.push(res.data.ranking.books[i]) 
        }      
      })
      .catch(err => {
        
        console.error(err);
       
      });
        }
    },
    created() {
        // console.log(this);
        this.gaoshi =this.$route.params.gaoshi
        // this.userid=this.$route.query.userid;
        this.gethttp="//api.kele8.cn/agent?url=http://api.zhuishushenqi.com/ranking/"
        +this.gaoshi[this.$route.query.userid];
        // console.log(this.$route.params);
        // console.log(this.$route.params.gaoshi[this.userid]);
        
        axios
      .get(
        this.gethttp
      )
      .then(res => {
        // this.contents = res.data.ranking.books;
        for(let i=0;i<10;i++){
           this.contents.push(res.data.ranking.books[i]) 
        }
        
        
      })
      .catch(err => {
        console.error(err);
      });
    },
}
</script>