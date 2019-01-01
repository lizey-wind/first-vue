<template>
  <div class="container">
      <div class="row cbody2">
          <div class="col-lg-8 col-md-8 col-xs-12">
            <div class="row art-text">
                <!-- <ul>
                    <li v-for="(item, index)  in items" >
                        <v-article :item = "item"></v-article>
                    </li>
                    <pagination :total="total" :display="display" :current-page="current" @pagechange="pagechange"></pagination>
                </ul>   -->  
                <ul>
                    <li v-for="(item, index)  in items" >
                        <v-article :item = "item"></v-article>
                    </li>
                    <pagination :total="total" :display="display" :current-page="current" @pagechange="pagechange"></pagination>
                </ul>
            </div>
          </div>
      </div>     
  </div>
</template>
<script type="text/ecmascript-6">
import articles from './articles'
import pagination from './pagination'

export default{
    name: 'categorylist',
    data(){
        return {
            items: null,
            total: null,
            display: 1,
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
        getURL(name){
            this.$api.get('category/?name='+name,null, res=>{
                this.items = res.results;
                this.total = res.count;
                let paginNextUrl = res.next;
                var paginInfo = this.parseQueryString(paginNextUrl);
                if (paginInfo) {
                    this.display = parseInt(paginInfo['limit']);
                    //console.log("pagin Limt: " + this.display);
                }
            }) 
        }
    },
    beforeRouteUpdate(to, from, next) {
        let name = to.query.name;
        next(
            this.getURL(name)
            /* this.$api.get('category/?name='+name,null, res=>{
                this.items = res.results;
                this.total = res.count;
                let paginNextUrl = res.next;
                var paginInfo = this.parseQueryString(paginNextUrl);
                if (paginInfo) {
                    this.display = parseInt(paginInfo['limit']);
                    //console.log("pagin Limt: " + this.display);
                }
            })  */
        );
        
    },
    created(){
        let name = this.$route.query.name;
        this.getURL(name);
    },
    components:{
        'v-article': articles,
        pagination
    }

}
</script>