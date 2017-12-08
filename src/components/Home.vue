
<!-------------------------------首页-------------------------------------->

<template>
  <div class="home">
    <search></search>
    <lunbo></lunbo>
    <div class="gonggao">
    </div>
    <ul class="notic-list" v-for="item in notic">
      <li>
        <p>{{item.text}}</p>
        <span>{{item.data}}</span>
      </li>
    </ul>
    <bar></bar>
    <enrol
        :propp="propp"></enrol>
    <bar></bar>
    <div class="academy">
      <div class="academy-bar">
        <span class="span1">院校推荐</span>
        <span class="span2" @click="more">更多&nbsp;>>></span>
      </div>
      <div class="academy-wrap">
        <swiper :options="swiperOption" ref="mySwiper">
          <!-- slides -->
          <swiper-slide >
            <ul >
              <li v-for="(item,index) in school" :key="item.id" @click="skipDetalis(index)">
                <img :src="item.img" alt="">
                <p > {{item.sc}}</p>
              </li>
            </ul>
          </swiper-slide>
          <swiper-slide >
            <ul >
              <li v-for="(item,index) in school" :key="item.id" @click="skipDetalis(index)">
                <img :src="item.img" alt="">
                <p >{{item.sc}}</p>
              </li>
            </ul>
          </swiper-slide>
          <swiper-slide >
            <ul >
              <li v-for="(item,index) in school" :key="item.id" @click="skipDetalis(index)">
                <img :src="item.img" alt="">
                <p >{{item.sc}}</p>
              </li>
            </ul>
          </swiper-slide>
          <!-- Optional controls -->
          <div class="swiper-pagination"  slot="pagination" id="qier">

          </div>
        </swiper>

      </div>

    </div>
    <ul class="myself-sc">
        <li>
          <router-link to="/myself">
            <p>自考</p>
          </router-link>
        </li>
        <li>
          <router-link to="/network">
            <p>网教</p>
          </router-link>
        </li>
        <li>
          <router-link to="/utv">
            <p>电大</p>
          </router-link>
        </li>
        <li>
          <router-link to="/adult">
            <p>成考</p>
          </router-link>
        </li>
    </ul>
    <div> <router-view></router-view> </div>
    <bar></bar>
    <footbar></footbar>
    <logo></logo>
  </div>

</template>
<script>
  import Search from "./common/Search.vue";
  import Lunbo from "./common/lunbo.vue";
  import footbar from "./common/footbar.vue";
  import enrol from "./common/enrol.vue";
  import bar from "./common/bar.vue";
  import logo from "./common/logo.vue";
  import {swiper, swiperSlide} from 'vue-awesome-swiper'
  import VueAwesomeSwiper from 'vue-awesome-swiper'

  //加载swipercss文件
  require('swiper/dist/css/swiper.css');


  export default {
    name: 'home',
    components:{
      Lunbo,
      Search,
      footbar,
      swiper,swiperSlide,
      enrol,bar,logo
    },
    data () {
      return {
        imsg:[
          {"img":"http://www.hangowa.com/data/upload/mobile/special/s1/s1_05327186142976760.jpg"},
          {"img":"http://www.hangowa.com/data/upload/mobile/special/s1/s1_05345109604997733.jpg"},
          {"img":"http://www.hangowa.com/data/upload/mobile/special/s1/s1_05330562712030759.jpg"}
        ],
        swiperOption: {
          //手动滑动之后继续自动轮播
//          autoplayDisableOnInteraction : false,
          notNextTick: true,
          autoplay: false,
          grabCursor : true,
          setWrapperSize :true,
          autoHeight: true,
          pagination : '.swiper-pagination',
          paginationClickable :true,
          mousewheelControl : true,
          observeParents:true,
          onTransitionStart(swiper){
//            console.log(swiper)
          }
        },
        notic:[
          {
            "text":"国家隐含施蒂利克上岛咖啡抗裂砂浆大富科技框架水电费卫生法律框架我耳机问",
            "data":"2017/05/03"
          },
          {
            "text":"国家隐含施蒂利克上岛咖啡抗裂砂",
            "data":"2017/05/03"
          },
          {
            "text":"含施蒂利克上岛咖啡抗裂砂国家隐含施蒂利克上岛咖啡抗裂砂国家隐含施蒂利克上岛咖啡抗裂砂",
            "data":"2017/05/03"
          },
          {
            "text":"国家隐含施蒂利克上岛咖啡抗裂砂",
            "data":"2017/06/03"
          }
        ],
        propp:[
          {text:"报考指南"},
          {
            list:[
              {"zhinan":"招生简章"},
              {"zhinan":"热门专业"},
              {"zhinan":"考试报名"},
              {"zhinan":"考试时间"},
              {"zhinan":"证书查询"},
              {"zhinan":"院校推荐"},
              {"zhinan":"招生简章"},
              {"zhinan":"录取分数线"}

            ]
          }
        ],
        school:[
          {
            "sc":"清华大学",
            "img":"../../static/images/schoo.jpg"
          },
          {
            "sc":"北京大学",
            "img":"../../static/images/schoo.jpg"
          },
          {
            "sc":"清华大学",
            "img":"../../static/images/schoo.jpg"
          },
          {
            "sc":"清华大学",
            "img":"../../static/images/schoo.jpg"
          },
          {
            "sc":"清华大学",
            "img":"../../static/images/schoo.jpg"
          },
          {
            "sc":"清华大学",
            "img":"../../static/images/schoo.jpg"
          },
          {
            "sc":"清华大学",
            "img":"../../static/images/schoo.jpg"
          },
          {
            "sc":"清华大学",
            "img":"../../static/images/schoo.jpg"
          },
        ]
      }
    },
    created(){
      this.menu();
    },
    methods:{
      menu() {
        window.scrollTo(0,0);
      },
      /*
      * 函数detalis
      * 跳转到院校详情
      * query 传参数
      * */
      skipDetalis:function (index) {
        this.$router.push({
          path:'universitydetails/details',
          query:{
            schoole:this.school[index].sc,
            img:this.school[index].img,
          }
        })
      },
      more:function () {
        this.$router.push("/yuanxiao");
      }
    }
  }
</script>
<style scoped>
  .gonggao{
    width: 100%;
    height: 4rem;
    background-image: url("../../static/images/notice.jpg");
    background-size: percentage(50%,50%);
    background-repeat: no-repeat;
    background-position: 50% 8%;
  }
  .notic-list li{
    border: 1px solid #f1f1f1;
    font-family: "Microsoft YaHeikaiti";
    font-size: 1rem;
    padding: 1rem ;
    line-height: 1.3rem;
  }
  .notic-list li span{
    color: #cccccc;
    font-size: 0.5rem;
  }
  .academy .academy-bar{
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem;
  }
  .academy div .span1{
    color: #4887d0;
    font-family: "Microsoft YaHeikaiti";
    font-size: 1.2rem;
    font-weight: 600;
  }
  .academy div .span2{
    font-size: 0.3rem;
  }

  .academy ul li{
    border-right: 1px solid #ddd;
    border-top: 1px solid #ddd;
    border-collapse: collapse;
    height: 8.7rem;
    width: 25%;
    float: left;
    box-sizing: border-box;
    text-align: center;
    padding: 1.2rem 0 0 0;

  }
  .academy ul li p{
    line-height: 3rem;
    font-size: 0.9rem;
  }
  .academy ul li img{
    height: 4.2rem;
    width: 4.2rem;
  }
  .swiper-pagination{
    position: relative;
    bottom: 0;
    background: #eee;
    height: 1.7rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .myself-sc{
    display: flex;
    width: 100%;height: 3.6rem;
    align-items: center;
    font-size: 1.2rem;
    box-sizing: border-box;
    font-weight: 600;
    padding: 0 1rem;
    margin-top: 0.5rem;
  }
  .myself-sc li{
    flex: 1;
    text-align: center;
  }
  .myself-sc a{
    color: black;
    text-decoration: none;
  }
  .myself-sc li p{
    height: 3.6rem;display: block;
    line-height: 3.6rem;
  }
  .academy-wrap{
    width:100%;
    height:18.6rem;
  }
  .swiper-slide img{ width:100%;height: 12.6rem}
  .router-link-active p{
    color: #73a1db;
    border-bottom: 1px solid red;
  }
</style>
