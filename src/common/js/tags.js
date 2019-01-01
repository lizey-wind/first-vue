/** Created by li on 2017/11/17. */
$(document).ready(function(){
    var oDiv  = $("#tags-show");
    $.ajax({
        type:"GET",
        url:"http://101.236.18.133:8080/taglist/",
           // url: 'test.php?' + Math.random(),  // 后面加个随机数是清除缓存    坑
        async:true,
        contentType:"application/json",
         /*data:JSON.stringify({}),*/
        complete:function(){$("#load").hide();},   // AJAX请求完成时隐藏loading提示
        success:function(json){    // 为返回的数据，在这里做数据绑定
            var date = json.data;
            var arr = [];
            if(date.length<=20){
                date.sort(function(a,b){
                    return  b.count - a.count;
                });
                $.each(date,function(i,item){
                    addTags(i,item);
                })
            }else{
                for(var i=0;i<20;i++){
                    arr.push(date[i]);
                }
                arr.sort(function(a,b){
                    return b.count - a.count;
                });
                $.each(arr,function(i,item){
                    addTags(i,item);
                })
            }
        }
    }) ;
    function addTags(i,item){
        var tag = $("<a/>");
        tag.addClass("tag-link-"+i);
        tag.attr({href:item.url, title:item.count+"个话题", target:"_blank"});
        tag.text(item.name);
        if(i<4){
            tag.css("font-size","20pt");
        }else if(i>=3 && i<=10){
            tag.css("font-size","13.4pt");
        }else{
            tag.css("font-size","8pt");
        }
        $(oDiv).append(tag);
    }

});

