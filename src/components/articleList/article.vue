
<!------------------------------------文章详情页----------------------------------------------->

<template>
  <div class="article">
    <headerbar></headerbar>
    <div class="title-h">
      <h2><b>90后是垮掉的一代？别扯淡了！</b></h2>
      <h2>（深度好文）-简书</h2>
      <p class="title-p">
        <span>新华网</span>
        <span>2017/05/06</span>
      </p>
      <p class="text-p">
        边大多的80、90后都能够遵守工序良俗，他们会主动地让座边大多的80、90后都能
        代付款等飞哥二哥代付款等飞哥二哥代付款等飞哥二哥代付款等飞哥二哥
        代付款等飞哥二哥代付款等飞哥二哥代付款等飞哥二哥代付款等飞哥二哥
        代付款等飞哥二哥代付款等飞哥二哥代付款等飞哥二哥代付款等飞哥二哥代付款等飞哥二哥
        代付款等飞哥二哥代付款等飞哥二哥代付款等飞哥二哥代付款等飞哥二哥
        代付款等飞哥二哥代付款等飞哥二哥代付款等飞哥二哥代付款等飞哥二哥
        代付款等飞哥二哥代付款等飞哥二哥代付款等飞哥二哥代付款等飞哥二哥代付款等飞哥二哥代付款等飞哥二哥代付款等飞哥二哥代付款等飞哥二哥代付款等飞哥二哥代付款等飞哥二哥代付款等飞哥二哥代付款等飞哥二哥代付款等飞哥二哥代付款等飞哥二哥
        代付款等飞哥二哥代付款等飞哥二哥代付款等飞哥二哥代付款等飞哥二哥
        代付款等飞哥二哥代付款等飞哥二哥代付款等飞哥二哥代付款等飞哥二哥
        代付款等飞哥二哥代付款等飞哥二哥代付款等飞哥二哥代付款等飞哥二哥
        代付款等飞哥二哥代付款等飞哥二哥代付款等飞哥二哥代付款等飞哥二哥代付款等飞哥二哥
        代付款等飞哥二哥代付款等飞哥二哥代付款等飞哥二哥代付款等飞哥二哥
        代付款等飞哥二哥代付款等飞哥二哥代付款等飞哥二哥
      </p>
    </div>
    <bar></bar>
    <div class="myself">
      <div class="myself-bar">
        <span class="span1">自考</span>
        <span class="span2" >更多&nbsp;>>></span>
      </div>
      <zhuanti
      :xinde="xinde"></zhuanti>
    </div>
    <logo></logo>
  </div>
</template>
<script>
  import headerbar from "../common/headerbar.vue"
  import bar from "../common/bar.vue"
  import logo from "../common/logo.vue"
  import myself from "../seconedrouter/myself.vue"
  import zhuanti from "../common/zhuanti.vue"
  export default {
    name: 'article',
    components:{
      headerbar,bar,logo,myself,zhuanti
    },
    data () {
      return {
        xinde:[
          {
            "p":"是哦的减肥威迫我外婆额日哦位人品为排位人品为例",
            "img":"../../../static/images/xinde.jpg",
            "span1":"心得方法",
            "span2":"2017/05/06"
          },
          {
            "p":"是哦的减肥威迫我外婆额日哦位人品为排位人品为例",
            "img":"../../../static/images/xinde.jpg",
            "span1":"考生必读",
            "span2":"2017/05/06"
          },
          {
            "p":"是哦的减肥威迫我外婆额日哦位人品为排位人品为例",
            "img":"../../../static/images/xinde.jpg",
            "span1":"考生必读",
            "span2":"2017/05/06"
          },
          {
            "p":"是哦的减肥威迫我外婆额日哦位人品为排位人品为例",
            "img":"../../../static/images/xinde.jpg",
            "span1":"考生必读",
            "span2":"2017/05/06"
          }
        ]
      }
    },
    created(){
      this.menu();
    },
    methods:{
      menu() {
        window.scrollTo(0,0);
      }
    }
  }
</script>
<style scoped>
  .title-h{
    padding: 1rem;
  }
  .title-h h2{
    color: black;
    font-size: 1.4rem;

    line-height: 2.6rem;
  }
  .title-p span{
    line-height: 2.9rem;
    margin-right: 1.5rem;
    font-size: 1rem;
    color: #888;
  }
  .text-p{
    padding: 0.5rem 0 0 0 ;
    color: #161415;
    font-size: 0.94rem;
  }
  .myself-bar{
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem 1rem 0 1rem;
  }

  .myself-bar .span1{
    color: #4887d0;
    font-family: "Microsoft YaHeikaiti";
    font-size: 1.2rem;
    font-weight: 600;
  }
  .myself-bar .span2{
    font-size: 0.3rem;
  }

</style>
