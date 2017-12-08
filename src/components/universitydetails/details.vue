
<!--------------------------------------院校详情页------------------------------------------>

<template>
  <div class="details">
    <headerbar></headerbar>
    <div class="school-name">
      <span>{{schoole}}</span>
      <span>985高校</span>
    </div>
    <div class="wap-selet">
      <img :src="img" alt="">
      <div>
        <span>所在地：北京市</span>
        <span>隶属于：教育部</span>
        <span>国家重点学科：81个</span>
        <span>硕士点：244个</span>
        <span>院士：59个</span>
        <span>博士点：201个</span>
        <span>类型：综合</span>
      </div>

    </div>
    <div class="content">
      详情
    </div>
    <bar></bar>
    <enrol
      :propp="propp"></enrol>
    <bar></bar>
    <h2>报名咨询</h2>
    <input type="text" placeholder="姓名" ref="name">
    <input type="text" placeholder="电话" ref="phone">
    <textarea placeholder="说点什么吧..." ref="text"></textarea>
    <p class="baoming" @click="ImmediatelySignUp">立即报名</p>
    <p class="baoming" @click="ImmediateConsultation">立即咨询</p>
    <div class="bar-v"></div>
    <logo></logo>
  </div>
</template>
<script>
  import bar from "../common/bar.vue";
  import enrol from "../common/enrol.vue";
  import logo from "../common/logo.vue";
  import headerbar from "../common/headerbar.vue";
  export default {
    name: 'details',
    components:{
      bar,enrol,logo,headerbar
    },
    data () {
      return {
        schoole:"",
        img:"",

        propp:[
          {text:"主要专业"},
          {
            list:[
              {"zhinan":"招生简章"},
              {"zhinan":"热门专业"},
              {"zhinan":"考试报名"},
              {"zhinan":"考试时间"},
              {"zhinan":"证书查询"},
              {"zhinan":"院校推荐"},
              {"zhinan":"招生简章"},
              {"zhinan":"录取分数线"},
              {"zhinan":"院校推荐"},
              {"zhinan":"招生简章"},
              {"zhinan":"院校推荐"},
              {"zhinan":"招生简章"},
            ]
          }
        ],

      }
    },
    created(){
      this.menu();
    },

    mounted(){
//      接收院校信息
      this.schoole=this.$route.query.schoole;
      this.img=this.$route.query.img;
    },
    methods:{
      menu() {
        window.scrollTo(0,0);
      },
//      立即报名函数
      ImmediatelySignUp(){
        console.log("姓名："+this.$refs.name.value,"电话："+this.$refs.phone.value,
                    "text:"+this.$refs.text.value)
      },
//      立即查询函数
      ImmediateConsultation(){
        console.log(22)
      }
    }
  }
</script>
<style scoped>

  .school-name{
    background: #eee;
    padding: 1.5rem 1rem;
    width: 100%;
    height: 6.2rem;
    box-sizing: border-box;
    position: relative;
    display: flex;
    flex-wrap: wrap;
  }
  .school-name span:nth-child(1){
    flex: 1 0 100%;
    /*line-height: 2rem;*/
    font-size: 1.2rem;
    font-weight: 800;
  }
  .school-name span:nth-child(2){
    flex: 1 0 100%;
    color: #888;
    font-size: 0.7rem;
  }

  .wap-selet{
    padding: 1.3rem 0 1.3rem 1rem;
    display: flex;
    align-items: center;
    /*box-sizing: border-box;*/
  }
  .wap-selet img{
    width: 8rem;

    float: left;
    margin-right: 1rem;
  }
  .wap-selet span{
    color: #888;
    font-size: 0.7rem;
    margin-right: 1rem;
    float: left;
    line-height: 1.5rem;
  }
  .wap-selet div{
    width: 60%;
  }
  .content{
    padding: 0 1rem 1rem 1rem;
  }
  h2{
    text-align: center;
    line-height: 3.9rem;
    font-size: 1.4rem;
  }
  input,textarea{
    width: 90%;
    background: #eee;
    border: none;
    outline: none;
    padding: 0.7rem 1rem;
    display: block;
    margin: 0 auto 1.2rem ;
    font-size: 1rem;
  }
  textarea{
    height: 11.7rem;
  }
  .baoming{
    text-align: center;
    background: #c43c3c;
    width: 90%;
    font-size: 1rem;
    line-height: 2rem;
    color: white;
    display: block;
    margin: -0.7rem auto 1.3rem;
  }
  .bar-v{
    width: 100%;
    height: 0.1rem;
    background: #f1f1f1;
    margin-top: 2rem;
  }
</style>
