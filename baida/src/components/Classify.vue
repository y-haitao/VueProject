<template>
    <div class="classify">
        <div class="search">
            <mt-search 
            cancel-text="取消"
            placeholder="搜索类别，品牌，关键字">
            </mt-search>
        </div>
        <div class="tabCon">
            <mt-navbar v-model="selected">
                <mt-tab-item id="1">分类</mt-tab-item>
                <mt-tab-item id="2">品牌</mt-tab-item>
            </mt-navbar>
            <!-- tab-container -->
            <mt-tab-container v-model="selected">
                <mt-tab-container-item id="1">
                    <goodslist />
                    <!-- <mt-cell v-for="n in 10" :title="'内容 ' + n" /> -->
                </mt-tab-container-item>
                <mt-tab-container-item id="2">
                    <brand />
                    <!-- <mt-cell v-for="n in 4" :title="'测试 ' + n" /> -->
                </mt-tab-container-item>
            </mt-tab-container>
        </div>
    </div>
</template>

<script>
    //引入 goodslist brand 模块
    import goodslist from './classify/goodslist.vue';
    import brand from './classify/brand.vue';

    export default {
        data(){
            return {
                selected:"id",
            }
        },
        components:{
            goodslist,
            brand
        }
    }
</script>

<style>
.classify{
    height: 100%;
    padding-bottom: 170px;
}
.search{
    width: 100%;
    height: 214px;
}
.search .mint-searchbar{
    background: #fff;
    padding: 0.4rem;
    position: relative;
    border-bottom: 2px solid #f4f4f4;
}
.search .mint-searchbar-inner{
    width: 100%;
    height: .906667rem;
    background: #f4f4f4;
    padding: 0 .266667rem;
    border-radius: .026667rem;
}
.mint-searchbar-inner .mintui-search {
    font-size: 60px;
    color: #000000;
}
.mint-searchbar-core{
    font-size: 40px;
    width: 100%;
    background: transparent;
    border: 0;
    padding: 10px;
    color: #000;
    outline: none;
    padding-left: 50px;
}
.mint-searchbar-cancel{
    height: 0;
    width: 0;
    font-size: 0;
}
.mint-searchbar{
    height: 200px;
    width: 100%;
    padding: 20px;
}
.search .mint-searchbar-inner{
    height: 110px;
}
.mint-navbar{
    height: 130px;
}
.mint-tab-item-label{
    font-size: 40px;
    height: 60px;
}
.mint-navbar .mint-tab-item.is-selected {
    margin-bottom: 0;
    border-bottom: 5px solid #e72714;
    color: #e72714;
}
</style>
