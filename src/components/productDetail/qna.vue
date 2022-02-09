<template>
<!-- 판매자와의 QNA -->

<div class="qna">
    <div class="qnaTitle">
        <h2 style="display: inline-block">상품 문의</h2>
        <span style="margin-left: 86%"><button style="padding: 10px 20px" @click="addOpen">문의하기</button></span>
    </div>
    <div class="questionAdd" v-if="question">
        <table style="border-collapse: collapse;">
            <tr style="text-align: center">
                <th style="width:81px">질문 내용</th>
                <td style="width: 015px"><input type="text" style="width: 50px" id="questionInput"></td>
                <td style="width: 151px">
                    <button style="padding: 5px 10px" @click="addQuestion">문의하기</button></td>
            </tr>
        </table>
    </div>
    <div class="qnaMain">
        <tr>
            <div>
                <th style="width: 81px">번호</th>
                <th style="width: 151px">상태</th>
                <th style="width: 651px">제목</th>
                <th style="width: 171px">문의자</th>
                <th style="width: 151px">등록일</th>
            </div>
        </tr>

        <tr v-for="qna in qnas" :key="qna.number">
            <div>
                <!-- 클릭 시 드롭다운 방식 -->
                <collapse :selected="false">
                    <div slot="collapse-header">
                        <td style="width: 80px">
                            <span v-html="qna.qnano"></span>
                        </td>
                        <td style="width: 150px">
                            <span v-html="qna.state"></span>
                        </td>
                        <td style="width: 650px; text-align: left">
                            <span v-html="qna.title"></span>
                        </td>
                        <td style="width: 170px">
                            <span v-html="qna.nickname"></span>
                        </td>
                        <td style="width: 150px">
                            <span v-html="qna.regdate"></span>
                        </td>
                    </div>
                    <div slot="collapse-body" style="text-align: left">
                        <div style="width: 1200px"><span v-html="qna.answer"></span></div>
                    </div>
                </collapse>
            </div>
        </tr>
    </div>
</div>
</template>

<script>
import axios from 'axios'
import Collapse from "@/components/productDetail/Collapse.vue";
export default {
    components: {
        Collapse: Collapse,
    },
    data() {
        return {
            qnas: "",
            question: false,
        };
    },
    methods: {
        getQna() {
            const id = this.$route.params.id;
            axios.get(`/api/qna/qna/${id}`).then(res => {
                this.qnas = res.data;
            })
        },
        addOpen() {
            this.question = true;
        },
       addQuestion() {
            let que = document.getElementById('questionInput').value;
            const id = this.$route.params.id;
            axios({
                method: 'post',
                url: `/api/qna/qna/${id}`,
                params: {
                    title: que,
                    nickname: "nickname"
                }
            })
            this.question = false;
            this.$router.go();
        }
    },
    mounted() {
        this.getQna();
    },
};
</script>

<style scoped>
.qnaMain {
    width: 1600px;
    text-align: center;
    border-collapse: collapse;
}

td,
th {
    padding: 10px;
    border: 1px solid rgb(197, 195, 195);
    border-radius: 4px;
}

body {
    padding: 1rem;
}

.thTemp {
    margin: 0 0;
}

.questionAdd {
    height: auto;
    margin-bottom: 20px;
}
</style>
