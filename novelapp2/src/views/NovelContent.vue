<template>
  <div class="novelcontent">
    <Title>{{this.$route.params.cont.title}}</Title>
    <!-- <h1>novelcontent</h1> -->
    <div class="novelsource">
      <div class="chageSource" @click="showSource">换源</div>
      <div class="novelbutton" v-if="isSourceshow">
        <button
          v-for="(item, index) in source"
          :key="index"
          v-on:click="setSourceid(item)"
        >{{item.name}}</button>
      </div>
    </div>
    <div class="chapter">
      <li
        v-for="(item, index) in chapters"
        :key="index"
        v-on:click="getchapterContent(item)"
      >{{item.title}}</li>
    </div>
  </div>
</template>
<style lang="less" scoped>
.novelcontent {
  .novelsource {
    max-width: 360px;
    width: 100%;
      background: rgba(0, 0, 0, 0.5);
      position: fixed;
      bottom: 0;
      left: 0;
    .chageSource {
      text-align: center;    
    }
    .novelbutton {
      button {
        width: 80px;
        line-height: 20px;
        background: #4da2fd;
        outline: none;
        border: none;
        margin: 2px;
      }
    }
  }
  .chapter {
    li {
      list-style: none;
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
      sourceid: null,
      source: null,
      xiaoshouId: null,
      gethttp: null,
      gethttp2: null,
      chapters: null,
      isSourceshow: false
    };
  },
  watch: {
    sourceid: function() {
      // console.log("改变id");
      this.gethttp2 =
        "http://api.kele8.cn/agent/http://api.zhuishushenqi.com/atoc/" +
        this.sourceid +
        "?view=chapters";
      axios
        .get(this.gethttp2)
        .then(res => {
          this.chapters = res.data.chapters;
        })
        .catch(err => {
          console.error(err);
        });
    }
  },
  methods: {
    setSourceid(item) {
      this.sourceid = item["_id"];
      // console.log(this.sourceid);
    },
    getchapterContent(item) {
      console.log(item.link);
      this.$router.push({
        name: "chaptercontent",
        // params: { cont: this.cont },
        query: {
          link: item.link,
          title: item.title,
          sourceid:this.sourceid
        }
      });
    },
    showSource() {
      this.isSourceshow = !this.isSourceshow;
    }
  },
  created() {
    //  console.log(this.$route.params);
    this.xiaoshouId = this.$route.params.cont["_id"];
    // console.log(this.xiaoshouId);
    this.gethttp =
      "http://api.kele8.cn/agent/https://api.zhuishushenqi.com/atoc?view=summary&book=" +
      this.xiaoshouId;
    axios
      .get(this.gethttp)
      .then(res => {
        this.source = res.data;
        //   console.log(this.source);
        this.sourceid = this.source[0]["_id"];
        //    console.log(this.sourceid);
      })
      .catch(err => {
        console.error(err);
      });
  },
  beforeRouteLeave(to, from, next) {
    console.log("beforeRouteLeave");
    
    if (to.name == "novelDetail") {
      to.params.detail = from.params.cont;
      to.query.gender = from.query.gender;
      to.query.major = from.query.major;
      to.params.gaoshi = from.params.gaoshi;
      to.query.userid = from.query.userid;
    } else if (to.name == "chaptercontent") {
      to.params.cont = from.params.cont;
      to.query.major = from.query.major;
      to.query.gender = from.query.gender;
     to.query.userid = from.query.userid;
    }

    next();
  },
  beforeRouteEnter(to, from, next) {
       console.log("beforeRouteEnter");
    if (from.name == "novelDetail") {
      to.params.cont = from.params.detail;
      to.query.major = from.query.major;
      to.query.gender = from.query.gender;
      to.params.gaoshi = from.params.gaoshi;
      to.query.userid = from.query.userid;
    } else if (from.name == "chaptercontent") {
      to.params.cont = from.params.cont;
      to.query.major = from.query.major;
      to.query.gender = from.query.gender;
    }

    // console.log(from.params.partDetail+"from");

    next();
  }
};
</script>
