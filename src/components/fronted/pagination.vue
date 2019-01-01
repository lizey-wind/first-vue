<template>
    <nav aria-label="Page navigation" class="pages-bar">
        <ul class="pagination">
            <li :class="{'disabled': current == 1}"><a href="javascript:;" v-on:click="setCurrent(1)"> 首页 </a></li>
            <li :class="{'disabled': current == 1}">
                <a href="javascript:;" v-on:click="setCurrent(current -1)" aria-label="Previous">
                    <span aria-hidden="true">&laquo;</span>
                </a>
            </li> 
            <li  v-for=" p in grouplist" v-bind:class="{ 'active': current == p.val}">
                <a href="javascript:;" v-on:click="setCurrent(p.val)">{{p.text}}</a>
            </li>
            <li :class="{'disabled': current == page}">
                <a href="javascript:;" v-on:click="setCurrent(current +1)" aria-label="Next">
                    <span aria-hidden="true">&raquo;</span>
                </a>
            </li>
            <li :class="{'disabled': current == page}"><a href="javascript:;" v-on:click="setCurrent(page)"> 尾页 </a></li>
        </ul>
    </nav>
</template>

<script type="text/ecmascript-6">

export default {
    name: 'pagination',
    data(){
        return {
            current: this.currentPage
        }
    },
    props: {
        total:{
            type: Number,
            default: 0
        },
        display: {      //每页显示条数
            type: Number,
            default: 0
        },
        currentPage: {  //当前页码
            type: Number,
            default: 1
        },
        pagegroup: {   //分页条数
            type: Number,
            default: 5,
            coerce: function (v){
                v = v>0?v:5;
                return v%2 === 1?v: v+1;
            }  
        }
    },
    computed: {
        //总页数 page 应该等于需显示的总数除以每页显示的个数，并向上取整
        page: function(){
            return Math.ceil(this.total / this.display);
        },
        grouplist: function(){   //获取分页页码
            var len = this.page, temp=[], list=[];
            var count = Math.floor(this.pagegroup /2);
            var center = this.current;
            if(len <= this.pagegroup){
                while(len--){
                    temp.push({text: this.page - len, val: this.page - len});
                }
                return temp;
            }
            while(len--){
                temp.push(this.page - len);
            }
            var idx = temp.indexOf(center);
            (idex < count) && (center = center + count - idx);
            (this.current > this.page - count) && (center = this.page - count);
            temp = temp.splice(center - count -1, this.pagegroup);
            do{
                var t = temp.shift();
                list.push({
                    text: t,
                    val: t
                });
            }while(temp.length);
            if(this.page > this.pagegroup){
                (this.current > count+1) && list.unshift({text: '...', val: list[0].val - 1});
                (this.current < this.page - count) && list.push({text: '...', val: list[list.length - 1].val + 1});
            }
            return list;
        }
    },
    methods: {
        setCurrent: function(idx){
            if(this.current != idx && idx>0 && idx < this.page+1){
                this.current = idx;
                this.$emit('pagechange', this.current);
            }
        }
    }
}
</script>

<style scoped>
.pages-bar{
    text-align: center;
}
</style>