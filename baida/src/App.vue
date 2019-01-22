<template>
  <!-- app 是我们项目的根组件 -->
  <div id="app">
    <!-- 上方切换的 router 部分 -->
    <router-view/>
    <!-- 下方固定的部分 -->
      <mt-tabbar v-model="selected" fixed>
        <mt-tab-item
          :id="tab.name"
          v-for="tab in tabs"
          :key="tab.name"
          @click.native="goto(tab.path)"
        >
          <i :class="['iconfont',tab.icon]"></i><br/>
          {{tab.text}}
        </mt-tab-item>
      </mt-tabbar>
    <!-- </div> -->
  </div>
</template>
<script>
import Vue from "vue";

// 引入并使用MintUI
import MintUI from "mint-ui";
Vue.use(MintUI);
import "mint-ui/lib/style.css";

//引入 axios
import axios  from "axios";
// 把axios写入Vue的原型对象，方便后面调用
Vue.prototype.$axios = axios;

export default {
  name: "App",
  data() {
    return {
      tabs: [
        {
          text: "首页",
          icon: "icon-home",
          path: "/home",
          name: "Home"
        },
        {
          text: "分类",
          icon: "icon-list",
          path: "/classify",
          name: "Classify"
        },
        {
          text: "购物车",
          icon: "icon-cartfill",
          path: "/cart",
          name: "Cart"
        },
        {
          text: "我的",
          icon: "icon-people",
          path: "/mine",
          name: "Mine"
        }
      ],
      selected: "Home"
    };
  },
  methods:{
        goto(path){
            // 编程式导航：利用js实现路由跳转
            // 通过this.$router获取到路由实例对象
            this.$router.push({path});
        }
  }
};
</script>

<style>
/* 引入公共样式 */
@import '../src/css/base.css';
#app{
  background-color: #f4f4f4;
}
.mint-tabbar {
  background: #fff;
  width: 100%;
  border-top: 1px solid #e5e5e5;
  height: 170px;
}
.iconfont {
  position: relative;
  bottom: 5px;
}
.mint-tabbar > .mint-tab-item.is-selected{
  color: #e72714;
}
.mint-tab-item-label {
  /* text-align: center; */
  font-size: 40px;
  /* color: #cccccc; */
  background-size: 10px 10px;
  padding: 20px 0 10px;
  /* position: relative; */
}
</style>
