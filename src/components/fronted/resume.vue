<template>
    <div class="resume-wrapper">
        <!--<div class="bg bg-resume"></div>-->
        <!--主页头部-->
        <div class="container">
            <div class="row  cvheader">
                <div class="col-lg-7 col-md-7 col-xs-12">
                    <div class="title-h1 title-rotate">
                        <h1 class="">一阵风清</h1>
                    </div>
                    <span class="glyphicon glyphicon-paperclip" aria-hideen="true"></span>
                    前端工程师
                </div>
                <div class="col-lg-3 col-md-3 col-xs-12">
                    <div class="row">
                        <div class="col-lg-4 col-md-4 col-xs-4">
                            <p class="address text-center" id="contact">联系</p>
                        </div>
                        <div class="col-lg-8 col-md-8 col-xs-8">
                            <p>
                                <span class="glyphicon glyphicon-envelope"></span>
                                1625475704@qq.com
                            </p>
                            <p>
                                <span class="glyphicon glyphicon-earphone"></span>
                                15083712617
                            </p>
                            <p>
                                <span class="glyphicon glyphicon-road"></span>
                                江西省赣州市
                            </p>
                        </div>
                    </div>
                </div>
                <div class="col-lg-2 col-md-2 col-xs-12">
                    <p>
                    <img src="/static/images/pic1.jpg" class="img-responsive img-rounded title-rotate" alt="Responsive image"
                            title="welcome here" data-toggle="tooltip" data-placement="top" />
                    </p>
                </div>
            </div>
        </div>
        <!--主页主体-->
        <div class="container">
            <div class="row cvbody">
                <div class="col-lg-6 col-md-6 col-xs-12">
                    <div class="row">
                        <div class="lbox green">
                            <h4 class="title-h4">个人介绍</h4>
                            <p>本人做事认真努力，待人热情，诚实守信，吃苦耐劳，有良好的学习能力。有很好的时间观念和责任心；
                                并且具有良好的团队意识，具有一定的专业知识能力，学习努力，在校期间每年每学期都荣获校奖学金及“三好学生”荣誉称号；
                                在校期间积极参加班级活动，并参加过一些志愿者活动，喜欢结交朋友，但性格有些慢热；当然还经常做一些体育活动，即能锻炼身体，
                                又能放松心情。
                            </p>
                        </div>
                        <div class="lbox red">
                            <h4 class="title-h4">个人技能</h4>
                            <p>
                                普通话二级乙等；<br>
                                大学英语四（CET-4），良好的听说读写能力，能够浏览英语专业书籍。<br>
                                通过全国计算机二级考试，熟练运用office相关软件。<br>
                                在校多次荣获校二等奖学金，三等奖学金，以及“三好学生”称号。
                            </p>
                        </div>
                        <div class="lbox orange">
                            <h4 class="title-h4">职业目标</h4>
                            <p>希望从事前端开发工作，想成为一名前端工程师；<br>
                                希望公司能够有专门入职培训或是有前辈指导，让我能够进步更快的同时能够更好的完成各项工作；<br>
                                专注前端热爱前端。一些相关的知识都是我在大三的时候开始自学的，
                                熟悉相关html，css，js，css+div网页布局，jquery知识，能够制作静态网页布局。
                            </p>
                        </div>
                    </div>
                </div>
                <div class="col-lg-1 col-md-1 col-xs-12"></div>
                <div class="col-lg-5 col-md-5 col-xs-12">
                    <div class="row">
                        <div class="rbox">
                            <h4 class="title-h4">教育背景</h4>
                            <p> 2014.09-2018.06 &nbsp;&nbsp;
                                江西理工大学   &nbsp;&nbsp;
                                信息与计算科学（本科）<br>
                                主修课程：<br>
                                高等代数、数学分析、数值分析、c#.NET程序设计、数据结构、c程序设计、数据库系统、
                                计算机图形学、操作系统教程、java程序设计、集体智慧编程等
                            </p>
                        </div>
                        <div class="rbox">
                            <h4 class="title-h4">工作经历</h4>
                            <p>
                                2017.06 - 2017.07 &nbsp;&nbsp;
                                中兴软件（南昌）公司&nbsp;&nbsp;
                                <ul>
                                    <li>做一个简单的当当网项目，完成了:<br>
                                        1, 网页主页，登录注册页面，购物车页面等静态网页的初步制作；<br>
                                        2, 运用mysql建图书等各种基本信息数据库；<br>
                                        3, JSP实现前后台之间的数据交互；</li>
                                    <li>在实习结束后荣获“优秀实习生”的称号。</li>
                                </ul>
                            </p>
                        </div>
                        <div class="rbox">
                            <h4 class="title-h4">个人爱好</h4>
                            <p><span class="glyphicon glyphicon-tree-deciduous "></span>&nbsp;羽毛球
                                <span class="glyphicon glyphicon-plane"></span>&nbsp;旅游
                            </p>
                            <p>
                                <span class="glyphicon glyphicon-cutlery"></span>&nbsp;美食
                            </p>
                            <p>
                                <span class="glyphicon glyphicon-music"></span>&nbsp;音乐
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script type="text/ecmascript-6">
export default {
  name: 'resume'
}
</script>

<style scoped>
/*.bg-resume{
    background: url(/static/images/bg-pic1.jpg)   no-repeat center center fixed;
}*/
.cvheader{
    /*margin-top: 40px;*/
    border-bottom: 1px solid #dfdfdf;
    padding-top: 30px;
    padding-bottom: 20px;
}
.title-h1{
    width: 150px;
    height: 42px;
    background-color: aliceblue;
    color: cornflowerblue;
}
.address{
    background-color: #efb73e;
    color: #fff;
    padding: 10px;
}
.text-center{
    text-align: center;
}
.cvbody{
    padding-top: 50px;
}
.lbox{
     margin-bottom: 30px;
     color: #fff;
     padding: 50px;
 }
.title-h4:after{
    display: block;
    content: "";
    height: 3px;
    width: 0;
    background-color: dodgerblue;
    transition: width 0.5s ease-in-out;
}
.title-h4:hover:after,
.title-h4:focus:after{
    width: 150px;
}
.green{
    background-color: #2ecc71;
    box-shadow: 0 0 15px  #2eff71;
}
.red{
    background-color: #dd4814;
    box-shadow: 0 0 15px #dd956c;
}
.orange{
    background-color: orange;
    box-shadow: 0 0 15px #fcff19;
}
.rbox{
    border: 1px solid #c9dfdf;
    border-radius: 5px;
    padding: 40px 50px;
    margin-bottom: 30px;
    color: #fff;
    background: rgba(31, 8, 0, 0.20);
}
.footer{
    margin: 30px 0 10px;
    padding: 50px;
    color: #fff;
    background-color: #a6aaa8;
}
.text-center{
    text-align: center;
}
</style>