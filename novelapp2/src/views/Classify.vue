<template>
  <div class="classify">
       <Title>分类</Title>
   <div class="male">
     <p>男</p>
     <div class="content"  >
       <Card v-for="(item, index) in boy" :key="index" :part="item"
       ></Card>
     </div>
   </div>
   <div class="female">
     <p>女</p>
     <div class="content"  >
        <Card v-for="(item, index) in girl" :key="index" :part="item"></Card>
     </div>
   </div>
  </div>
</template>
<style lang="less" scoped>
  .classify{
    p{
      clear: both;
      padding: 0 0 0 10px ;
      margin: 0;
    }
    .content{
      padding: 0 30px;
    }
  }
</style>

<script>
import Title from "@/components/Title.vue";
import Card from "@/components/Card.vue";
import axios from "axios";
export default {
  components:{
    Title,
    Card
  },
  data() {
    return {
      boy:null,
      girl:null
    }
  },
  created() {
     axios
      .get('http://api.kele8.cn/agent?url=http://api.zhuishushenqi.com/cats/lv2/statistics')
      .then(res => {
        this.boy=res.data.male;
        for(let i=0;i<this.boy.length;i++){
            this.boy[i].sex="male";
        }
       
        //  console.log(this.boy);
         this.girl=res.data.female;
         for(let i=0;i<this.girl.length;i++){
             this.girl[i].sex="female";
        }
        
        //  console.log(this.girl);
      })
      .catch(err => {
        console.error(err);
      });
  },
 
}
</script>