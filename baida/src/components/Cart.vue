<template>
    <div class="cart">
        <div class="cart-top">
            <img class="top-img" src="../assets/cart/cart.png" alt="" />
            <p class="top-p">您的购物车空空如也...</p>
            <a href="" class="top-a">去逛逛</a>
        </div>
        <div class="cart-center"></div>
        <div class="cart-bottom">
            <p class="b-p">热门商品</p>
            <div class="bottom-list">
                <ul class="bottoml-ul">
                    <li v-for="(item,index) in itemList" :key="index">
                        <div class="img-list">
                            <img :src="item.itemLogoUrl" alt="" />
                            <!-- <span>秒杀价</span> -->
                        </div>
                        <div class="name-list">
                            {{item.itemTitle + "..."}}
                        </div>
                        <div class="price-list">
                            <div class="price">￥{{item.salePrice}}</div>
                            <div class="origin">{{item.country}}</div>
                        </div>
                    </li>
                </ul>
            </div>
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
            this.$http.get("static/cartlist.json").then(function(res){
                // console.log(res);
                for(var i = 0,len = res.body.data.list.length;i<len;i++){
                    var selDate = res.body.data.list[i];
                    // console.log(selDate);
                    //获取数组中的部分数据
                    var urlimg = res.body.data.list[i].itemLogoUrl
                    // console.log(urlimg);
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
.cart{
    height: 100%;
    background-color: #f4f4f4;
    padding-bottom: 170px;
}
.cart-top{
    width: 100%;
    /* height: 550px; */
    background-color: #ffffff;
    text-align: center;
    padding: 150px 0 150px;
    box-sizing: border-box;
}
.cart-top .top-img{
    width: 290px;
    height: 145px;
    margin-bottom: 40px;
}
.cart-top .top-p{
    color: #999;
    font-size: 40px;
    line-height: 60px;
}
.cart-top .top-a{
    display: inline-block;
    text-align: center;
    height: 88px;
    color: #333;
    border: 1px solid #999;
    font-size: 40px;
    line-height: 88px;
    text-decoration: none;
    padding: 0 50px;
}
.cart-center{
    height: 20px;
}
.cart-bottom{
    background-color: #ffffff;
}
.b-p{
    width: 100%;
    height: 90px;
    font-size: 24px;
    line-height: 90px;
    padding-left: 40px;
    box-sizing: border-box;
    border-bottom: 1px solid #eeeeee;
}
.bottoml-ul{
    width: 100%;
    height: 100%;
}
.bottoml-ul>li{
    width: 50%;
    height: 100%;
    border-bottom: 1px solid #eeeeee;
    border-right: 1px solid #eeeeee;
    float: left;
    /* padding: 10px; */
}
.img-list{
    padding: 50px 50px;
}
.img-list>img{
    width: 100%;
    height: 100%;
}
.name-list{
    height: 86px;
    font-size: 36px;
    line-height: 40px;
    margin: 5px 20px 20px;
    overflow: hidden;
    text-overflow: ellipsis;
}
.price-list{
    margin-left: 20px;
    margin-bottom: 50px;
    position: relative;
}
.price-list .price{
    color: #e72714;
    font-size: 40px;
}
.price-list .origin{
    color: #666;
    font-size: 42px;
    text-align: right;
    position: absolute;
    bottom: 0px;
    right: 40px;
}
</style>
