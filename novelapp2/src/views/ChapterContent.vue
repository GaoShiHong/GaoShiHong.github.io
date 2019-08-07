<template>
  <div class="charptercontent">
    <div class="shangbiao">
     <div v-if="isshow">
        <Arrow></Arrow>
      {{this.$route.params.cont.title}}
     </div>
    </div>
    <!-- <Title>{{this.$route.params.cont.title}}</Title> -->
    <div class="juticontent" v-on:click="getshow">
      <div class="catalogue">

      </div>
      <h4>{{title}}</h4>
      <p >{{cpContent}}</p>
      <p v-if="!cpContent">搜索不到数据,可能是1.api问题2.当前小说版本过低</p>
    </div>
    <div class="addbook" v-on:click.stop="addbookshelf" v-if="isshow">加入书架</div>
    <div class="xiabiao" >
      <div v-if="isshow">
        <div class="setting" v-if="issettingshow">
        <div class="font">
          <span @click="fontadd">A+</span>
          <i>{{this.size-16}}</i>
          <span @click="fontreduce">A-</span>
        </div>
        <div class="bgcolor">
          <i v-for="(item, index) in colors" :key="index"
           @click="setbgcolor(item)" :class={light:item.isclass}></i>
         
        </div>
      </div>
      <div class="set">
        <span>日间模式</span>
        <span v-on:click="getsetting">设置</span>
        <span v-on:click="getchapshow">目录</span>
      </div>
      </div>
    </div>
    <div class="chapter" v-if="ischa">
      <li
        v-for="(item, index) in chapters"
        :key="index"
       v-on:click="getlistcontent(item)"
      >{{item.title}}</li>
    </div>

  </div>
</template>
<style lang="less" scoped>
.charptercontent {
  max-width: 360px;
  position: relative;
  .shangbiao {
    max-width: 360px;
    width: 100%;
    background: rgba(0, 0, 0, 0.5);
    text-align: center;
    color: white;
    line-height: 30px;
    // height: 30px;
    font-size: 10px;
    position: fixed;
    top: 0;
    left: 0;
    // display: flex;
  }
  .xiabiao {
    max-width: 360px;
    width: 100%;
    background: rgba(0, 0, 0, 0.5);
    text-align: center;
    color: white;
    line-height: 30px;
    // height: 30px;
    font-size: 10px;
    position: fixed;
    bottom: 0;
    left: 0;

    // display: flex;
    .set {
      display: flex;
      justify-content: space-around;
      span {
        width: 33.33%;
      }
    }
    .setting {
      width: 100%;

      .font {
        margin: 10px;
        display: flex;
        justify-content: space-around;
        span {
          display: inline-block;
          line-height: 20px;
          width: 30%;
          background: transparent;
          border: solid 1px black;
        }
      }

      .bgcolor {
        margin: 10px;
        display: flex;
        justify-content: space-around;
        i {
          display: inline-block;
          width: 30px;
          height: 30px;
          // background: greenyellow;
          border-radius: 50%;
           border: 2px solid transparent;
          &.light{
            border: 2px solid rgb(245, 140, 140);
          }
          &:nth-child(1) {
             background: #373c38;
           
          }
          &:nth-child(2) {
            background: greenyellow;
          }
          &:nth-child(3) {
           background: #00ff80;
          }
          &:nth-child(4) {
            
             background: #ededed;
          }
           &:nth-child(5) {
            background: white;
          }
        }
      }
    }
  }
  .juticontent{
    .catalogue{
      width: 50%;
      li{
        list-style: none;
      }
    }
    p{
      font-size: 16px;
    }
  }
  .chapter{
    background: white;
    border-radius: 20px;
    width: 70%;
    position: absolute;
    top: 0;
    // left: -250px;
     left: 0px;
    transition: all 1s;
    overflow: scroll;
    height: 100%;
    li{
      list-style: none;
      border-bottom: 1px solid gray;
      line-height: 25px;
    }
    
  }
  // .ischa{
  //     left: 0px;
  //     color: white;
  //   }
  .addbook{
    width: 50px;
    line-height: 50px;
    text-align: center;
     background: rgba(0, 0, 0, 0.5);
     border-radius: 50%;
     position: fixed;
     left: 0;
     bottom: 50px;
     font-size: 10px;
     color: white;
  }
}
</style>

<script>
// import Title from "@/components/Title.vue";
import Arrow from "@/components/Arrow.vue";
// import Bus from '../bus.js';
import axios from "axios";
export default {
  components: {
    // Title,
    Arrow
  },
  data() {
    return {
      gethttp: null,
      cpContent: null,
      isshow: true,
      issettingshow: false,
      size:16,
      gethttp2:null,
      chapters:null,
      ischa:false,
      title:this.$route.query.title,
      cont:this.$route.params.cont,
      colors:[
        {yanse:'#373c38',isclass:false},
        {yanse:'greenyellow',isclass:false},
        {yanse:'#00ff80',isclass:false},
        {yanse:'#ededed',isclass:false},
        {yanse:'white',isclass:true}
      ],
      // books:[
      //   'book1','book2','book3','book4',
      // ],
      // i:0
    };
  },
  methods: {
    getshow() {
      
      
      this.isshow = !this.isshow;
      if (this.ischa) {
         this.ischa=!this.ischa;
      }
     
      // console.log("sdfa");
    },
    getsetting() {
      this.issettingshow = !this.issettingshow;
      // console.log("sdfa");
    },
    fontadd(){
      if (this.size<25) {
        this.size++;
      }  
      document.querySelector('.juticontent p').style.fontSize=this.size+'px';
    },
    fontreduce(){
      if (this.size>12) {
        this.size--;
      }  
      document.querySelector('.juticontent p').style.fontSize=this.size+'px';
    },
    setbgcolor(item){
       document.querySelector('.juticontent').style.background=item.yanse
       if (item.yanse=='#373c38') {
         document.querySelector('.juticontent').style.color='gray';
       }else{
          document.querySelector('.juticontent').style.color='black';
       }
       for(let i=0;i<this.colors.length;i++){
          if (this.colors[i].isclass) {
              this.colors[i].isclass=false;
          }
       }
       item.isclass=true;
    },
    getchapters(){
      // console.log(this.$route.query.sourceid);
      
       this.gethttp2 =
        "//api.kele8.cn/agent/http://api.zhuishushenqi.com/atoc/" +
        this.$route.query.sourceid +
        "?view=chapters";
      axios
        .get(this.gethttp2)
        .then(res => {
          this.chapters = res.data.chapters;
        })
        .catch(err => {
          console.error(err);
        });
    },
    getchapshow(){
      // document.querySelector('.chapter').style.left='0px';
      this.ischa=!this.ischa;
      // console.log("asdf");
      
    },
    getlistcontent(item){
      // console.log(item);
      this.title=item.title;
      this.gethttp =
      "//api.kele8.cn/agent?url=http://chapterup.zhuishushenqi.com/chapter/" +
      item.link;
    axios
      .get(this.gethttp)
      .then(res => {
          //  console.log(res);
        this.cpContent = res.data.chapter.cpContent;
          //  console.log(this.cpContent);
      })
      .catch(err => {
        console.error(err);
      });
    },
    addbookshelf(){
      // console.log(this.$route.params);
      // Bus.$emit('addbook',this.cont);
       
      
      // this.i=parseInt(localStorage.getItem('i'))+1;
      // // localStorage.getItem(i);
      // localStorage.setItem('i',this.i);
      // console.log(this.books[this.i]);
      // for (let index = 0; index < this.books.length; index++) {
      //   if (!localStorage.getItem(this.books[index])) {
      //     if (localStorage.getItem(this.books[index])!=this.cont["_id"]) {
      //       localStorage.setItem(this.books[this.i],this.cont["_id"]);
      //     }
      //   }
        
      // }

      let books=[];
     
         books=localStorage.getItem('bookshelf').split('-');
      
       if (this.cont["_id"]) {
        // console.log(this.cont["_id"],"111");
        //  console.log("111",books);
        if ( books.includes(this.cont["_id"])) {  
                  
        }else{
          books.push(this.cont["_id"]);
        }
        books=books.join('-');
        // console.log("222",books);
      }      
     localStorage.setItem('bookshelf',books);      
    }
   
  },
  created() {
   
    this.gethttp =
      "//api.kele8.cn/agent?url=http://chapterup.zhuishushenqi.com/chapter/" +
      this.$route.query.link;
    axios
      .get(this.gethttp)
      .then(res => {
          //  console.log(res);
        this.cpContent = res.data.chapter.cpContent;
        //    console.log(res.data.cpContent);
      })
      .catch(err => {
        console.error(err);
      });
      this.getchapters();
      // localStorage.setItem('i',1);
      
     
  },

  beforeRouteLeave(to, from, next) {
    if (to.name == "novelcontent") {
      to.params.cont = from.params.cont;
      to.params.gaoshi = from.params.gaoshi;
      to.query.userid = from.query.userid;
      to.query.major = from.query.major;
      to.query.gender = from.query.gender;
    }
    next();
  },
  beforeRouteEnter(to, from, next) {
    // console.log(from);
    
    if (from.name == "novelcontent") {
      to.params.cont = from.params.cont;
      to.params.gaoshi = from.params.gaoshi;
      // to.query.userid = from.params.sourceid;
      to.query.major = from.query.major;
      to.query.gender = from.query.gender;
       
    }
    next();
  }
};
</script>