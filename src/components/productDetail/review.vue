<template>
<div class="review">
    <div class="reviewTitle">
        <h2>상품평</h2>
    </div>
    <div class="reviewMain">
        <table class="reviewTable">
            <tr v-for="(review, idx) in reviews" :key="idx">
                <td style="width: 10%">
                    <img :src="
                                require(`../../../../src/main/resources/images/product/${review.productno}/review/${idx+1}/${review.image}`)
                            " style="width:100px; height: 100px" />
                </td>
                <td style="text-align: left">
                    <span v-html="review.content"></span>
                </td>
                <td style="width: 10%"><span v-html="review.nickname"></span></td>
            </tr>
        </table>
    </div>
</div>
</template>

<script>
import axios from 'axios'
export default {
    data() {
        return {
            reviews: "",
        };
    },
    methods: {
        getReview() {
            const id = this.$route.params.id;
            axios.get(`/api/review/review/${id}`).then(res => this.reviews = res.data);
        }
    },
    mounted() {
        this.getReview();
    }
};
</script>

<style scoped>
.reviewMain {
    width: 100%;
}

.reviewTable {
    width: 100%;
    text-align: center;
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
</style>