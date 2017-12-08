
<!--------------------------博文思教育带书标头部------------------------->

<template>
  <div class="headerbar">
    <div class="wrap-top">
      <span @click="backto">
        <img src="../../../static/images/backp.png" alt="">
      </span>
      <span>博文思教育</span>
      <span>
        <img src="../../../static/images/tiku.png" alt="">
      </span>
    </div>
  </div>
</template>
<script>

  export default {
    name: 'headerbar',
    components:{

    },
    data () {
      return {

      }
    },
    methods:{
      backto:function () {
        this.$router.back(-1);
      },
    }
  }
</script>
<style scoped>
  .wrap-top{
    background: rgb(51,123,205);
    width: 100%;
    height: 3.3rem;
    display: flex;
    align-items: center;
    color: white;
  }
  .wrap-top span:first-child{
    line-height: 100%;
    position: absolute;
    left: 1rem;
  }
  .wrap-top span:last-child{
    line-height: 100%;
    position: absolute;
    right: 2rem;
  }
  .wrap-top span img{
    height: 2rem;
    display: block;
  }
  .wrap-top span:nth-child(2){
    font-size: 1.3rem;
    margin: auto;
  }
</style>
