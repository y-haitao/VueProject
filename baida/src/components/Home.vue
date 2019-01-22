<template>
    <div>
        <div class="header">
            <mt-header fixed>
                <router-link to="/m" slot="left">
                    <mt-button icon="back">返回</mt-button>
                </router-link>
                    <mt-button icon="more" slot="right"></mt-button>
            </mt-header>
        </div>
        
    </div>
</template>

<script>
export default {
  
}
</script>

<style>
    .mint-header{
      height: 120px;
      width: 100%;

    }
</style>
