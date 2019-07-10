<template>
  <div class="xuanhuan">
    <Title>{{title}}</Title>
    <ul>
      <!-- <li>热门</li>
      <li>新书</li>
      <li>好评</li>
      <li>包月</li>
      <li>完结</li> -->
      <li v-for="(item, index) in tabs" :key="index" v-on:click="getType(item)"
      :class={light:item.isclass}
      >{{item.title}}</li>
    </ul>
    <ul>
      <li v-on:click="getMinor('')">全部</li>
      <li v-for="(item, index) in contentli" :key="index" v-on:click="getMinor(item,index)"
      
      >{{item}}</li>
    </ul>
     <!-- <router-view :type='type' :minor='minor' 
     v-on:chage-minor="chageminor"
     v-on:chage-type="chagetype"
     ></router-view> -->
     <router-view :type='type' :minor='minor'></router-view>
     <!-- <router-view ></router-view> -->
  </div>
</template>
<style lang="less" scoped>
.xuanhuan {
  ul {
    list-style: none;
    padding: 5px;
    width: 100%;
    overflow: hidden;
    border-bottom: 1px solid lightslategray;
    li {
      float: left;
      font-size: 10px;
      color: rgb(29, 28, 28);
      padding-right: 3px;
      &.light{
          background: lightblue;
          color: blueviolet;
      }
      // &.lights{
      //     background: lightblue;
      //     color: blueviolet;
      // }
    }
  }
  .aaa{
    background: lightblue;
    color: blueviolet;
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
      type:'hot',
      minor:'',
      title: null,
      content: null,
      contentli: null,
      islights:null,
      tabs:[
        {title:'热门',type:'hot' ,isclass:true},
        {title:'新书',type:'new' ,isclass:false},
        {title:'好评',type:'repulation' ,isclass:false},
        {title:'包月',type:'month' ,isclass:false},
        {title:'完结',type:'over' ,isclass:false},
      ]
    };
  },
  methods: {
    getType(item){
      // console.log(item);
      this.type=item.type;
      for(let i=0;i<this.tabs.length;i++){
        if(this.tabs[i].isclass){
          this.tabs[i].isclass=false;
          break;
        }
      }
      item.isclass=true;
    },
    getMinor(item,index){
      // console.log(item);
      this.minor=item;
      this.islights=index;
      console.log(this.islights);
      
      
    },
    // chageminor(minor){
    //   // this.minor=minor;
    //     console.log(chageminor+"121231");
        
    // },
    // chagetype(type){
    //   //  this.type=type;
    //     console.log(chagetype+"121231");
    // }
  },
  // beforeRouteLeave(to, from, next) {
    
    
  //   this.title = to.params.name;
  //   next();
  // },
  created() {
    // console.log(this.$route.params);
    if (this.$route.params.partDetail.name) {
      this.title = this.$route.params.partDetail.name;
    }else{
       this.title = this.$route.params.partDetail.majorCate;
    }
    
    
    axios
      .get(
        "//api.kele8.cn/agent?url=http://api.zhuishushenqi.com/cats/lv2"
      )
      .then(res => {
        this.content = res.data;
        // console.log(this.content);
        for (let i = 0; i < this.content.male.length; i++) {
          if (this.title == this.content.male[i].major) {
            this.contentli = this.content.male[i].mins;
            // console.log(this.contentli);
            break;
          }
        }
        for (let i = 0; i < this.content.female.length; i++) {
          if (this.title == this.content.female[i].major) {
            this.contentli = this.content.female[i].mins;
            // console.log(this.contentli);
            break;
          }
        }
      })
      .catch(err => {
        console.error(err);
      });
  }
};
</script>