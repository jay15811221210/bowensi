
<!------------------------报考指南，主要专业等table栏传值复用组件-------------------------->

<template>
  <div class="enrol">
    <div class="enroi">
      <p>{{propp[0].text}}</p>
      <ul class="enroi-guide" >
        <li v-for="item in propp[1].list">
          {{item.zhinan}}
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'enrol',
    props: {
      propp: {
        type: Array,
        required: true
      }
    },
    components:{

    },
    data () {
      return {

      }
    }
  }
</script>
<style scoped>
  .enroi{
    padding: 0.8rem 1rem 1.6rem 1rem;

  }
  .enroi p{
    font-family: "Microsoft YaHeikaiti";
    font-size: 1.2rem;
    font-weight: 600;
    margin-bottom: 0.3rem;
  }
  .enroi-guide{
    display: flex;
    display: -webkit-flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    font-size: 0.8rem;

  }
  .enroi-guide li{
    width: 23%;
    text-align: center;
    border-radius: 1rem;
    border: 1px solid #ccc;
    height: 1.4rem;
    line-height: 1.4rem;
    margin-top: 0.8rem;
    color: #888;
  }
  .enroi-guide li:hover{
    color: white;
    background-color: #fd576f;
  }
</style>
