<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import CartProgress from '@/components/CartProgress.vue'
import CartSummary from '@/components/CartSummary.vue'

const router = useRouter()

const cart = ref(JSON.parse(localStorage.getItem('cart')) || [])

// 付款 & 運送選項
const payMethod = ref('')
const deliveryMethod = ref('')

function goNext() {
    // 將選擇存入 localStorage，供後續步驟使用
    const orderInfo = JSON.parse(localStorage.getItem('orderInfo')) || {}
    orderInfo.payMethod = payMethod.value
    orderInfo.deliveryMethod = deliveryMethod.value
    localStorage.setItem('orderInfo', JSON.stringify(orderInfo))
    router.push('/cart/step3')
}
</script>

<template>
    <div class="container-fluid p-0 p-md-5 d-flex justify-content-center align-items-center cart-bg">
        <div class="box bg-white text-dark p-4 mx-auto w-100 d-flex flex-column gap-3">

            <!-- 進度條 -->
            <section>
                <span class="fw-bold fs-5">合作提案</span>
                <CartProgress :currentStep="2" />
            </section>

            <hr>

            <!-- 付款方式 -->
            <section>
                <span class="fw-bold fs-5">付款方式</span>
                <div class="mt-2">
                    <div class="form-check ms-3 py-1 border-bottom">
                        <input class="form-check-input" type="radio" name="pay" id="pay1" value="home"
                            v-model="payMethod">
                        <label class="form-check-label" for="pay1">宅配到府</label>
                    </div>
                    <div class="form-check ms-3 py-1 border-bottom">
                        <input class="form-check-input" type="radio" name="pay" id="pay2" value="store"
                            v-model="payMethod">
                        <label class="form-check-label" for="pay2">超商取貨</label>
                    </div>
                    <div class="form-check ms-3 py-1">
                        <input class="form-check-input" type="radio" name="pay" id="pay3" value="pickup"
                            v-model="payMethod">
                        <label class="form-check-label" for="pay3">現場自取</label>
                    </div>
                </div>
            </section>

            <hr>

            <!-- 運送方式 -->
            <section>
                <span class="fw-bold fs-5">運送方式</span>
                <div class="mt-2">
                    <div class="form-check ms-3 py-1 border-bottom">
                        <input class="form-check-input" type="radio" name="delivery" id="del1" value="blackcat"
                            v-model="deliveryMethod">
                        <label class="form-check-label" for="del1">黑貓宅配</label>
                    </div>
                    <div class="form-check ms-3 py-1">
                        <input class="form-check-input" type="radio" name="delivery" id="del2" value="convenience"
                            v-model="deliveryMethod">
                        <label class="form-check-label" for="del2">超商店到店</label>
                    </div>
                </div>
            </section>

            <hr>

            <!-- 金額摘要 -->
            <CartSummary :cart="cart" />

            <hr>

            <!-- 按鈕列 -->
            <section class="d-flex justify-content-between">
                <RouterLink to="/cart/step1" class="btn-cart-outline p-2">上一頁</RouterLink>
                <button class="btn-cart-fill p-2" @click="goNext">下一頁</button>
            </section>

        </div>
    </div>
</template>

<style scoped>
.cart-bg {
    background-color: #3a8fb7;
    min-height: 100vh;
}

.box {
    max-width: 860px;
}

.btn-cart-fill {
    background-color: #3a8fb7;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
}

.btn-cart-fill:hover {
    background-color: #2f7da0;
}

.btn-cart-outline {
    border: 1px solid #3a8fb7;
    color: #3a8fb7;
    border-radius: 4px;
    text-decoration: none;
    display: inline-block;
}

.btn-cart-outline:hover {
    background-color: #eaf4fb;
}
</style>