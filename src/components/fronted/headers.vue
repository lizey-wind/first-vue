<template> 
  <div> 
    <nav class="navbar navbar-default  navbar-fixed-top  navbar-color " role="navigation">  
      <div class="container-fluid">  
        <!-- Brand and toggle get grouped for better mobile display -->  
        <div class="navbar-header">  
          <button type="button" class="navbar-toggle collapsed navbar-s" data-toggle="collapse" data-target="#navbar-menu" aria-expanded="false">  
            <span class="sr-only">Toggle navigation</span>  
            <span class="icon-bar"></span>  
            <span class="icon-bar"></span>  
            <span class="icon-bar"></span>
          </button>  
          <a class="navbar-brand  nav-title" href="#">{{ msg }}</a>  
        </div>  
        <!-- Collect the nav links, forms, and other content for toggling -->  
        <form class="navbar-form navbar-left" role="search">  
            <div class="form-group nav-form">  
              <input type="text" class="form-control" placeholder="Search">          
            </div>  
            <!--<button type="submit" class="btn btn-default"><i class="glyphicon glyphicon-search"></i></button>  -->
        </form>
        <div class="collapse navbar-collapse" id="navbar-menu">  
          <ul class="nav navbar-nav navbar-right">  
            <li><router-link :to="{path:'/'}">首页</router-link></li>  
            <li class="dropdown">  
              <a href="#" class="dropdown-toggle" data-toggle="dropdown">前端学习<span class="caret"></span></a>  
              <ul class="dropdown-menu" role="menu">  
                <li><router-link :to="{path:'/categorylist',query:{name:'HTML'}}">HTML/CSS</router-link></li>  
                <li><router-link :to="{path:'/categorylist',query:{name:'JavaScript'}}">JavaScript</router-link></li>  
                <li><router-link :to="{path:'/categorylist',query:{name:'Django'}}">Django</router-link></li>   
                <li><router-link :to="{path:'/categorylist',query:{name:'Python'}}">Python</router-link></li>   
              </ul>  
            </li>  
            <li><router-link :to="{path:'/others'}">学无止境</router-link></li>
            <li><router-link :to="{path:'/numbling'}">碎碎叨叨</router-link></li>
            <li><router-link :to="{path:'/resume'}">关于我</router-link></li>
            <!-- <li><router-link :to="{path:'/'}">留言</router-link></li> -->
          </ul>           
        </div><!-- /.navbar-collapse -->  
      </div><!-- /.container-fluid -->  
    </nav> 
    <div class="container-fluid">
          <div class="row header1">
              <div class="header-name  hidden-xs">
                  <h1>Leah</h1>
                  <p>个人博客</p>
              </div>
          </div>
    </div>
  </div>
</template>  

<script>
export default {
  name: 'headers',
  data () {
    return {
      msg: '李泽艳'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/*导航条*/
.navbar-color{
    font-weight: bold;
    background: rgba(251, 255, 246, 0.95);
}
.navbar-s{
  background: rgba(0,0,0,0.8);
}
/*头部*/
.header1{ 
  margin-top: 50px;
  margin-bottom: 30px;
  background: url(/static/images/header-bg-pic0.jpg) no-repeat;
  background-size: cover;
}
.header-name{ 
  margin-left: 10em;
}
.header-name p{
  font-size: 18px;
  font-weight: bolder;
}
</style>
