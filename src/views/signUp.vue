<template>
<div class="signUp">
    <div class="header">
        <div class="logo">
              <router-link v-bind:to="'/'"> <img src="@/assets/logo.jpg" alt="logo" style="width:65px; height:65px"></router-link>
        </div>
        <div class="sequence">
            <ul class="sequenceMenu">
                <li>1 회원선택</li>
                <li>2 약관동의</li>
                <li>3 정보입력</li>
                <li>4 가입완료</li>
            </ul>
        </div>
    </div>
    <hr>
    <!-- section --------------------------------------------- -->
    <div class="container">
        <div class="Box">
            <div class="imgBox">
                <img src="@/assets/signUp.jpg" class="banner">
                <router-link v-bind:to="'/join1'"> <button class="simpleSignUpBtn">간편 회원가입 </button></router-link>
            </div>
        </div>
    </div>
    <div class="clear"></div>
</div>
</template>

<script>
export default {

}
</script>

<style scoped>
.logo{
    margin-top: 25px;
    margin-bottom: 10px;
}
li{
    font-size: 17px;
    font-weight: 1000;
}
hr{
    width: 1400px;
    border: solid 1px rgb(134, 130, 130);
}
.signUp {
 background-color: #fafafa;
 padding-bottom: 100px;
}
.banner{
    border-radius: 8px;
    width: 1300px;
    height: 550px;
}
.header {
    display: flex;

}

.header * {
    margin-left: auto;
    margin-right: auto;
}

.header>.sequence {
    width: 50%;
    position: relative;
    padding-top: 0;
    padding-bottom: 0;
}

.sequenceMenu {
    position: absolute;
    left: 47%;
    top: 75%;
    transform: translate(-50%, -50%);
    display: flex;
    list-style: none;
    margin-left: 200px;
}

.sequenceMenu li {
    width: 100px;
}


.imgBox {
    display: block;
    text-align: center;
    padding-top: 100px;
}

.simpleSignUpBtn {
    position: absolute;
    left: 50%;
    top: 55%;
    transform: translate(-50%, -50%);
    background-color: rgb(252, 70, 70);
    border: 1px solid;
    border-color: white;
}



</style>