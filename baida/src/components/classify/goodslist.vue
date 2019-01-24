<template>
  <div class="goodslist">
    <!-- 左边的区域 -->
    <ul class="tabs">
        <li @click="tabIndex=0" id="1">
            <a :class="{ active: tabIndex==0 }" href="javascript:;">
                母婴儿童
            </a>    
        </li>
        <li @click="tabIndex=1" id="2">
            <a :class="{ active: tabIndex==1 }" href="javascript:;">
                美容彩妆
            </a>    
        </li>
        <li @click="tabIndex=2" id="3">
            <a :class="{ active: tabIndex==2 }" href="javascript:;">
                环球美食
            </a>    
        </li>
        <li @click="tabIndex=3" id="4">
            <a :class="{ active: tabIndex==3 }" href="javascript:;">
                营养保健
            </a>    
        </li>
        <li @click="tabIndex=4" id="5">
            <a :class="{ active: tabIndex==4 }" href="javascript:;">
                家居个护
            </a>    
        </li>
        <li @click="tabIndex=5" id="6">
            <a :class="{ active: tabIndex==5 }" href="javascript:;">
                3C数码
            </a>    
        </li>
        <li @click="tabIndex=6" id="7">
            <a :class="{ active: tabIndex==6 }" href="javascript:;">
                礼品配饰
            </a>    
        </li>
        <li @click="tabIndex=7" id="8">
            <a :class="{ active: tabIndex==7 }" href="javascript:;">
                鞋服箱包
            </a>    
        </li>
        <li @click="tabIndex=8" id="9">
            <a :class="{ active: tabIndex==8 }" href="javascript:;">
                百大电器
            </a>    
        </li>
        <li @click="tabIndex=9" id="10">
            <a :class="{ active: tabIndex==9 }" href="javascript:;">
                百大优选
            </a>    
        </li>
    </ul>
    <!-- 右边区域 -->
    <div class="tab-con">
      <div v-if="tabIndex==0">
          <ul>
              <li class="tab-li" v-for="(item,index) in tab1" :key="index">
                  <img class="tab-img" :src="item.logourl" alt="">
                  <div class="tab-p">{{item.categName}}</div>
              </li>
          </ul>
      </div>
      <div v-if="tabIndex==1">
          <ul>
              <li class="tab-li" v-for="(item,index) in tab2" :key="index">
                  <img class="tab-img" :src="item.logourl" alt="">
                  <div class="tab-p">{{item.categName}}</div>
              </li>
          </ul>
      </div>
      <div v-if="tabIndex==2">
          <ul>
              <li class="tab-li" v-for="(item,index) in tab3" :key="index">
                  <img class="tab-img" :src="item.logourl" alt="">
                  <div class="tab-p">{{item.categName}}</div>
              </li>
          </ul>
      </div>
      <div v-if="tabIndex==3">
          <ul>
              <li class="tab-li" v-for="(item,index) in tab4" :key="index">
                  <img class="tab-img" :src="item.logourl" alt="">
                  <div class="tab-p">{{item.categName}}</div>
              </li>
          </ul>
      </div>
      <div v-if="tabIndex==4">
          <ul>
              <li class="tab-li" v-for="(item,index) in tab5" :key="index">
                  <img class="tab-img" :src="item.logourl" alt="">
                  <div class="tab-p">{{item.categName}}</div>
              </li>
          </ul>
      </div>
      <div v-if="tabIndex==5">
          <ul>
              <li class="tab-li" v-for="(item,index) in tab6" :key="index">
                  <img class="tab-img" :src="item.logourl" alt="">
                  <div class="tab-p">{{item.categName}}</div>
              </li>
          </ul>
      </div>
      <div v-if="tabIndex==6">
          <ul>
              <li class="tab-li" v-for="(item,index) in tab7" :key="index">
                  <img class="tab-img" :src="item.logourl" alt="">
                  <div class="tab-p">{{item.categName}}</div>
              </li>
          </ul>
      </div>
      <div v-if="tabIndex==7">
          <ul>
              <li class="tab-li" v-for="(item,index) in tab8" :key="index">
                  <img class="tab-img" :src="item.logourl" alt="">
                  <div class="tab-p">{{item.categName}}</div>
              </li>
          </ul>
      </div>
      <div v-if="tabIndex==8">
          <ul>
              <li class="tab-li" v-for="(item,index) in tab9" :key="index">
                  <img class="tab-img" :src="item.logourl" alt="">
                  <div class="tab-p">{{item.categName}}</div>
              </li>
          </ul>
      </div>
      <div v-if="tabIndex==9">
          <ul>
              <li class="tab-li" v-for="(item,index) in tab10" :key="index">
                  <img class="tab-img" :src="item.logourl" alt="">
                  <div class="tab-p">{{item.categName}}</div>
              </li>
          </ul>
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
      tabIndex: 0,
      tab1:[],
      tab2:[],
      tab3:[],
      tab4:[],
      tab5:[],
      tab6:[],
      tab7:[],
      tab8:[],
      tab9:[],
      tab10:[]
    };
  },
  mounted:function(){
      this.getTab1();
      this.getTab2();
      this.getTab3();
      this.getTab4();
      this.getTab5();
      this.getTab6();
      this.getTab7();
      this.getTab8();
      this.getTab9();
      this.getTab10();
  },
  methods:{
    getTab1:function () {  
        var self = this;
        this.$http.get("static/goodslist/tab1.json").then(function(res){
            for(var i = 0,len = res.body.data.length;i<len;i++){
                var selDate = res.body.data[i];
                // console.log(selDate);
                //将获取的数据push到空的数组中itenList
                self.tab1.push(selDate);
            }
        }).catch(function (error) {  
            console.log(error);
        })
    },
    getTab2:function () {  
        var self = this;
        this.$http.get("static/goodslist/tab2.json").then(function(res){
            for(var i = 0,len = res.body.data.length;i<len;i++){
                var selDate = res.body.data[i];
                // console.log(selDate);
                //将获取的数据push到空的数组中itenList
                self.tab2.push(selDate);
            }
        }).catch(function (error) {  
            console.log(error);
        })
    },
    getTab3:function () {  
        var self = this;
        this.$http.get("static/goodslist/tab3.json").then(function(res){
            for(var i = 0,len = res.body.data.length;i<len;i++){
                var selDate = res.body.data[i];
                // console.log(selDate);
                //将获取的数据push到空的数组中itenList
                self.tab3.push(selDate);
            }
        }).catch(function (error) {  
            console.log(error);
        })
    },
    getTab4:function () {  
        var self = this;
        this.$http.get("static/goodslist/tab4.json").then(function(res){
            for(var i = 0,len = res.body.data.length;i<len;i++){
                var selDate = res.body.data[i];
                // console.log(selDate);
                //将获取的数据push到空的数组中itenList
                self.tab4.push(selDate);
            }
        }).catch(function (error) {  
            console.log(error);
        })
    },
    getTab5:function () {  
        var self = this;
        this.$http.get("static/goodslist/tab5.json").then(function(res){
            for(var i = 0,len = res.body.data.length;i<len;i++){
                var selDate = res.body.data[i];
                // console.log(selDate);
                //将获取的数据push到空的数组中itenList
                self.tab5.push(selDate);
            }
        }).catch(function (error) {  
            console.log(error);
        })
    },
    getTab6:function () {  
        var self = this;
        this.$http.get("static/goodslist/tab6.json").then(function(res){
            for(var i = 0,len = res.body.data.length;i<len;i++){
                var selDate = res.body.data[i];
                // console.log(selDate);
                //将获取的数据push到空的数组中itenList
                self.tab6.push(selDate);
            }
        }).catch(function (error) {  
            console.log(error);
        })
    },
    getTab7:function () {  
        var self = this;
        this.$http.get("static/goodslist/tab7.json").then(function(res){
            for(var i = 0,len = res.body.data.length;i<len;i++){
                var selDate = res.body.data[i];
                // console.log(selDate);
                //将获取的数据push到空的数组中itenList
                self.tab7.push(selDate);
            }
        }).catch(function (error) {  
            console.log(error);
        })
    },
    getTab8:function () {  
        var self = this;
        this.$http.get("static/goodslist/tab8.json").then(function(res){
            for(var i = 0,len = res.body.data.length;i<len;i++){
                var selDate = res.body.data[i];
                // console.log(selDate);
                //将获取的数据push到空的数组中itenList
                self.tab8.push(selDate);
            }
        }).catch(function (error) {  
            console.log(error);
        })
    },
    getTab9:function () {  
        var self = this;
        this.$http.get("static/goodslist/tab9.json").then(function(res){
            for(var i = 0,len = res.body.data.length;i<len;i++){
                var selDate = res.body.data[i];
                // console.log(selDate);
                //将获取的数据push到空的数组中itenList
                self.tab9.push(selDate);
            }
        }).catch(function (error) {  
            console.log(error);
        })
    },
    getTab10:function () {  
        var self = this;
        this.$http.get("static/goodslist/tab10.json").then(function(res){
            for(var i = 0,len = res.body.data.length;i<len;i++){
                var selDate = res.body.data[i];
                // console.log(selDate);
                //将获取的数据push到空的数组中itenList
                self.tab10.push(selDate);
            }
        }).catch(function (error) {  
            console.log(error);
        })
    }
  }
};
</script>

<style>
.goodslist{
    float: left;
}
.tabs{
    float: left;
    width: 2.0rem;
    text-align: center;
    margin: 0;
    padding: 0;
    background-color: #f4f4f4;
    font-size: 0.5rem;
    position: relative;
    left: 0;
}
.tabs>li{
    position: relative;
    list-style: none;
    width: 1.866667rem;
    line-height: 1.733333rem;
    font-size: .373333rem;
}
.tab-con{
    float: left;
    width: 8.0rem;
    height: 100vh;
    background: #fff;
    padding: .4rem .4rem .266667rem;
    position: relative;
    right: 0;
    top: 0
}
.active{
    color: red;
    border-bottom: 1px solid #f00;
}
.tab-li{
    width: 2.4rem;
    list-style: none;
    text-align: center;
    display: inline-block;
    font-size: .32rem;
    color: #999;
    margin-bottom: .72rem;
}
.tab-img{
    width: 1.32rem;
    height: 1.32rem;
    margin-bottom: .32rem;
}
</style>
