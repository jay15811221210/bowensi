
<!---------------------------------搜索框------------------------------------->

<template>
  <div class="search">
    <div>
      <input type="text" placeholder="热门搜索标签" v-model="val">
      <img src="../../../static/images/searc.png" alt="" v-on:click="inputval">
    </div>
  </div>
</template>
<script>
  export default {
    name: 'search',
    components:{

    },
    data () {
      return {
        val:""
      }
    },
    methods:{
      //获取search搜索框中的value值
      inputval:function () {
        console.log(this.val)
      }
    }
  }
</script>
<style scoped>
  .search{
    width: 100%;
    height:4.53rem;
    background:rgb(241,241,241) ;
    padding: 0.8rem;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
  }
  .search div{
    background: white;
    width: 100%;
    height: 100%;
    border-radius: 0.3rem;
    display: flex;
    align-items: center;
  }
  .search div input{
    border: none;
    outline: none;
    flex: 1 0 auto;
    padding-left: 1rem;
    font-size: 0.8rem;
  }
  .search div img{
    height: 1.3rem;
    margin-right: 1rem;
    margin-left: 0.5rem;
  }
</style>
