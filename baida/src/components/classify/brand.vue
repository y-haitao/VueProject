<template>
    <div class="brand">
        <div class="brand-h">热门品牌</div>
        <div class="brand-list">
            <ul class="brand-ul">
                <li v-for="item in itemList" :key="item.brandid">
                    <a href="javascript:;">
                        <img class="brand-img" :src="item.brandLogo" alt="" />
                    </a>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            itemList:[]
        }
    },
    mounted:function(){
        this.getDate();
    },
    methods:{
        getDate:function () {  
            var self = this;
            this.$http.get("static/brand.json").then(function(res){
                // console.log(res);
                for(var i = 0,len = res.body.data.list.length;i<len;i++){
                    var selDate = res.body.data.list[i];
                    console.log(selDate);
                    //获取数组中的部分数据
                    var urlimg = res.body.data.list[i].brandLogo
                    console.log(urlimg);
                    //将获取的数据push到空的数组中itenList
                    self.itemList.push(selDate);
                }
            }).catch(function (error) {  
                console.log(error);
            })
        }
    }
}
</script>

<style>
.brand-h{
    height: 100px;
    color: #666;
    font-size: 38px;
    line-height: 100px;
    padding-left: 44px;
    background: #fff;
}
.brand-ul>li{
    /* float: left; */
    text-align: center;
    background: #ffffff;
    width: 3.306667rem;
    height: 3.333333rem;
    display: inline-block;
    box-sizing: border-box;
    border-bottom: 2px solid #f4f4f4;
    border-right: 1px solid #f4f4f4;
}
.brand-ul>a{
    display: inline-block;
    width: 33%;
}
.brand-img{
    width: 200px;
    height: 200px; 
}
</style>
