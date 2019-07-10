<template>
  <div class="seniorityContent">
    <Title>{{this.title}}</Title>
    <!-- <Title>jfdjsal</Title> -->
    <ul>
        <li
        v-for="(item, index) in tabs"
          v-on:click="getStateid(item)"
          
          :key="index"
          :class="{light:item.isClass}"
        >
          <span>{{item.rank}}</span>
        </li>
      </ul>
    <router-view :userid='userid'></router-view>
    </div>
</template>
 <style lang='less' scoped >

  .seniorityContent {
    ul {
      width: 100%;
      list-style: none;
      background: lightblue;
      overflow: hidden;
      li {
        float: left;
        width: 33.33%;
        text-align: center;
        line-height: 36px;
        &.light {
          color: blueviolet;
        }
      }
    }
  }

</style>   
<script>
import Title from "@/components/Title.vue";
export default {
   data() {
    return {
     
      tabs: [
        { rank: "周榜", path: { name: "seniorityContentId" , params: { userid: "_id"}}, isClass: true },
        { rank: "月榜", path: { name: "seniorityContentId", params: { userid: 'monthRank'}}, isClass: false },
        { rank: "总榜", path: { name: "seniorityContentId", params: { userid: 'totalRank' }}, isClass: false },
        //  { rank: "周榜", path: { name: "seniorityContentId" , params: { userid: "_id",gaoshi:this.$route.params.gaoshi }}, isClass: true },
        // { rank: "月榜", path: { name: "seniorityContentId", params: { userid: 'monthRank' ,gaoshi:this.$route.params.gaoshi}}, isClass: false },
        // { rank: "总榜", path: { name: "seniorityContentId", params: { userid: 'totalRank' ,gaoshi:this.$route.params.gaoshi}}, isClass: false },
      ],
      title:null,
      gaoshihong:this.$route.params.gaoshi,
      userid:null
    };
  },
  methods: {
    getStateid(params){
      //  this.$router.push(params.path);
      this.userid=params.path.params.userid;
       this.$router.push({ name: 'seniorityContentId',  params: { gaoshi: this.$route.params.gaoshi},query:{
        userid: this.userid
      }})
      for (let i = 0; i < this.tabs.length; i++) {
        if (this.tabs[i].isClass) {
          this.tabs[i].isClass = false;
          break;
        }
      }
      params.isClass = true;
    }
  },
  components: {
    Title
  },
  created() {
    // console.log(this.$route.params);
    // console.log(this.$route.params.gaoshi);
    if (this.$route.params.gaoshi) {
      this.title=this.$route.params.gaoshi.title
    }
    
  },
}
</script>
