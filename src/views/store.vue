<template>
<div class="form">
    <div class="cate">
        <label>울트라콜</label>
        <div>
            <div class="row1">
                <button class="store">
                    <span v-for='(idx) in limitLength' :key="idx">
                        <router-link v-bind:to="'/'">
                            <img :src="setImage(1)" alt="storeLogo" class="logo">
                            <hr>
                        </router-link>
                        {{store1.store}}<br>
                        <span class="score">{{store1.score}}</span> | 리뷰 {{store1.review1}} | 사장님댓글 {{store1.review2}} <br>
                        배달조건 | {{AddComma(store1.delivery)}}원 이상 배달
                    </span>
                </button>

                <button class="store2">
                    <span v-for='(idx) in limitLength' :key="idx">
                        <router-link v-bind:to="'/'">
                            <img :src="setImage(2)" alt="storeLogo" class="logo">
                            <hr>
                        </router-link>
                        {{store2.store}}<br>
                        <span class="score">{{store2.score}}</span> | 리뷰 {{store2.review1}} | 사장님댓글 {{store2.review2}} <br>
                        배달조건 | {{AddComma(store2.delivery)}}원 이상 배달
                    </span>
                </button>
            </div>
        </div>
    </div>
    <br>
    <div class="cate">
        <label>기본순</label>
        <div>
            <div class="row">
                <button class="store">
                    <span v-for='(idx) in limitLength' :key="idx">
                        <router-link v-bind:to="'/'">
                            <img :src="setImage(3)" alt="storeLogo" class="logo">
                            <hr>
                        </router-link>
                        {{store3.store}}<br>
                        <span class="score">{{store3.score}}</span> | 리뷰 {{store3.review1}} | 사장님댓글 {{store3.review2}} <br>
                        배달조건 | {{AddComma(store3.delivery)}}원 이상 배달
                    </span>
                </button>
                <button class="store2">
                    <span v-for='(idx) in limitLength' :key="idx">
                        <router-link v-bind:to="'/'">
                            <img :src="setImage(4)" alt="storeLogo" class="logo">
                            <hr>
                        </router-link>
                        {{store4.store}}<br>
                        <span class="score">{{store4.score}}</span> | 리뷰 {{store4.review1}} | 사장님댓글 {{store4.review2}} <br>
                        배달조건 | {{AddComma(store4.delivery)}}원 이상 배달
                    </span>
                </button>
            </div>
            <div class="row">
                <button class="store">
                    <span v-for='(idx) in limitLength' :key="idx">
                        <router-link v-bind:to="'/'">
                            <img :src="setImage(5)" alt="storeLogo" class="logo">
                            <hr>
                        </router-link>
                        {{store5.store}}<br>
                        <span class="score">{{store5.score}}</span> | 리뷰 {{store5.review1}} | 사장님댓글 {{store5.review2}} <br>
                        배달조건 | {{AddComma(store5.delivery)}}원 이상 배달
                    </span>
                </button>
                <button class="store2">
                    <span v-for='(idx) in limitLength' :key="idx">
                        <router-link v-bind:to="'/'">
                            <img :src="setImage(6)" alt="storeLogo" class="logo">
                            <hr>
                        </router-link>
                        {{store6.store}}<br>
                        <span class="score">{{store6.score}}</span> | 리뷰 {{store6.review1}} | 사장님댓글 {{store6.review2}} <br>
                        배달조건 | {{AddComma(store6.delivery)}}원 이상 배달
                    </span>
                </button>
            </div>
            <div class="row">
                <button class="store">
                    <span v-for='(idx) in limitLength' :key="idx">
                        <router-link v-bind:to="'/'">
                            <img :src="setImage(7)" alt="storeLogo" class="logo">
                            <hr>
                        </router-link>
                        {{store7.store}}<br>
                        <span class="score">{{store7.score}}</span> | 리뷰 {{store7.review1}} | 사장님댓글 {{store7.review2}} <br>
                        배달조건 | {{AddComma(store7.delivery)}}원 이상 배달
                    </span>
                </button>
                <button class="store2">
                    <span v-for='(idx) in limitLength' :key="idx">
                        <router-link v-bind:to="'/'">
                            <img :src="setImage(8)" alt="storeLogo" class="logo">
                            <hr>
                        </router-link>
                        {{store8.store}}<br>
                        <span class="score">{{store8.score}}</span> | 리뷰 {{store8.review1}} | 사장님댓글 {{store8.review2}} <br>
                        배달조건 | {{AddComma(store8.delivery)}}원 이상 배달
                    </span>
                </button>
            </div>
            <div class="row">
                <button class="store">
                    <span v-for='(idx) in limitLength' :key="idx">
                        <router-link v-bind:to="'/'">
                            <img :src="setImage(9)" alt="storeLogo" class="logo">
                            <hr>
                        </router-link>
                        {{store9.store}}<br>
                        <span class="score">{{store9.score}}</span> | 리뷰 {{store9.review1}} | 사장님댓글 {{store9.review2}} <br>
                        배달조건 | {{AddComma(store9.delivery)}}원 이상 배달
                    </span>
                </button>
                <button class="store2">
                    <span v-for='(idx) in limitLength' :key="idx">
                        <router-link v-bind:to="'/'">
                            <img :src="setImage(10)" alt="storeLogo" class="logo">
                            <hr>
                        </router-link>
                        {{store10.store}}<br>
                        <span class="score">{{store10.score}}</span> | 리뷰 {{store10.review1}} | 사장님댓글 {{store10.review2}} <br>
                        배달조건 | {{AddComma(store10.delivery)}}원 이상 배달
                    </span>
                </button>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import axios from 'axios'
export default {
    data: function () {
        return {
            store1: "",
            store2: "",
            store3: "",
            store4: "",
            store5: "",
            store6: "",
            store7: "",
            store8: "",
            store9: "",
            store10: "",
            limitLength: 0,
            imageLength: 0,
            images: []
        };
    },
    methods: {
        setImage(idx) {
            try {
                return require(`@/components/store/${this.images[idx-1].image}`)
            } catch {
                return require(`@/components/store/error.png`)
            }
        },
        async getImagesData() {
            await axios.get("/api/category/all").then(res => {
                this.data = res.data;
                this.data.forEach(element => {
                    let temp = {
                        image: element.image,
                        link: '/category/' + element.id,
                    }
                    this.images.push(temp);
                });
                this.imageLength = this.images.length;
                if (this.imageLength > 1)
                    this.limitLength = 1;
                else
                    this.limitLength = this.imageLength;
            })
        },
        getData1() {
            axios.get('api/store/1')
                .then((response) => {
                    this.store1 = response.data
                })
        },
        getData2() {
            axios.get('api/store/2')
                .then((response) => {
                    this.store2 = response.data
                })
        },
        getData3() {
            axios.get('api/store/3')
                .then((response) => {
                    this.store3 = response.data
                })
        },
        getData4() {
            axios.get('api/store/4')
                .then((response) => {
                    this.store4 = response.data
                })
        },
        getData5() {
            axios.get('api/store/5')
                .then((response) => {
                    this.store5 = response.data
                })
        },
        getData6() {
            axios.get('api/store/6')
                .then((response) => {
                    this.store6 = response.data
                })
        },
        getData7() {
            axios.get('api/store/7')
                .then((response) => {
                    this.store7 = response.data
                })
        },
        getData8() {
            axios.get('api/store/8')
                .then((response) => {
                    this.store8 = response.data
                })
        },
        getData9() {
            axios.get('api/store/9')
                .then((response) => {
                    this.store9 = response.data
                })
        },
        getData10() {
            axios.get('api/store/10')
                .then((response) => {
                    this.store10 = response.data
                })
        },
        AddComma(num) {
            var regexp = /\B(?=(\d{3})+(?!\d))/g;
            return num.toString().replace(regexp, ",");
        },

    },

    created() {
        this.getData1();
        this.getData2();
        this.getData3();
        this.getData4();
        this.getData5();
        this.getData6();
        this.getData7();
        this.getData8();
        this.getData9();
        this.getData10();       
        this.getImagesData();
    },

};
</script>

<style scoped>
.form {
    background-color: rgb(248, 248, 248);
    padding-bottom: 70px;
}

label {
    font-size: 24px;
    color: rgb(111, 116, 116);
}

.logo {
    width: 100px;
    height: 100px;

}

.cate {
    padding-top: 20px;
    margin-left: 150px;
}

.store {
    background-color: white;
    border-radius: 4px;
    border: 2px solid rgb(100, 94, 94);
    text-decoration: none;
    font-size: 16px;
    cursor: pointer;
    color: black;
    width: 540px;
    height: 230px;
}

.store2 {
    margin-left: 120px;
    background-color: white;
    border-radius: 4px;
    border: 2px solid rgb(100, 94, 94);
    text-decoration: none;
    font-size: 16px;
    cursor: pointer;
    color: black;
    width: 540px;
    height: 230px;
    margin-top: 20px
}

.score {
    color: rgb(243, 162, 10);
}
</style>
