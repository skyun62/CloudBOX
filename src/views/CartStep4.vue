<script setup>
import { ref, computed } from 'vue'
import CartProgress from '@/components/CartProgress.vue'
import CartSummary from '@/components/CartSummary.vue'

// 讀取購物車 & 訂單資訊
const cart = ref(JSON.parse(localStorage.getItem('cart')) || [])
const orderInfo = ref(JSON.parse(localStorage.getItem('orderInfo')) || {})
const receiver = computed(() => orderInfo.value.receiver || {})

// 確認完成後清空購物車（可依需求決定是否在這裡清）
// localStorage.removeItem('cart')
// localStorage.removeItem('orderInfo')
</script>

<template>
    <div class="container-fluid p-0 p-md-5 d-flex justify-content-center align-items-center cart-bg">
        <div class="box bg-white text-dark p-4 mx-auto w-100 d-flex flex-column gap-3">

            <!-- 進度條 -->
            <section>
                <span class="fw-bold fs-5" style="color: gray;">合作提案</span>
                <CartProgress :currentStep="4" />
            </section>

            <hr>

            <!-- 訂單成立 -->
            <section>
                <div class="row mb-3">
                    <div class="col d-flex justify-content-center">
                        <span class="fw-bold fs-4">訂單成立 🎉</span>
                    </div>
                </div>

                <span class="fw-bold fs-6 text-secondary">訂單明細</span>

                <div v-for="(item, index) in cart" :key="index"
                    class="row d-flex align-items-center py-2 border-bottom">
                    <div class="col-2">
                        <img :src="item.img" style="width: 80px; height: 80px; object-fit: cover;">
                    </div>
                    <div class="col-6">
                        <span class="fw-semibold">{{ item.smallTitle }}</span><br>
                        <small class="text-muted">{{ item.description }}</small>
                    </div>
                    <div class="col-2 text-end">x {{ item.quantity || 1 }}</div>
                    <div class="col-2 text-end">${{ item.price * (item.quantity || 1) }}</div>
                </div>
            </section>

            <hr>

            <!-- 寄送方式 -->
            <section>
                <span class="fw-bold fs-6 text-secondary">寄送資料</span>
                <ul class="mt-2 ps-0" style="list-style: none;">
                    <li>姓名：{{ receiver.name || '—' }}</li>
                    <li>電話：{{ receiver.phone || '—' }}</li>
                    <li>Email：{{ receiver.email || '—' }}</li>
                    <li>地址：{{ receiver.city }}{{ receiver.zipcode }} {{ receiver.address }}</li>
                </ul>
            </section>

            <hr>

            <!-- 金額摘要 -->
            <CartSummary :cart="cart" />

            <hr>

            <!-- 按鈕列 -->
            <section class="d-flex justify-content-between">
                <RouterLink to="/cart/step3" class="btn-cart-outline p-2">上一頁</RouterLink>
                <RouterLink to="/" class="btn-cart-fill p-2">返回首頁</RouterLink>
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
    text-decoration: none;
    display: inline-block;
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