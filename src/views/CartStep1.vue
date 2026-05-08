<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import CartProgress from '@/components/CartProgress.vue'
import CartSummary from '@/components/CartSummary.vue'

const router = useRouter()

// 從 localStorage 讀取購物車
const cart = ref(JSON.parse(localStorage.getItem('cart')) || [])

// 確保每筆都有 quantity
cart.value.forEach(item => {
    if (!item.quantity) item.quantity = 1
})

function saveCart() {
    localStorage.setItem('cart', JSON.stringify(cart.value))
}

function increase(index) {
    cart.value[index].quantity++
    saveCart()
}

function decrease(index) {
    if (cart.value[index].quantity > 1) {
        cart.value[index].quantity--
        saveCart()
    }
}

function remove(index) {
    cart.value.splice(index, 1)
    saveCart()
}

function clearCart() {
    localStorage.removeItem('cart')
    cart.value = []
}

function goNext() {
    router.push('/cart/step2')
}
</script>

<template>
    <div class="container-fluid p-0 p-md-5 d-flex justify-content-center align-items-center cart-bg">
        <div class="box bg-white text-dark p-4 mx-auto w-100 d-flex flex-column gap-3">

            <!-- 標題 + 進度條 -->
            <section>
                <span class="fw-bold fs-5">合作提案</span>
                <CartProgress :currentStep="1" />
            </section>

            <hr>

            <!-- 合作明細 -->
            <section>
                <div class="d-flex justify-content-between align-items-center mb-3">
                    <span class="fw-bold fs-5">合作明細</span>
                    <button class="btn btn-danger btn-sm" @click="clearCart">清空訂單</button>
                </div>

                <p v-if="cart.length === 0" class="text-center text-muted">訂單是空的</p>

                <div v-for="(item, index) in cart" :key="index" class="row align-items-center mb-3 border-bottom pb-3">
                    <div class="col-2">
                        <img :src="item.img" class="img-fluid" style="max-width: 80px;">
                    </div>
                    <div class="col-4">
                        <h6 class="mb-1">{{ item.smallTitle }}</h6>
                        <small class="text-muted">{{ item.description }}</small>
                    </div>
                    <div class="col-3">
                        <div class="input-group" style="max-width: 130px;">
                            <button class="btn btn-outline-secondary" @click="decrease(index)">-</button>
                            <input type="text" class="form-control text-center" :value="item.quantity" readonly>
                            <button class="btn btn-outline-secondary" @click="increase(index)">+</button>
                        </div>
                    </div>
                    <div class="col-2 text-end">${{ item.price * item.quantity }}</div>
                    <div class="col-1 text-end">
                        <button class="btn btn-sm btn-outline-danger" @click="remove(index)">×</button>
                    </div>
                </div>
            </section>

            <!-- 金額摘要 -->
            <CartSummary :cart="cart" />

            <hr>

            <!-- 按鈕列 -->
            <section class="d-flex justify-content-between">
                <RouterLink to="/" class="btn-cart-outline p-2">返回首頁</RouterLink>
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
    text-decoration: none;
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