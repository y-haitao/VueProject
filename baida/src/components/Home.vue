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
                <mt-swipe-item v-for="(item,index) in lunbotu" :key="index">
                    <img :src="item.url" alt="">
                </mt-swipe-item>
            </mt-swipe>
            <!-- 九宫格 -->
            <div class="jiu-top">
                <img class="bdimg" :src="bdimg" alt="">
            </div>
            <div class="jiu-bottom">
                <ul class="jiu-ul">
                    <li class="jiu-li" v-for="(ji,index) in jiuImg" :key="index">
                        <a href="javascript:;">
                            <img class="jiuImg" :src="ji.url" alt="">
                        </a>
                    </li>
                </ul>
            </div>
            <!-- ========== -->
            <div class="dt">
                <img class="dongtu" :src="dongtu" alt="">
            </div>
            <div class="hf">
                <img class="hefei" :src="hefei" alt="">
            </div>
            <div class="max-img">
                <div v-for="(maximg,index) in maxImg" :key="index">
                    <img class="maxImg" :src="maximg.url" alt="">
                </div>
            </div>
            <!-- =========== -->
            <!-- 限时秒杀 -->
            <div class="header-ms">
                <div class="ms-top">
                    <h2>限时秒杀</h2>
                </div>
                <cube-scroll
                    ref="scroll"
                    :data="itemGd"
                    direction="horizontal"
                    class="horizontal-scroll-list-wrap">
                    <ul class="list-wrapper">
                        <li class="list-item" v-for="(gd,index) in itemGd" :key="index">
                            <img class="gd-img" :src="gd.itemLogoUrl" alt="">
                            <h5 class="gd-h5">{{gd.itemTitle}}</h5>
                            <p class="gd-p">￥{{gd.salePrice}}</p>
                        </li>
                    </ul>
                </cube-scroll>
            </div>
            <!-- 每日必逛 -->
            <div class="header-bg">
                <div class="pl-title">
                    <img class="bg-title" :src="bgtitle" alt="">
                </div>
                <div class="bg-bottom">
                    <ul class="bg-ul">
                        <li class="bg-li" v-for="(bg,index) in bgimg" :key="index">
                            <a href="javascript:;">
                                <img class="bg-img" :src="bg.url" alt="">
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <!-- 品类聚焦 -->
            <div class="header-pl">
                <div class="pl-title">
                    <img :src="pltitel" alt="" />
                </div>
                <div class="pl"> 
                    <div class="pl-top">
                        <img class="pl-img" :src="gd1" alt="">
                    </div>
                    <div class="pl-bottom">
                        <cube-scroll
                            ref="scroll"
                            :data="itemGd"
                            direction="horizontal"
                            class="horizontal-scroll-list-wrap">
                            <ul class="list-wrapper">
                                <li class="list-item" v-for="(gd,index) in itemGd" :key="index">
                                    <img class="gd-img" :src="gd.itemLogoUrl" alt="">
                                    <h5 class="gd-h5">{{gd.itemTitle}}</h5>
                                    <p class="gd-p">￥{{gd.salePrice}}</p>
                                </li>
                            </ul>
                        </cube-scroll>
                    </div>
                    <div class="pl-top">
                        <img class="pl-img" :src="gd2" alt="">
                    </div>
                    <div class="pl-bottom">
                        <cube-scroll
                            ref="scroll"
                            :data="itemGd2"
                            direction="horizontal"
                            class="horizontal-scroll-list-wrap">
                            <ul class="list-wrapper">
                                <li class="list-item" v-for="(gd,index) in itemGd2" :key="index">
                                    <img class="gd-img" :src="gd.itemLogoUrl" alt="">
                                    <h5 class="gd-h5">{{gd.itemTitle}}</h5>
                                    <p class="gd-p">￥{{gd.salePrice}}</p>
                                </li>
                            </ul>
                        </cube-scroll>
                    </div>
                    <div class="pl-top">
                        <img class="pl-img" :src="gd3" alt="">
                    </div>
                    <div class="pl-bottom">
                        <cube-scroll
                            ref="scroll"
                            :data="itemGd3"
                            direction="horizontal"
                            class="horizontal-scroll-list-wrap">
                            <ul class="list-wrapper">
                                <li class="list-item" v-for="(gd,index) in itemGd3" :key="index">
                                    <img class="gd-img" :src="gd.itemLogoUrl" alt="">
                                    <h5 class="gd-h5">{{gd.itemTitle}}</h5>
                                    <p class="gd-p">￥{{gd.salePrice}}</p>
                                </li>
                            </ul>
                        </cube-scroll>
                    </div>
                    <div class="pl-top">
                        <img class="pl-img" :src="gd4" alt="">
                    </div>
                    <div class="pl-bottom">
                        <cube-scroll
                            ref="scroll"
                            :data="itemGd4"
                            direction="horizontal"
                            class="horizontal-scroll-list-wrap">
                            <ul class="list-wrapper">
                                <li class="list-item" v-for="(gd,index) in itemGd4" :key="index">
                                    <img class="gd-img" :src="gd.itemLogoUrl" alt="">
                                    <h5 class="gd-h5">{{gd.itemTitle}}</h5>
                                    <p class="gd-p">￥{{gd.salePrice}}</p>
                                </li>
                            </ul>
                        </cube-scroll>
                    </div>
                    <div class="pl-top">
                        <img class="pl-img" :src="gd5" alt="">
                    </div>
                    <div class="pl-bottom">
                        <cube-scroll
                            ref="scroll"
                            :data="itemGd5"
                            direction="horizontal"
                            class="horizontal-scroll-list-wrap">
                            <ul class="list-wrapper">
                                <li class="list-item" v-for="(gd,index) in itemGd5" :key="index">
                                    <img class="gd-img" :src="gd.itemLogoUrl" alt="">
                                    <h5 class="gd-h5">{{gd.itemTitle}}</h5>
                                    <p class="gd-p">￥{{gd.salePrice}}</p>
                                </li>
                            </ul>
                        </cube-scroll>
                    </div>
                    <div class="pl-top">
                        <img class="pl-img" :src="gd6" alt="">
                    </div>
                    <div class="pl-bottom">
                        <cube-scroll
                            ref="scroll"
                            :data="itemGd6"
                            direction="horizontal"
                            class="horizontal-scroll-list-wrap">
                            <ul class="list-wrapper">
                                <li class="list-item" v-for="(gd,index) in itemGd6" :key="index">
                                    <img class="gd-img" :src="gd.itemLogoUrl" alt="">
                                    <h5 class="gd-h5">{{gd.itemTitle}}</h5>
                                    <p class="gd-p">￥{{gd.salePrice}}</p>
                                </li>
                            </ul>
                        </cube-scroll>
                    </div>
                    <div class="pl-top">
                        <img class="pl-img" :src="gd7" alt="">
                    </div>
                    <div class="pl-bottom">
                        <cube-scroll
                            ref="scroll"
                            :data="itemGd7"
                            direction="horizontal"
                            class="horizontal-scroll-list-wrap">
                            <ul class="list-wrapper">
                                <li class="list-item" v-for="(gd,index) in itemGd7" :key="index">
                                    <img class="gd-img" :src="gd.itemLogoUrl" alt="">
                                    <h5 class="gd-h5">{{gd.itemTitle}}</h5>
                                    <p class="gd-p">￥{{gd.salePrice}}</p>
                                </li>
                            </ul>
                        </cube-scroll>
                    </div>
                    <div class="pl-top">
                        <img class="pl-img" :src="gd8" alt="">
                    </div>
                    <div class="pl-bottom">
                        <cube-scroll
                            ref="scroll"
                            :data="itemGd8"
                            direction="horizontal"
                            class="horizontal-scroll-list-wrap">
                            <ul class="list-wrapper">
                                <li class="list-item" v-for="(gd,index) in itemGd8" :key="index">
                                    <img class="gd-img" :src="gd.itemLogoUrl" alt="">
                                    <h5 class="gd-h5">{{gd.itemTitle}}</h5>
                                    <p class="gd-p">￥{{gd.salePrice}}</p>
                                </li>
                            </ul>
                        </cube-scroll>
                    </div>
                </div>
            </div>
            <!-- 热门商品 -->
            <div class="header-rm">
                <p class="hr-p">热门商品</p>
                <ul class="hr-ul">
                    <li v-for="(item,index) in itemList" :key="index">
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
//引入图片
import bdimg from '../assets/home/bdimg.png'
import dongtu from '../assets/home/dongtu.gif'
import hefei from '../assets/home/hefei.png'
import bgtitle from '../assets/home/bgtitle.png'
import pltitel from '../assets/home/pltitle.png'
import gd1 from '../assets/home/gd1.png'
import gd2 from '../assets/home/gd2.png'
import gd3 from '../assets/home/gd3.png'
import gd4 from '../assets/home/gd4.png'
import gd5 from '../assets/home/gd5.png'
import gd6 from '../assets/home/gd6.png'
import gd7 from '../assets/home/gd7.png'
import gd8 from '../assets/home/gd8.png'

export default {
    data(){
        return{
            lunbotu:[
                {
                    uid:"01",
                    url:"https://img.allpyra.com/37743001-6706-4501-9a9b-a91a9cf19f49.png"
                },
                {
                    uid:"02",
                    url:"https://img.allpyra.com/651c8a94-be72-456a-be59-ff2209703907.png"
                },
                {
                    uid:"03",
                    url:"https://img.allpyra.com/1a9c960b-c08a-4dac-a30b-5b2e31b8b242.png"
                },
                {
                    uid:"04",
                    url:"https://img.allpyra.com/4873914b-07f4-40ec-abfd-18a11de9abc9.png"
                },
                {
                    uid:"05",
                    url:"https://img.allpyra.com/803c5a1b-882f-4ed0-969b-37b42dccb085.png"
                },
                {
                    uid:"06",
                    url:"https://img.allpyra.com/d6d3c3a0-47ac-4d2a-9322-22e59b6363ec.png"
                },
                {
                    uid:"07",
                    url:"https://img.allpyra.com/f871d93b-f0eb-4486-a824-a0efc11647a3.png"
                },
                {
                    uid:"08",
                    url:"https://img.allpyra.com/53fe0fca-616c-4fe5-b20e-1dc82994baae.jpg"
                },
                {
                    uid:"09",
                    url:"https://img.allpyra.com/98df72e8-b567-462d-baff-f39c5ed55dfc.png"
                },
                {
                    uid:"010",
                    url:"https://img.allpyra.com/85be1afd-31f4-4aca-9a1b-cc8f1eb01895.jpg"
                }
            ],
            itemList:[],
            itemGd:[],
            itemGd2:[],
            itemGd3:[],
            itemGd4:[],
            itemGd5:[],
            itemGd6:[],
            itemGd7:[],
            itemGd8:[],
            bgtitle,
            pltitel:pltitel,
            gd1:gd1,
            gd2:gd2,
            gd3:gd3,
            gd4:gd4,
            gd5:gd5,
            gd6:gd6,
            gd7:gd7,
            gd8:gd8,
            bgimg:[
                {
                    url:"https://img.allpyra.com/12b0976f-66b3-470d-8bb3-54af1e33e7d1.png"
                },
                {
                    url:"https://img.allpyra.com/6006f0bf-f707-40a4-8f9f-61ba4cc8d488.png"
                },
                {
                    url:"https://img.allpyra.com/9acca8e6-c27c-45b4-b9d4-66e2ba1ca64f.png"
                },
                {
                    url:"https://img.allpyra.com/e33563e2-ad1f-4ce8-a1a5-72b9c67d9bd2.png"
                }
            ],
            maxImg:[
                {
                    url:"https://img.allpyra.com/4264e5a0-6536-4fb1-bd5b-5e6956f6ce9e.png"
                },
                {
                    url:"https://img.allpyra.com/ddd57868-5a8f-4779-a965-3cbf21e9b5a5.png"
                }
            ],
            hefei:hefei,
            dongtu:dongtu,
            bdimg:bdimg,
            jiuImg:[
                {
                    jid:"00",
                    url:"https://img.allpyra.com/099e6347-4581-418c-ae16-82b984ae719c.png"
                },
                {
                    jid:"01",
                    url:"https://img.allpyra.com/dd7a866a-f540-4335-8b03-1ff56a4469d6.png"
                },
                {
                    jid:"02",
                    url:"https://img.allpyra.com/8e6a523f-25af-4034-ab7d-d6ecdcc02e14.png"
                },
                {
                    jid:"03",
                    url:"https://img.allpyra.com/e6d36e5d-66cc-4df5-9be2-8ba5d5ee0b16.png"
                },
                {
                    jid:"04",
                    url:"https://img.allpyra.com/87ac0175-c6ed-4306-8318-953195bd5839.png"
                },
                {
                    jid:"05",
                    url:"https://img.allpyra.com/764a5f9d-82e0-429b-9a61-f26ccebd5965.png"
                },
                {
                    jid:"06",
                    url:"https://img.allpyra.com/ad373722-d83d-4c8c-89bc-81da66d7f691.png"
                },
                {
                    jid:"07",
                    url:"https://img.allpyra.com/c981b66a-9974-4074-9b13-0daf187266fd.png"
                },
                {
                    jid:"08",
                    url:"https://img.allpyra.com/15a2fb70-e149-4e9f-af9e-021c66228847.png"
                },
                {
                    jid:"09",
                    url:"https://img.allpyra.com/69c7feec-2f47-4017-801d-f0eebdfb1a8c.png"
                },
            ]
        }
    },
    mounted:function(){
        this.getDate();
        this.getNews();
        this.getNews2();
        this.getNews3();
        this.getNews4();
        this.getNews5();
        this.getNews6();
        this.getNews7();
        this.getNews8();
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
                    // console.log(selNews);
                    //将获取的数据push到空的数组中itenList
                    self.itemGd.push(selNews);
                }
            }).catch(function (error) {  
                console.log(error);
            })
        },
        getNews2:function () {  
            var self = this;
            this.$http.get("static/homeimg/home-gd2.json").then(function(res){
                // console.log(res);
                for(var i = 0,len = res.body.data.list.length;i<len;i++){
                    var selNews2 = res.body.data.list[i];
                    // console.log(selNews2);
                    //将获取的数据push到空的数组中itenList
                    self.itemGd2.push(selNews2);
                }
            }).catch(function (error) {  
                console.log(error);
            })
        },
        getNews3:function () {  
            var self = this;
            this.$http.get("static/homeimg/home-gd3.json").then(function(res){
                // console.log(res);
                for(var i = 0,len = res.body.data.list.length;i<len;i++){
                    var selNews3 = res.body.data.list[i];
                    // console.log(selNews3);
                    //将获取的数据push到空的数组中itenList
                    self.itemGd3.push(selNews3);
                }
            }).catch(function (error) {  
                console.log(error);
            })
        },
        getNews4:function () {  
            var self = this;
            this.$http.get("static/homeimg/home-gd4.json").then(function(res){
                // console.log(res);
                for(var i = 0,len = res.body.data.list.length;i<len;i++){
                    var selNews4 = res.body.data.list[i];
                    // console.log(selNews3);
                    //将获取的数据push到空的数组中itenList
                    self.itemGd4.push(selNews4);
                }
            }).catch(function (error) {  
                console.log(error);
            })
        },
        getNews5:function () {  
            var self = this;
            this.$http.get("static/homeimg/home-gd5.json").then(function(res){
                // console.log(res);
                for(var i = 0,len = res.body.data.list.length;i<len;i++){
                    var selNews5 = res.body.data.list[i];
                    // console.log(selNews3);
                    //将获取的数据push到空的数组中itenList
                    self.itemGd5.push(selNews5);
                }
            }).catch(function (error) {  
                console.log(error);
            })
        },
        getNews6:function () {  
            var self = this;
            this.$http.get("static/homeimg/home-gd6.json").then(function(res){
                // console.log(res);
                for(var i = 0,len = res.body.data.list.length;i<len;i++){
                    var selNews6 = res.body.data.list[i];
                    // console.log(selNews3);
                    //将获取的数据push到空的数组中itenList
                    self.itemGd6.push(selNews6);
                }
            }).catch(function (error) {  
                console.log(error);
            })
        },
        getNews7:function () {  
            var self = this;
            this.$http.get("static/homeimg/home-gd7.json").then(function(res){
                // console.log(res);
                for(var i = 0,len = res.body.data.list.length;i<len;i++){
                    var selNews7 = res.body.data.list[i];
                    // console.log(selNews3);
                    //将获取的数据push到空的数组中itenList
                    self.itemGd7.push(selNews7);
                }
            }).catch(function (error) {  
                console.log(error);
            })
        },
        getNews8:function () {  
            var self = this;
            this.$http.get("static/homeimg/home-gd8.json").then(function(res){
                // console.log(res);
                for(var i = 0,len = res.body.data.list.length;i<len;i++){
                    var selNews8 = res.body.data.list[i];
                    // console.log(selNews3);
                    //将获取的数据push到空的数组中itenList
                    self.itemGd8.push(selNews8);
                }
            }).catch(function (error) {  
                console.log(error);
            })
        },
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
.jiu-li{
    float: left;
    width: 20%;
    height: 20%;
}
.jiuImg{
    width: 100%;
    height: 100%;
}
.bdimg{
    width: 100%;
}
.dongtu{
    width: 100%;
}
.hefei{
    width: 100%;
}
.maxImg{
    float: left;
    width: 50%;
    height: 100%;
}
.pl-title>img{
    width: 100%;
}
.pl-img{
    width: 100%;
}
.bg-bottom .bg-li{
    float: left;
    width: 50%;
}
.bg-img{
    width: 100%;
    height: 100%;
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
    font-size: 40px;
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
    color: #000;
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
