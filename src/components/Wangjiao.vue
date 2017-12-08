
<!--------------------------------------网教页面---------------------------------------------->

<template>
  <div class="wangjiao">
    <search></search>
    <div class="myself">
      <div class="myself-bar">
        <span class="span1">网教</span>
        <span class="span2">更多&nbsp;>>></span>
      </div>
      <zhuanti
      :xinde="xinde"></zhuanti>
    </div>
    <bar></bar>
    <footbar></footbar>
    <logo></logo>
  </div>
</template>
<script>
  import myself from "./seconedrouter/myself.vue";
  import bar from "./common/bar.vue";
  import search from "./common/Search.vue";
  import footbar from "./common/footbar.vue";
  import logo from "./common/logo.vue";
  import zhuanti from "./common/zhuanti.vue";
  export default {
    name: 'wangjiao',
    components:{
      search,myself,logo,footbar,bar,zhuanti
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
