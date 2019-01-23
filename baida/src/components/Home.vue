<template>
    <div>
        <div class="header">
            <mt-header fixed>
                <router-link to="/m" slot="left">
                    <mt-button icon="back">返回</mt-button>
                </router-link>
                    <mt-button icon="more" slot="right"></mt-button>
            </mt-header>
            <mt-swipe :auto="3000">
                <mt-swipe-item v-for="item in lunbotu" :key="item.uid">
                    <img :src="item.url" alt="">
                </mt-swipe-item>
            </mt-swipe>
            <div class="header-pl">
                <div class="pl-title" v-for="plt in plTitle" :key="plt.pid">
                    <img :src="plt.url" alt="" />
                </div>
                <div class="pl"> 
                    <div class="pl-top" v-for="gd in gdImg" :key="gd.tid">
                    <img class="pl-img" :src="gd.url" alt="">
                    </div>
                    <div class="pl-bottom">
                        <cube-scroll
                            ref="scroll"
                            :data="itemGd"
                            direction="horizontal"
                            class="horizontal-scroll-list-wrap">
                            <ul class="list-wrapper">
                                <li class="list-item" v-for="gd in itemGd" :key="gd.brandId">
                                    <img class="gd-img" :src="gd.itemLogoUrl" alt="">
                                    <h5 class="gd-h5">{{gd.itemTitle}}</h5>
                                    <p class="gd-p">￥{{gd.salePrice}}</p>
                                </li>
                            </ul>
                        </cube-scroll>
                    </div>
                </div>
            </div>
            <div class="header-rm">
                <p class="hr-p">热门商品</p>
                <ul class="hr-ul">
                    <li v-for="item in itemList" :key="item.brandId">
                        <div class="hr-img">
                            <img :src="item.itemLogoUrl" alt="" />
                        </div>
                        <div class="hr-list">
                            {{item.itemTitle}}
                        </div>
                        <div class="price-list">
                            <div class="price">￥{{item.salePrice}}</div>
                            <div class="country">{{item.country}}</div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
import Vue from "vue";
// 引入并使用MintUI
import MintUI from "mint-ui";
Vue.use(MintUI);
import "mint-ui/lib/style.css";
//引入cube-ui
import Cube from 'cube-ui'
Vue.use(Cube)

export default {
    data(){
        return{
            lunbotu:[
                {
                    uid:"1",
                    url:"https://img.allpyra.com/37743001-6706-4501-9a9b-a91a9cf19f49.png"
                },
                {
                    uid:"2",
                    url:"https://img.allpyra.com/651c8a94-be72-456a-be59-ff2209703907.png"
                },
                {
                    uid:"3",
                    url:"https://img.allpyra.com/1a9c960b-c08a-4dac-a30b-5b2e31b8b242.png"
                },
                {
                    uid:"4",
                    url:"https://img.allpyra.com/4873914b-07f4-40ec-abfd-18a11de9abc9.png"
                },
                {
                    uid:"5",
                    url:"https://img.allpyra.com/803c5a1b-882f-4ed0-969b-37b42dccb085.png"
                },
                {
                    uid:"6",
                    url:"https://img.allpyra.com/d6d3c3a0-47ac-4d2a-9322-22e59b6363ec.png"
                },
                {
                    uid:"7",
                    url:"https://img.allpyra.com/f871d93b-f0eb-4486-a824-a0efc11647a3.png"
                },
                {
                    uid:"8",
                    url:"https://img.allpyra.com/53fe0fca-616c-4fe5-b20e-1dc82994baae.jpg"
                },
                {
                    uid:"9",
                    url:"https://img.allpyra.com/98df72e8-b567-462d-baff-f39c5ed55dfc.png"
                },
                {
                    uid:"10",
                    url:"https://img.allpyra.com/85be1afd-31f4-4aca-9a1b-cc8f1eb01895.jpg"
                }
            ],
            itemList:[],
            itemGd:[],
            plTitle:[
                {
                    pid:"1",
                    url:"https://img.allpyra.com/c7f3a217-23ad-4a28-8270-909c70a47297.png"
                }
            ],
            gdImg:[
                {
                    tid:"1",
                    url:"https://img.allpyra.com/cf28f7c7-b0fe-4516-8ee0-50f25b496e2b.png"
                }
            ]
        }
    },
    mounted:function(){
        this.getDate();
        this.getNews();
    },
    methods:{
        getDate:function () {  
            var self = this;
            this.$http.get("static/homeRemen.json").then(function(res){
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
        },
        getNews:function () {  
            var self = this;
            this.$http.get("static/homeimg/home-gd1.json").then(function(res){
                // console.log(res);
                for(var i = 0,len = res.body.data.list.length;i<len;i++){
                    var selNews = res.body.data.list[i];
                    console.log(selNews);
                    //将获取的数据push到空的数组中itenList
                    self.itemGd.push(selNews);
                }
            }).catch(function (error) {  
                console.log(error);
            })
        }
    }
}
</script>

<style>
.mint-header{
    height: 120px;
    width: 100%;
}
.mint-swipe{
    padding-top: 120px;
    height: 600px;
}
.mint-swipe-item{
    width: 100%;
    height: 100%;
}
.mint-swipe-item img{
    width: 100%;
    height: 100%;
}
.list-wrapper{
    height: 100%;
}
.pl-title>img{
    width: 100%;
}
.pl-img{
    width: 100%;
}
.gd-img{
    width: 460px;
    height: 460px;
}
.gd-h5{
    color: #cbcbcb;
    width: 460px;
    height: 40px;
    line-height: 40px;
    font-size: 20px;
    overflow: hidden;
    padding: 0 10px 0 10px;
    box-sizing: border-box;
    text-align: center;
}
.gd-p{
    padding: 10px 0;
    color: #e72714;
    font-size: 36px;
}
.list-item{
    padding-top: 26px;
    padding: 12px;
    box-sizing: border-box;
}
.horizontal-scroll-list-wrap{
    /* border: 1px solid rgba(0, 0, 0, 0.1); */
    border-radius: 5px
}
.cube-scroll-content{
    display: inline-block;
}
.list-wrapper{
    padding: 0 10px;
    line-height: 60px;
    white-space: nowrap;
}
.list-item{
    display: inline-block
}
.cube-scroll-content{
    background-color: #ffffff;
}
.hr-ul{
    width: 100%;
    height: 100%;
}
.hr-p{
    width: 100%;
    height: 90px;
    font-size: 30px;
    line-height: 90px;
    padding-left: 40px;
    box-sizing: border-box;
    border-bottom: 1px solid #eeeeee;
}
.hr-ul>li{
    width: 50%;
    height: 100%;
    border-bottom: 1px solid #eeeeee;
    border-right: 1px solid #eeeeee;
    float: left;
    /* padding: 10px; */
}
.hr-img{
    padding: 50px 50px;
}
.hr-img>img{
    width: 100%;
    height: 100%;
}
.hr-list{
    height: 80px;
    font-size: 36px;
    line-height: 42px;
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
    font-size: 42px;
}
.price-list .country{
    color: #666;
    font-size: 42px;
    text-align: right;
    position: absolute;
    bottom: 0px;
    right: 40px;
}
</style>
