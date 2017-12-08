<template>
  <div class="hello">
    <div class="wrap">
      <div class="wrap-top">
        <span @click="backSpace">
          <img src="../../static/images/backp.png" alt="">
        </span>
        <span>博文思教育</span>
      </div>
      <ul class="uls">
        <li>
          <router-link to="/Home">
            <p>首页</p>
          </router-link>
        </li>
        <li>
          <router-link to="/Zikao">

            <p>自考</p>
          </router-link>
        </li>
        <li>
          <router-link to="/Wangjiao">

            <p>网教</p>
          </router-link>
        </li>
        <li>
          <router-link to="/Dianda">

            <p>电大</p>
          </router-link>
        </li>
        <li>
          <router-link to="/Chengkao">

            <p>成考</p>
          </router-link>
        </li>
        <li>
          <router-link to="/Yuanxiao">

            <p>院校</p>
          </router-link>
        </li>
        <li @click="skip">
          <p>题库</p>
        </li>
      </ul>
    </div>
    <div class="top-wrap"></div>
    <div> <router-view></router-view> </div>
  </div>

</template>

<script>

  export default {
    name: 'hello',
//    watch:{
//      '$route':function(to,from){
//        document.body.scrollTop = 0;
//                 document.documentElement.scrollTop = 0;
//      }
//    },
    components:{

    },
    data () {
      return {

      }
    },
    methods:{
      skip:function () {
        this.$router.push("/Tiku")
      },
      backSpace:function () {
        this.$router.back(-1)
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  *{
    margin: 0;
    padding: 0;
    list-style: none;
  }
  .wrap{
     position: fixed;
    width: 100%;
    z-index: 99999999;
   }
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
  .wrap-top span:first-child img{
    height: 2rem;
    display: block;
  }
  .wrap-top span:last-child{
    font-size: 1.3rem;
    margin: auto;
  }
  .uls{
    height: 3.2rem;
    display: flex;
    display: -webkit-flex;
    align-items: center;
    justify-content: space-around;
    font-size: 1rem;
    font-weight: 600;
    padding-left: 1rem;
    padding-right: 1rem;
    background: white;
  }
  .router-link-active p{
    color: #73a1db;
    border-bottom: 1px solid #73a1db;
  }
  .uls a{
    color: black;
    text-decoration: none;
  }
  .uls li{
    box-sizing: border-box;
    height: 100%;
    text-align: center;
    line-height:3.2rem;
    color: black;
  }
  .top-wrap{
    width: 100%;
    height: 6.5rem;
  }

</style>
