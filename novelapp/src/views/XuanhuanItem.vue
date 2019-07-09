<template>
    <div class="xuanhuanItem">
         <Firstintroduction :content="contents"></Firstintroduction>
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
        'type',
        'minor',
  ],
  data() {
      return {
          gender:this.$route.query.gender,     
            major:this.$route.query.major,
            start:0,
            limit:20,
            gethttp:'http://api.kele8.cn/agent/https://api.zhuishushenqi.com/book/by-categories',
            contents:null,
            dataContent:null
      }
  },
  watch: {
      type:function () {
         console.log("type--chage");
         this.$route.query.type=this.type,
           this.getAxios();
      },
      minor:function () {
         console.log("minor--chage");
         this.$route.query.minor=this.minor,
           this.getAxios();
      }
  },
  created() {
      if (this.$route.query.back=="yes") {
        this.gender=this.$route.query.gender;
        this.major=this.$route.query.major;
      }
      this.getAxios();
  },
  // beforeRouteEnter (to, from, next) {
  //   next();
  //   if (from.name=="novelDetail") {
  //     console.log(to.$route);
  //   //  to.$route.params.gender="male";
  //     //  to.$route.params.major="奇幻";
  //     // console.log(to);
      
  //   }
  // },
  methods: {
      getAxios(){
          axios
      .get(this.gethttp,{
          params:{
            gender:this.gender,
            type:this.type,
            major:this.major,
            minor:this.minor,
            start:this.start,
            limit:this.limit,
          }
      })
      .then(res => {
        //  console.log(res);
        this.contents=res.data.books;
        // console.log(this.contents);
        this.dataContent=this.$route.params;
      })
      .catch(err => {
        console.error(err);
      });
      }
  },
}
</script>