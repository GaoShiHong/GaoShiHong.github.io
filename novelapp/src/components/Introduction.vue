<template>
    <div class="introduction"  v-on:click="getdetail(cont)">
        <!-- <p>{{cont}}</p> -->
      <div class="setpadd">
           <img :src="imgsrc" alt=""> 
       <div class="text">
           <strong>{{cont.title}}</strong>
           <p><span>{{cont.author}}</span>|<span>{{cont.majorCate}}</span></p>
           <!-- <p>12312313131</p> -->
           <p><span>{{cont.latelyFollower/1000}}万人气</span>|<span>{{cont.retentionRatio}}%读者留存</span></p>
       </div>
      </div>
    </div>
</template>
<style lang="less" scoped>
    .introduction{
        // width: 100%;
        padding: 5px;
    //    overflow: hidden;
       border-bottom: 1px solid lightblue;
        background: #f2f2f2;
    //    padding: 5px;
       .setpadd{
        //    background: lightblue;
           overflow: hidden;
           img{
            width: 20%;
            height: 80px;
            float: left;
            border-radius: 10px;
        }
        .text{
             float: left;
            //   width: 70%;
              padding-left: 10px;
        }
       }
        
    }
</style>

<script>
export default {
    name:'introduction',
    props:[
        'cont','staticPath','dataContent'
    ],
    data() {
        return {
        //  staticPath:'http://statics.zhuishushenqi.com',
          imgsrc:null,
        //   latelyFollower:parseInt(cont.latelyFollower)/1000,
        }
    },
    
    methods: {
    getdetail(cont){
        this.$router.push({name:'novelDetail',params:{
            detail:cont,
            dataContent:this.$route.params.dataContent
        }});
        // console.log("afsd");
        
    }
  },
  watch: {
      cont:function(){
          this.imgsrc='http://statics.zhuishushenqi.com'+this.cont.cover;
      }
  },
    created() {
        // console.log(this.cont);
        
        this.imgsrc='http://statics.zhuishushenqi.com'+this.cont.cover;
        // console.log(this.imgsrc);
        
    },
}
</script>