<template>
  <div class="bookshelf">
    <Title>书架</Title>
   <!-- <h1>bookshelf</h1> -->
   <Firstintroduction :content="content"></Firstintroduction>
  </div>
</template>
<script>
import Title from "@/components/Title.vue";
// import Bus from '../bus.js';
import Firstintroduction from "@/components/Firstintroduction.vue";
import axios from "axios";
export default {
  components:{
    Title,
 Firstintroduction,
  },
  data() {
    return {
     books:[
        'book1','book2','book3','book4',
      ],
      book:[],
      content:[]
    }
  },
  watch: {
    // book:function(){
    //   // this.books.push(this.book);
    //   console.log("book--chage");
      
    // }
  },
  created() {
    // Bus.$on('addbook', function(target) {
    //         console.log(target);
    //         // this.book=target;
    //         // this.books.push(target);
    //         // console.log(this.book);
    //         // this.books.push(this.book);
    //         // console.log("sdafs");
            
    //     });
        if (!localStorage.getItem('bookshelf')) {
         localStorage.setItem('bookshelf','5bcd85971709700e14deae20-5702151c1c8e4db9483762d6');
      }
       
          this.book=localStorage.getItem('bookshelf').split('-');
        for(let i=0;i<this.book.length;i++){
          this.getaxios(this.book[i]);
        }
        
       
  },
  methods: {
    getaxios(id){
      let gethttp="//api.kele8.cn/agent?url=http://api.zhuishushenqi.com/book/"+id
      axios
      .get(gethttp)
      .then(res => {
          //  console.log(res.data);
        this.content.push(res.data)
          //  console.log(this.content);
      })
      .catch(err => {
        console.error(err);
      });
      // this.getchapters();
    }
  },
}
</script>