
<!----------------------------专题列，传值复用组件----------------------------->

<template>
  <div class="zhuanti">
    <div class="myself-list" @click="JumpDetails">
      <div class="xinde" v-for="item in xinde" >
        <div class="ss">
          <p class="texxx">{{item.p}}</p>
          <p class="xinde-fn">
            <span><b>{{item.span1}}</b></span>
            <span>{{item.span2}}</span>
          </p>
        </div>
        <img :src="item.img" alt="">
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'zhuanti',
    props: {
      xinde: {
        type: Array,
        required: true
      }
    },
    components:{

    },
    data () {
      return {

      }
    },
    methods:{
      JumpDetails(){
        this.$router.push("/article");
      },
    }
  }
</script>
<style scoped>
  .xinde{
    display: flex;
    padding: 1rem 1rem 0.92rem 1rem;
    border-bottom: 1px solid #ccc;
    align-items: center;
    justify-content: space-between;

  }
  .texxx{
    font-size: 0.9rem;
    padding: 0 0.5rem 0 0;

  }
  .xinde .ss{
    flex: 0 1 15rem;
  }
  .xinde img{

    width: 7.7rem;
    height: 4.2rem;
    display: block;
  }

  .xinde .xinde-fn span:nth-child(1){
    color: #1769c6;
    font-size: 0.7rem;

  }
  .xinde .xinde-fn span{
    display: inline-block;
    margin-top: 1rem;
    line-height: 1.4rem;
    float: left;
  }
  .xinde .xinde-fn span:nth-child(2){
    color: #cccccc;
    font-size: 0.5rem;
    float: right;
    margin-right: 1rem;
  }
</style>
