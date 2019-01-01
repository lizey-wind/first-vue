<template>
  <div class="container">
      <div class="row cbody2">
          <div class="col-lg-8 col-md-8 col-xs-12">         
            <l-title :title="title[0]" ></l-title>
            <div class="row art-text">
                <ul>
                    <li v-for="(item, index)  in items" >
                        <v-article :item = "item"></v-article>
                    </li>
                    <pagination :total="total" :display="display" :current-page="current" @pagechange="pagechange"></pagination>
                </ul>        
            </div>
          </div>
          <div class="col-lg-1 col-md-1 col-xs-12"></div>
          <div class="col-lg-3 col-md-3 col-xs-12">
            <div class="row">
                <l-title :title="title[1]" ></l-title> 
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
import articles from './articles'
import pagination from './pagination'
//import bg_pic1 from '../../../static/images/bg-pic1.jpg'
//import bg_pic2 from '../../../static/images/bg-pic2.jpg'


export default {
  name:'homepage',
  data(){
    return {
        //listImg: [{url: bg_pic1},{url: bg_pic2}],
        title: [{msg1: '文章',msg2: '推荐'},{msg1: '标签云',msg2: ''},{msg1: '站点',msg2: '推荐'},{msg1: '精彩',msg2: '评论'}],
        items: null,
        total: null,
        display: 5,
        current: 1 
    }
  },
  methods:{
        pagechange: function(currentPage){
            // ajax请求, 向后台发送 currentPage, 来获取对应的数据
            var paginUrl = "index"
            // TODO: 判断类型

            if (currentPage == 1)
            {
                console.log("访问第1页");
            }
            else {
                let offset = 5 * (currentPage-1);
                paginUrl += "?limit=5&offset=" + offset;
            }
            
            this.$api.get(paginUrl, null,res=>{
                this.total = res.count;
                this.items = res.results;
            })
      },
      parseQueryString(argu){
        var str = argu.split('?')[1];
        var result = {};
        var temp = str.split('&');
        for(var i=0; i<temp.length; i++)
        {
            var temp2 = temp[i].split('=');
            result[temp2[0]] = temp2[1];
        }
        return result;
    },
  },
  created() {
        this.$api.get('index/',null, res=>{
            this.items = res.results;
            this.total = res.count;
            let paginNextUrl = res.next;
            var paginInfo = this.parseQueryString(paginNextUrl);
            if (paginInfo) {
                this.display = parseInt(paginInfo['limit']);
                //console.log("pagin Limt: " + this.display);
            }
        })
  }, 
  components:{
    'l-title': title,
    tags,
     'v-article': articles,
    pagination 
  }
}
</script>
<!--<script type="text/javascript" src="../js/tags.js"></script>-->

<style scoped>
.cbody2{
    padding-bottom: 28px;
    border-bottom: 1px solid #aaa;
}
</style>