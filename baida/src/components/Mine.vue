<template>
    <div class="mine" :style="bg">
        <img src="../../static/mine/login_bg.png" style="width:auto;height:100%;">
        <div class="content">
            <div class="con-input">
                <img class="shouji" :src="shouji" alt="">
                <input class="tel" type="tel" placeholder="手机号或已绑定的百大会员卡号">
            </div>
            <div class="con-input">
                <img class="mima" :src="mima" alt="">
                <input class="psw" type="password" placeholder="登录密码">
                <!-- <span>
                    <img class="yan" :src="yan" alt="">
                </span> -->
            </div>
            <!-- <div>
                <div class="fast">手机快速注册</div>
                <div class="forget">忘记密码？</div>
            </div>
            <div class="login">
                登陆
            </div>
            <footer>
                <div>
                    <div class="disanfang">第三方登陆</div>
                </div>
                <div>
                    <img class="other" src="" alt="">
                </div>
            </footer> -->
        </div>
    </div>
</template>

<script>
//引入图片
import shouji from '../../static/mine/shouji.png'
import mima from '../../static/mine/mima.png'

export default {
    data(){
        return{
            bg:{
                backgroundImage: "url(" + require("../../static/mine/login_bg.png") + ")",
                backgroundRepeat: "no-repeat",
                backgroundSize: "10rem 17.786667rem",
            },
            shouji:shouji,
            mima:mima,
           
        }
    }
}
</script>

<style>
.mine{
    width: 100vh;
    height: 100vh;
    padding-bottom: 170px;
    position: relative;
}
.content{
    position: absolute;
    top:100px;
    /* padding: 400px 60px 0 60px; */
    box-sizing: border-box;
    /* text-align: center; */
    height: 100%;
    width: 100%;
    overflow-y: auto;
    padding: 3rem 1rem 0;
}
.con-input{
    width: 8rem;
    padding-bottom: .213333rem;
    margin-top: .8rem;
    border-bottom: 1px solid #e5e5e5;
    font-size: 50px;
    color: #999;
    background: transparent;
}
.shouji{
    padding-right: 20px; 
    width: .5rem;
    /* height: .6rem; */
}
.tel{
    background: transparent;  
    color: #999; 
}
.mima{
    padding-right: 20px; 
    width: .5rem;
}
.psw{
    background: transparent;    
}

</style>
