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
                <ul>
                    <li>
                        <div class="img-list">
                            <img src="../assets/cart/d4328440-841b-4bdb-96ec-fbdf0db76d82.jpg" alt="" />
                            <span>秒杀价</span>
                        </div>
                        <div class="name-list">
                            papa recipe春雨 黑色蜂蜜面膜 10片装*3盒
                        </div>
                        <div class="price-list">
                            <div class="price">￥269.00</div>
                            <div class="origin">韩国</div>
                        </div>
                    </li>
                     <li>
                        <div class="img-list">
                            <img src="../assets/cart/ad99f0b5-bd75-46f1-b86a-3f71f5523525.jpg" alt="" />
                            <span>秒杀价</span>
                        </div>
                        <div class="name-list">
                            papa recipe春雨 黑色蜂蜜面膜 10片装*3盒
                        </div>
                        <div class="price-list">
                            <div class="price">￥269.00</div>
                            <div class="origin">韩国</div>
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
            this.$http.get("#/cart/assets/cartlist.json").then(function(res){
                console.log(res);
            }).catch(function (error) {  
                console.log(error);
            })
        }
    }
}
</script>

<style>
.cart{
    background-color: #f4f4f4;
}
.cart-top{
    width: 100%;
    height: 950px;
    background-color: #ffffff;
    text-align: center;
    padding: 200px 0 200px;
    box-sizing: border-box;
}
.cart-top .top-img{
    width: 290px;
    height: 145px;
    margin-bottom: 80px;
}
.cart-top .top-p{
    color: #999;
    font-size: 60px;
    line-height: 60px;
}
.cart-top .top-a{
    display: inline-block;
    text-align: center;
    height: 110px;
    color: #333;
    border: 1px solid #999;
    font-size: 60px;
    line-height: 110px;
    text-decoration: none;
    padding: 0 50px;
}
.cart-center{
    height: 30px;
}
.cart-bottom{
    background-color: #ffffff;
}
.b-p{
    width: 100%;
    height: 115px;
    font-size: 36px;
    line-height: 115px;
    padding-left: 40px;
    box-sizing: border-box;
    border-bottom: 2px solid #eeeeee;
}
</style>
