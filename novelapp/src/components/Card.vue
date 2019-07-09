<template>
    <div class="card" v-on:click="getXuanhuanitem(part)">
        <strong>{{part.name}}</strong>
        <span>{{part.bookCount}}</span>
    </div>
</template>
<style lang="less" scoped>
    .card{
        width: 33.33%;
        float: left;
        box-sizing:border-box; 
        padding: 5px;
        strong{
           
           display: block;
        }
        span{
            color: lightslategray;
        }
    }
</style>

<script>
export default {
    name:'card',
    props:[
        'part'
    ],
     methods: {
    getXuanhuanitem(part){
    //   console.log(part);
      this.$router.push({name:'xuanhuanitem',params:{partDetail: part}
      ,query:{ gender:part.sex,
            major:part.name,
            type:'hot',
            minor:'',
            }
            });
    }
  },

}
</script>
