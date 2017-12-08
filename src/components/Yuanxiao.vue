
<!-------------------------------------院校页面-------------------------------->

<template>
  <div class="yuanxiao">
    <search></search>
    <!--iview下拉菜单-->

    <Dropdown trigger="click" class="selectc" @on-click="changes">
      <a href="javascript:void(0)" >
          地区
        <Icon type="arrow-down-b"></Icon>
      </a>
      <Dropdown-menu slot="list" >
        <Dropdown-item v-for="(item,index) in rows1" :key="item.id" :name="item.areas">{{item.areas}}</Dropdown-item>

      </Dropdown-menu>
      </Dropdown>
    <Dropdown trigger="click" class="selectc" @on-click="changes">
      <a href="javascript:void(0)">
        专业
        <Icon type="arrow-down-b"></Icon>
      </a>
      <Dropdown-menu slot="list">
        <Dropdown-item v-for="(item,index) in rows2" :key="item.id" :name="item.major">{{item.major}}</Dropdown-item>

      </Dropdown-menu>
    </Dropdown>
    <Dropdown trigger="click" class="selectc" @on-click="changes">
      <a href="javascript:void(0)">
        分数
        <Icon type="arrow-down-b"></Icon>
      </a>
      <Dropdown-menu slot="list">
        <Dropdown-item v-for="(item,index) in rows3" :key="item.id" :name="item.num">{{item.num}}</Dropdown-item>

      </Dropdown-menu>
    </Dropdown>
   <!--学院列表-->
    <div class="wrapcase">
      <div class="area-sch" v-for="(user,index) in filterName" :key="user.id">
        <div>
          <img :src="user.img" alt="">
        </div>
        <div class="area-sch-div">
          <p><b>{{user.school}}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</b></p>
          <p>{{user.mark}}</p>
        </div>
        <div class="xiangqing">
          <span @click="skipDetalis(index)">院校详情</span>
        </div>
      </div>
    </div>



  </div>
</template>
<script>
  import search from "./common/Search.vue";
//  import logo from "./common/logo.vue";
  export default {
    name: 'yuanxiao',
    components:{
      search
    },

    data () {
      return {
        canshu:"",
        area:[
          {
            "img":"../../../static/images/schoo.jpg",
            "school":"逗比大学",
            "mark":"本科线：88分"
          },
          {
            "img":"../../../static/images/schoo.jpg",
            "school":"清华大学",
            "mark":"本科线：99分"
          },{
            "img":"../../../static/images/schoo.jpg",
            "school":"清华大学",
            "mark":"本科线：99分"
          },{
            "img":"../../../static/images/schoo.jpg",
            "school":"清华大学",
            "mark":"本科线：388分"
          },{
            "img":"../../../static/images/schoo.jpg",
            "school":"清华大学",
            "mark":"本科线：388分"
          },{
            "img":"../../../static/images/schoo.jpg",
            "school":"清华大学",
            "mark":"本科线：99分"
          },{
            "img":"../../../static/images/schoo.jpg",
            "school":"清华大学",
            "mark":"本科线：99分"
          },{
            "img":"../../../static/images/schoo.jpg",
            "school":"清华大学",
            "mark":"本科线：99分"
          },{
            "img":"../../../static/images/schoo.jpg",
            "school":"清华大学",
            "mark":"本科线：99分"
          }
        ],
        rows1:[
          {"areas":"北京"},{"areas":"上海"},{"areas":"广州"},{"areas":"深圳"},{"areas":"台湾"}
        ],
        rows2:[
          {"major":"英语"},{"major":"语文"},{"major":"数学"},{"major":"物理"},{"major":"化学"}
        ],
        rows3:[
          {"num":"88"},{"num":"99"},{"num":"388"},{"num":"288"},{"num":"188"}
        ],
      }
    },
    created(){
//      此时执行函数menu（）
      this.menu();
    },
    computed:{
      /*
      过滤器
      过滤area列表 返回 与参数 canshu相匹配的 列表
      */
      filterName:function () {
        let self=this;
        return self.area.filter(function (user) {
          return user.school.indexOf(self.canshu)!==-1 || user.mark.indexOf(self.canshu)!==-1
        })
      }
    },
    methods:{
//      函数menu window 保持顶端展示
      menu() {
        window.scrollTo(0,0);
      },
      /*
      函数skipDetalis
      点击跳转到院校详情页
      用query传递参数
      */
      skipDetalis:function(index){
        this.$router.push({
          path:'universitydetails/details',
          query:{
            schoole:this.area[index].school,
            img:this.area[index].img,
          }
        })
      },
//      函数 change ：改变下拉菜单中选项时，把值传递给参数 canshu
      changes(name){
        this.canshu=name;
      }
    }
  }
</script>
<style scoped>
  .selectc{
    width: 33.3%;
    text-align: center;
    font-size: 1.1rem;
    padding: 0.8rem 0;
    float: left;
  }
  .selectc a{
    color: black;
  }
  .selectc a:hover{
    color: red;
  }
  .area-sch{
    display: flex;
    padding: 1rem 1rem 1rem 0;
    justify-content: space-around;
    align-items: center;
    border-bottom: 1px solid #ddd;
  }

  .area-sch img{
    width: 5.1rem;
    height: 5.1rem;
  }
  .area-sch div{
    flex: 1;
    text-align: center;
  }
  .area-sch-div p{
    line-height: 1.6rem;
    font-size: 1.03rem;

  }
  .area-sch-div p:nth-child(2){
    color: #888;

  }

  .xiangqing span{
    background: #e2364e;
    text-align: center;
    color: white;
    border-radius: 0.2rem;
    display: inline-block;
    padding: 0.5rem 1.3rem;
    font-size: 1rem;
  }
</style>
