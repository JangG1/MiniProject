<template>
<div class="main">
    <!-- 상단 메뉴바 -->
    <div class="nav">
        <ul class="search">
 
            <!-- 로고 -->
            <li>
                <router-link v-bind:to="'/'">
                
                        <router-link v-bind:to="'/'"> <img src="@/assets/logo.jpg" alt="logo" class="logo"></router-link>
                
                </router-link>
  
            <!-- 검색창 -->
        
                <div class="searchBar">
                    <input id="search"  v-model="postcode" type="text" v-on:keyup.enter="search()" style="font-size: 20px" placeholder="주소를 입력해주세요">
                    <button @click="search()">검색</button>
                </div>
            </li>

        </ul>
     
         <div v-for="(link, i) in rightMenuName" :key="i" class="rightMenu">
                <!-- 미로그인 상태에서의 로그인 버튼과 회원가입 버튼 -->
              
                <router-link v-if="i==0 && !getLogin" v-bind:to="link.link" class="pageLink">
                    <item>로그인</item>
                </router-link>
               
                <router-link v-else-if="i==1 && !getLogin" v-bind:to="link.link" class="pageLink">
                    <item>회원가입</item>
                </router-link>
             
                <!-- 로그인상태에서의 접속자의 아이디 표시와 누르면 마이페이지 이동 기능과 로그아웃 버튼 -->
                <router-link v-else-if="i==2 && getLogin" v-bind:to="link.link" class="pageLink">
                    <item>{{getLogin}}님</item>
                </router-link>
                <router-link v-else-if="i==3 && getLogin" v-bind:to="link.link" class="pageLink">
                    <item @click="Logout">로그아웃</item>
                </router-link>
            </div>


    </div>
    <hr>
    <div class="menu">
    </div>
    <hr class="lineNav">
    <!-- 메인 하위 컴포넌트 표시 구역 -->
    <router-view></router-view>
</div>
</template>

<script>
// @ is an alias to /src
import "@/css/common.css"
import axios from 'axios'
// 새로고침과 페이지 이동시 로그인 상태 확인 및 유지 기능
import {
    createNamespacedHelpers
} from 'vuex';
// 로그인 상태 관련 모듈
const loginStore = createNamespacedHelpers('loginStore');
export default {
    postcode:"",
    msg:"",
    name: 'Main',
    components: {},
    data() {
        return {
            rightMenuName: [{
                link: "/login",
                name: ''
            }, {
                link: "/signUp",
                name: ''
            },  {
                link: "/",
                name: ''
            }, ]
        }
    },
    computed: {
        // 로그인한 유저정보를 반환
        ...loginStore.mapGetters(['getLogin'])
    },
    methods: {
        // 검색 기능 신발만 가능
        search() {
            new window.daum.Postcode({
                oncomplete: (data) => {
                    if (this.extraAddress !== "") {
                        this.extraAddress = "";
                    }
                    if (data.userSelectedType === "R") {
                        // 사용자가 도로명 주소를 선택했을 경우
                        this.address = data.roadAddress;
                    } else {
                        // 사용자가 지번 주소를 선택했을 경우(J)
                        this.address = data.jibunAddress;
                    }

                    // 사용자가 선택한 주소가 도로명 타입일때 참고항목을 조합한다.
                    if (data.userSelectedType === "R") {
                        // 법정동명이 있을 경우 추가한다. (법정리는 제외)
                        // 법정동의 경우 마지막 문자가 "동/로/가"로 끝난다.
                        if (data.bname !== "" && /[동|로|가]$/g.test(data.bname)) {
                            this.extraAddress += data.bname;
                        }
                        // 건물명이 있고, 공동주택일 경우 추가한다.
                        if (data.buildingName !== "" && data.apartment === "Y") {
                            this.extraAddress +=
                                this.extraAddress !== "" ?
                                `, ${data.buildingName}` :
                                data.buildingName;
                        }
                        // 표시할 참고항목이 있을 경우, 괄호까지 추가한 최종 문자열을 만든다.
                        if (this.extraAddress !== "") {
                            this.extraAddress = `(${this.extraAddress})`;
                        }
                    } else {
                        this.extraAddress = "";
                    }
                    // 우편번호를 입력한다.
                    this.postcode = data.zonecode;
                },
            }).open();
        },   
        // 로그아웃 상태로 전환
        ...loginStore.mapMutations([
            'Logout'
        ]),
        getData() {
            axios.get("/api/main/all").then(res => this.msg = res.data)
        }
    },
    mounted() {
        this.getData();
    }
}
</script>

<style scoped>
.nav {
    display: flex;
    position: fixed;
    background-color: rgb(252, 70, 70);
    padding-top: 17px;
    width: 1525px;
    height: 100px;
    border-radius: 8px;
}

.logo{
    text-decoration: none;
    color: rgb(248, 248, 248);
    width: 80px;
    height: 80px;
    margin-left: 40px;
    border: solid 2px;
}

.search {
    padding: 0;
    margin: 0;
    
}

.search li {
    padding: 0 2px;
    margin: 0;
    margin-left: 50px;
    display: flex;
    align-items: center;
    
}

.searchBar {
    display: flex;
    
}

.searchBar input {
    margin-top: 2px;
    margin-left: 220px;
    padding-left: 15px;
    height: 48px;
    width: 550px;
    outline: 2.5px solid white;
    -webkit-appearance: none;
    border: none;
    font-size: 40px;
    border-radius: 4px 0 0 4px ;
    
}

.searchBar button {
    width: 90px;
    height: 54px;
    border-radius: 0 8px 8px 0;
    border-color: white;
}

.menu {
    display: flex;
    margin-top: 20px;
    padding-top: 30px;
    height: 30px;
    align-items: center;
    
}

.lineNav {
    margin-top: 30px;
    
}
.rightMenu{
    margin-top:30px;
}
.pageLink {
    text-decoration: none;
    font-size: 20px;
    color: rgb(248, 248, 248);
    margin-left: 120px;
}


</style>
