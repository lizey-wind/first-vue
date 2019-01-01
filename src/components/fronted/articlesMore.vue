<template>
    <div class="container">
        <div class="row cbody2">
            <div class="col-lg-8 col-md-8  col-sm-12 col-xs-12">
                <div class="row article-main">
                    <div>
                        <h4>新的一年，继续在前端这条路上前行</h4>
                        <p>自从工作以来，工作繁忙，很少来打理博客，索引量一直在下降，现在只有169，但查了下排名，搜索个人博客和前端博客，能排在六七页这样，还算是不错的。</p>
                        <p>建了博客也一年多了，但并没有发表很多文章，没有记录什么学习笔记 ，也是深感惭愧啊。每天忙忙碌碌的，也没做出什么成绩，技术也并没有很大提高，经常在加班中度过，对于学习来说，也没有一直坚持下去。看了很多招聘前端的要求，可以说是要求挺多啊，各种js框架，AngularJS，node.js，react.js,vue.js等等，css框架也有less，sass等，各种各样的框架，这该怎么去学，先学哪个，又有点迷茫了。想做好前端，升职加薪，必须得不断去学习，学更多的知识，提高自己的技术。</p>
                        <p>2017年，是崭新的一年，要继续在前端这条路上前行，尽量用业余时间去学习新的技术，加强自己。2017年的目标：加薪，技术提升。</p>
                        <p>2017年，是崭新的一年，要继续在前端这条路上前行，尽量用业余时间去学习新的技术，加强自己。2017年的目标：加薪，技术提升。</p>
                    </div>
                </div>
                <div class="row tag-show">
                    <span><i class="glyphicon glyphicon-tag"></i>&nbsp;标签：</span>
                    <a href="#">JS</a>
                    <a href="#">前端</a>
                    <a href="#">博客</a>
                    <a href="#">CSS</a>
                </div>
                <div class="row art-next">
                    <p>上一篇：<a href="#" target="_blank">web自动识别</a></p>
                    <p>下一篇：<a href="#" target="_blank">啦啦啦啦</a> </p>
                </div>
                <div class="row art-other">
                    <p>可插入内容</p>
                </div>
                <div class="row">
                    <div class="comment-area">
                        <div class="section-cbox-head ">
                            <span>我要评论：</span>
                        </div>
                        <div class="section-cbox-body">
                            <div class="cbox-body-main">
                                <textarea class="textarea-fw" placeholder="来说几句吧！"></textarea>
                            </div>
                            <div class="cbox-body-foot">
                                <div class="cbox-foot-l">
                                    <a href="javascript:void(0)" ><i class="glyphicon glyphicon-heart-empty"></i></a>
                                    <a href="javascript:void(0)"><i class="glyphicon glyphicon-picture"></i></a>
                                </div>
                                <div class="cbox-foot-r">
                                    <a href="javascript:void(0)" role="button" class="btn btn-danger">畅言一下</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class=" comment-list">
                        <span class="box-left">评论</span>
                        <span class="box-right">7人参与，5条评论</span>
                    </div>
                    <div class="comment-news"><span>最新评论</span></div>
                </div>
                <div class="row">
                    <div class="comment">
                        <ul class="media-list  list-more-article">
                            <li class="media">
                                <div class="media-left">
                                    <a href="#">
                                        <img class="media-object img-circle" src="/static/images/pic3.jpg" alt="Img1" />
                                    </a>
                                </div>
                                <div class="media-body">
                                    <h4 class="media-heading">轩陌</h4>
                                    <p>我之前也是这样，看了要钱，果断没买，现在换成服务器了</p>
                                    <textarea class="textarea-other-w"></textarea>
                                </div>
                            </li>
                            <li class="media">
                                <div class="media-left">
                                    <a href="#">
                                        <img class="media-object img-circle" src="/static/images/pic4.jpg" alt="Img1" />
                                    </a>
                                </div>
                                <div class="media-body">
                                    <h4 class="media-heading">轩陌</h4>
                                    <p>我之前也是这样，看了要钱，果断没买，现在换成服务器了</p>
                                </div>
                            </li>
                            <li class="media">
                                <div class="media-left">
                                    <a href="#">
                                        <img class="media-object img-circle" src="/static/images/pic1.jpg" alt="Img1" />
                                    </a>
                                </div>
                                <div class="media-body">
                                    <h4 class="media-heading">轩陌</h4>
                                    <p>我之前也是这样，看了要钱，果断没买，现在换成服务器了</p>
                                </div>
                            </li>
                            <li>
                                <h4>评论4</h4>
                                <p>啥啥啥</p>
                            </li>
                        </ul>
                    </div>
                </div>

            </div>
            <div class="col-lg-1 col-md-1 col-sm-12 col-xs-12"></div>
            <div class="col-lg-3 col-md-3 col-sm-12 col-xs-12">
                <div class="row">
                    <l-title :title="title[1]"></l-title>
                    <tags></tags>
                </div>
                <div class="row">
                    <l-title :title="title[2]" ></l-title>
                </div>
            </div>
        </div>
    </div>
</template>
<script type="text/ecmascript-6">
import title from './little-title'

import tags from './tags'

export default {
  name: 'articlesMore',
  data(){
      return {
          title: [{msg1: '文章',msg2: '推荐'},{msg1: '标签云',msg2: ''},{msg1: '站点',msg2: '推荐'}],
      }
  },
  components: {
      'l-title': title,
      tags
  }
}
</script>
<style scoped>

.article-main{
    margin-top: 30px;
    margin-bottom: 10px;
    background: #f5f5f5;
    box-shadow: 0 0 5px 0 #0f0f0f;
}
.article-main h4{
    line-height: 40px;
    text-align: center;
    font-weight: bolder;
    padding-bottom: 10px;
    border-bottom: 1px dotted  #dd956c;
}
 .article-main p{
    font-size: 15px;
    line-height: 28px;
    color: #5e5e5e;
    padding: 0px  8px;
    text-indent: 2em;
}
.art-next>p{
    color: #ff8a4a;
}
.art-other{
    border-bottom: 1px solid #dd956c;
}
/*精彩评论*/
.comment li{
    margin-bottom: 8px;
    border-bottom: 1px dashed #999999;
}
.comment ul li  .com-remark{
    display: block;
    overflow: hidden;
    width: 100%;
    text-overflow: ellipsis;
}
.comment ul li img{
    width:40px;
}
.media .media-body p{
    position:relative;
    line-height:1.4em;
    /* 3 times the line-height to show 3 lines */
    height:4.2em;
    overflow:hidden;
}
.media .media-body p::after{
    content:"......";
    font-weight:bold;
    position:absolute;
    bottom:0;
    right:0;
    padding:0 20px 1px 45px;
    background: #f1e3f5 repeat-y;
}
/*我要评论*/
.comment-area{
    margin-top: 20px;
}
.comment-area .section-cbox-head{
    width: 75px;
    height: 30px;
    border: 1px solid #dd956c;
    background: rgba(221, 172, 130, 0.43);
    border-radius: 15px;
    margin-bottom: 5px;
    text-align: center;
    line-height: 30px;
    color: #dd3d2b;
    box-shadow: 0 0 5px 0 #ff8a4a;
}
.section-cbox-body .cbox-body-main .textarea-fw{
    width: 100%;
    height: 80px;
    border: 1px solid #dd956c;
    border-radius: 15px;
    padding: 8px 10px;
    box-shadow: 0 0 5px 0 rgba(255, 138, 74, 0.55);
}
.section-cbox-body  .cbox-body-foot{
    font-size: 23px;
    margin-left: 10px;
    color: #ff2516;
}
.cbox-body-foot .cbox-foot-l{
    float: left;
}
.cbox-body-foot .cbox-foot-l a{
    color: #dd3d2b;
    padding-right: 10px;
}
.cbox-body-foot .cbox-foot-r{
    float: right;
}
/**/
.comment-list{
    font-size: 18px;
    margin: 50px 0 15px 0;
    color: #ff2516;
    border-bottom: 1px solid #ff2516;
}
.comment-list .box-left{
    padding: 8px 13px 0px;
    border: 1px solid #ff2516;
    border-bottom: none;
    border-top-right-radius: 8px;
    border-top-left-radius: 8px;
}
.comment-list .box-right{
    float: right;
}
.comment-news{
    border-left: 5px solid #ff2516;
    padding-left: 15px;
    color: #ff2516;
    font-size: 18px;
    margin-bottom: 30px;
}
/*z最新评论区*/
.textarea-other-w{
    width: 100%;
    height: auto;
    border: 1px solid #999486;
    padding: 8px 10px;
}
.list-more-article li{
    padding: 15px 0px 35px;
}
.list-more-article .media-body p{
    line-height: 30px;
}
</style>
