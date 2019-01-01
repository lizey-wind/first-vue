<template>
  <div class="row">
      <div class="l-title">
          <p>{{title.msg1}}<span>{{title.msg2}}</span></p>
      </div>
  </div>
</template>
<script type="text/ecmascript-6">
export default {
    name: 'little-title',
    props:['title']
}
</script>
<style scoped>
/*小标题头*/
.l-title{
    margin: 30px 0 30px;
    background: rgba(248, 255, 244, 0.60);
    box-shadow: 0  5px 5px -5px  #000;
    padding-left: 10px;
    font-weight: bold;
    font-size: 18px;
}
.l-title p{
    background: #fff;
    padding:3px 10px;
    box-shadow: 0  5px 5px -5px  #000;
    border-left: 5px solid  #ffb494;
}
.l-title span{
    color: #ff5f4a;
}
</style>
