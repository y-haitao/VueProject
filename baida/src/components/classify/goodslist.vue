<template>
  <div class="goodslist">
    <!-- 左边的区域 -->
    <ul class="tabs">
        <li @click="tabIndex=0" id="1">
            <a href="javascript:;">
                母婴儿童
            </a>    
        </li>
        <li @click="tabIndex=1" id="2">
            <a href="javascript:;">
                美容彩妆
            </a>    
        </li>
        <li @click="tabIndex=2" id="3">
            <a href="javascript:;">
                环球美食
            </a>    
        </li>
        <li @click="tabIndex=3" id="4">
            <a href="javascript:;">
                营养保健
            </a>    
        </li>
        <li @click="tabIndex=4" id="5">
            <a href="javascript:;">
                营养保健
            </a>    
        </li>
        <li @click="tabIndex=5" id="6">
            <a href="javascript:;">
                家居个护
            </a>    
        </li>
        <li @click="tabIndex=6" id="7">
            <a href="javascript:;">
                3C数码
            </a>    
        </li>
        <li @click="tabIndex=7" id="8">
            <a href="javascript:;">
                礼品配饰
            </a>    
        </li>
        <li @click="tabIndex=8" id="9">
            <a href="javascript:;">
                鞋服箱包
            </a>    
        </li>
        <li @click="tabIndex=9" id="10">
            <a href="javascript:;">
                百大电器
            </a>    
        </li>
        <li @click="tabIndex=9" id="10">
            <a href="javascript:;">
                百大优选
            </a>    
        </li>
    </ul>
    <!-- 右边区域 -->
    <div class="tab-con">
      <div v-if="tabIndex==0">
        <span>0</span>
      </div>
      <div v-if="tabIndex==1">
        <span>1</span>
      </div>
      <div v-if="tabIndex==2">
        <span>1</span>
      </div>
      <div v-if="tabIndex==3">
        <span>1</span>
      </div>
      <div v-if="tabIndex==4">
        <span>1</span>
      </div>
      <div v-if="tabIndex==5">
        <span>1</span>
      </div>
      <div v-if="tabIndex==6">
        <span>1</span>
      </div>
      <div v-if="tabIndex==7">
        <span>1</span>
      </div>
      <div v-if="tabIndex==8">
        <span>1</span>
      </div>
      <div v-if="tabIndex==9">
        <span>1</span>
      </div>
      <div v-if="tabIndex==9">
        <span>1</span>
      </div>
    </div>
  </div>
</template>

<script>
// //引入 cube-ui
// import Vue from 'vue'
// import Cube from 'cube-ui'
// Vue.use(Cube)

export default {
  data() {
    return {
      tabIndex: 0
    };
  }
};
</script>

<style>
</style>
