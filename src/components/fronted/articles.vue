<template>
    <div class="art-bg">
        <h5 class="title"><a href="#" class="" >{{item.title}}</a></h5>
        <div class="container-fluid">
            <div class="row">
                <div class="col-lg-4 col-sm-4 col-xs-12">
                    <a href="#" target="_blank"><img src="/static/images/pic4.jpg" class="art-pic l" alt="img1"></a>
                </div>
                <div class="col-lg-8 col-sm-8 col-xs-12">
                    <p class="art-txt">{{item.summary}}</p>
                    <!-- <a href="#" class="art-more  btn btn-danger" role="button" target="_blank">阅读全文<i class="glyphicon glyphicon-chevron-right"></i></a> -->
                    <router-link :to="{path:'articlesMore/'}"  class="art-more  btn btn-danger" role="button" >阅读全文</router-link>
                </div>
            </div>
        </div>
        <div class="art-data clearfix">
            <p class="art-data-l">
                <span>
                    <i class="glyphicon glyphicon-hourglass"></i>
                     {{ pubTime(item.pub_time) }}
                </span>
                <span>&nbsp;&nbsp;
                    <i class="glyphicon glyphicon-eye-open"></i>
                    浏览{{item.views}}次
                </span>
                <span>&nbsp;&nbsp;
                    <i class="glyphicon glyphicon-paperclip"></i>
                    <a href="more-article.html" target="_blank">
                        <span>5</span>
                        条评论
                    </a>
                </span>
                <span></span>
            </p>
            <p class="art-data-r">
                <span>
                    <i class="glyphicon glyphicon-user"></i>
                    <a href="resume.html" target="_blank">{{item.author.username}}</a>
                </span>
                <span>&nbsp;&nbsp;
                    <label>分类：</label>[<a href="#" rel="category tag">{{item.category.name}}</a>]
                </span>
            </p>
        </div>
  </div>
</template>

<script type="text/ecmascript-6">
import moment from "moment"

export default {
  name: 'articles',
  props:{
      item:{
          type: Object
      }
  },
  methods:{
      pubTime: function(date){
          return  moment(date).format('YYYY年MM月DD日');
      }
  }
}
</script>

<style scoped>
.art-bg{
    background: #ffffff;
    box-shadow: 0 0 10px #000;
    border-radius: 10px;
}
.title{
    font-weight: bold;
    padding: 10px 0 8px 15px;
}
.title  a{
    color: #333;
}
.art-pic{
    width: 200px;
    height: 150px;
    border: 1px solid #ccc;
    padding: 3px;
}
.art-txt{
    position:relative;
    line-height:1.5em;
    height:7.5em;
    display:-webkit-box;
    -webkit-box-orient:vertical;
    -webkit-line-clamp:5;
    overflow:hidden;
}
.art-more{
    margin-right: 20px;
    float: right;
}
.art-data{
    font-size: 13px;
    padding: 10px  15px  5px 15px;
}
.art-data-l{
    float: left;
}
.art-data-r{
    float: right;
}
</style>