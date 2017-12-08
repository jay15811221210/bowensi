
<!-------------------home的二级路由--电大页面------------------->

<template>
  <div class="utv">
    <div class="myself-bar">
      <span class="span1">电大</span>
      <span class="span2" @click="pageto">更多&nbsp;>>></span>
    </div>
    <zhuanti
    :xinde="xinde"></zhuanti>
  </div>
</template>
<script>
  import zhuanti from "../common/zhuanti.vue"
  export default {
    name: 'utv',
    components:{
      zhuanti
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
    methods:{
      pageto:function () {
        this.$router.push("/Dianda");
      },
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
