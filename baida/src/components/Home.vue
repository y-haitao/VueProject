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
        </div>
    </div>
</template>

<script>
import Vue from "vue";
// 引入并使用MintUI
import MintUI from "mint-ui";
Vue.use(MintUI);
import "mint-ui/lib/style.css";

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
            ]
        }
    },
    methods:{
        getLunbotu(){
            
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
</style>
