<template>
  <div>
    <router-link to="/" slot="left">
      <mt-button icon="back">返回</mt-button>
    </router-link>
    <mt-search
      fixed 
      cancel-text="取消"
      placeholder="搜索">
    </mt-search>
  </div>
</template>

<script>
export default {
  
}
</script>

<style>
  .top-header{
    height: 50px;
    width: 100%;

  }
</style>
