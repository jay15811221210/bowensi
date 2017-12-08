
<!---------------------------------------------题库页面------------------------------------->

<template>
  <div class="tiku">

    <headerbar></headerbar>
    <select v-model="selected" ref="onsss" @change="selectedd">
      <option>题库</option>
      <option>自考</option>
      <option>网教</option>
      <option>电大</option>
      <option>成考</option>
    </select>
    <ul class="down-list">
      <li v-for="item in filterName">
        <p><b>{{item.p}}</b></p>
        <span class="spoan1">{{item.time}}</span>
        <span class="spoan2">{{item.directroy}}</span>
      </li>
    </ul>

  </div>
</template>
<script>
  import headerbar from "./common/headerbar.vue";
  export default {
    name: 'tiku',
    components:{
      headerbar
    },
    data () {
      return {
        zikao:true,
        canshu:"题库",
        selected:"题库",
        list:[
          {
            "p":"多家银行水电费监考老师多家菲利克斯叫对方立刻科技四路看到房价我偶尔忘记发了空间十分",
            "time":"2017/05/03",
            "directroy":"网教"
          },
          {
            "p":"多斯叫对方立刻科技四路价我偶尔忘记发了空间十分",
            "time":"2017/05/03",
            "directroy":"电大"
          },
          {
            "p":"多家银行水电费电费监考老电费监考老电费监考老电费监考老监考老房价我偶尔忘记发了空间十分",
            "time":"2017/05/03",
            "directroy":"成考"
          },
          {
            "p":"多家银行水电费监考老偶尔忘记发了空间十分",
            "time":"2017/05/03",
            "directroy":"自考"
          },
          {
            "p":"多家方立刻科技四路偶尔忘记发了空间十分",
            "time":"2017/05/03",
            "directroy":"自考"
          }
        ]
      }
    },
    mounted(){

    },
    computed:{
      /*
      过滤器
      过滤list列表 返回 与参数 canshu相匹配的 列表
      */
      filterName:function () {
        let that=this;
        return that.list.filter(function (user) {
          if(that.canshu==="题库"){
            return user;
          }else{
            return user.directroy.indexOf(that.canshu)!==-1
          }
        })
      }
    },
    methods:{

      backto:function () {
        this.$router.push("/home");
      },
      menu() {
        window.scrollTo(0,0);
      },
      selectedd() {
        this.canshu=this.selected;
        console.log(this.canshu);
      }
    },
    created(){
      this.menu();
    }

  }
</script>
<style scoped>

  select{

    border: 1px solid #ddd;
    color: #aaa;
    margin: 1.3rem auto;
    display: block;
    padding:0.2rem  5rem ;
    outline: none;

  }
  .down-list{
    padding: 0 1rem;
    font-size:0.95rem;
  }
  .down-list li{
    border-bottom: 1px solid #eee;
    padding: 0 0 1rem 0;
    margin-bottom: 1rem;
    line-height: 1.2rem;
  }
  .down-list li .spoan1{
    color: #ddd;
    font-size: 0.5rem;
  }
  .down-list li .spoan2{
    color: white;
    font-size: 0.5rem;
    background: cornflowerblue;
    padding: 0.1rem 0.3rem;
    position: absolute;
    right: 1rem;
    line-height: 0.8rem;
    height: 1rem;
    border-radius: 2px;
  }
  .down-list{
    list-style: none;
  }
  *{
    margin: 0;
    padding: 0;
  }

</style>
