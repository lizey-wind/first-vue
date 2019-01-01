<template>
  <div class="tag-show" id="tags-show" >
      <a ref="tags" :tag-link="index"  :count="item.count" :style="setStyle(index)"  v-for="(item, index) in  items">{{item.name}}</a>
  </div>
</template>

<script type="text/ecmascript-6">

export default {
    name: 'tags',
    data() { 
        return {
            items: null
        }
    },
    methods: {
        setStyle(i){
            if(i<4){
                return {"font-size":"20pt"}
            }else if(i>=3 && i<=10){
                return {"font-size":"13.4pt"}
            }else{
                return {"font-size":"8pt"}
            }            
        }        
    },
    created() {
        this.$api.get('taglist/',null, res=>{
            var date = res.data;
            if(date.length<=20){
                date.sort(function(a,b){
                    return  b.count - a.count;
                })
            }else{
                for(var i=0;i<20;i++){
                    date.push(date[i]);
                }
                date.sort(function(a,b){
                    return b.count - a.count;
                })
            }   
            this.items = date;    
        })
    }
    
}
</script>
<style>
/*标签云*/
.tag-show a{
    display: inline-block;
    padding: 6px 15px;
    margin: 5px 8px;
    border-radius: 4px;
    box-shadow: 0px 0px 3px #bbb;
    background: #fafafa;
    color: #666;
}
</style>