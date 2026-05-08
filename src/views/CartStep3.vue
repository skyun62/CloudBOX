<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import CartProgress from '@/components/CartProgress.vue'
import CartSummary from '@/components/CartSummary.vue'

const router = useRouter()

const cart = ref(JSON.parse(localStorage.getItem('cart')) || [])

// 寄送資料表單
const form = ref({
    name: '',
    phone: '',
    email: '',
    city: '',
    zipcode: '',
    address: '',
})

function goNext() {
    // 將寄送資料存入 localStorage，供第 4 步顯示
    const orderInfo = JSON.parse(localStorage.getItem('orderInfo')) || {}
    orderInfo.receiver = { ...form.value }
    localStorage.setItem('orderInfo', JSON.stringify(orderInfo))
    router.push('/cart/step4')
}
</script>

<template>
    <div class="container-fluid p-0 p-md-5 d-flex justify-content-center align-items-center cart-bg">
        <div class="box bg-white text-dark p-4 mx-auto w-100 d-flex flex-column gap-3">

            <!-- 進度條 -->
            <section>
                <span class="fw-bold fs-5">合作提案</span>
                <CartProgress :currentStep="3" />
            </section>

            <hr>

            <!-- 寄送資料 -->
            <section>
                <span class="fw-bold fs-5">寄送資料</span>

                <div class="mb-3 mt-3">
                    <label class="form-label">姓名</label>
                    <input type="text" class="form-control" placeholder="姓名" v-model="form.name">
                </div>
                <div class="mb-3">
                    <label class="form-label">電話</label>
                    <input type="tel" class="form-control" placeholder="電話" v-model="form.phone">
                </div>
                <div class="mb-3">
                    <label class="form-label">Email</label>
                    <input type="email" class="form-control" placeholder="Email" v-model="form.email">
                </div>
                <div class="mb-3">
                    <label class="form-label">地址</label>
                    <div class="row g-2">
                        <div class="col-6">
                            <input type="text" class="form-control" placeholder="城市" v-model="form.city">
                        </div>
                        <div class="col-6">
                            <input type="text" class="form-control" placeholder="郵遞區號" v-model="form.zipcode">
                        </div>
                        <div class="col-12">
                            <input type="text" class="form-control" placeholder="地址" v-model="form.address">
                        </div>
                    </div>
                </div>
            </section>

            <hr>

            <!-- 金額摘要 -->
            <CartSummary :cart="cart" />

            <hr>

            <!-- 按鈕列 -->
            <section class="d-flex justify-content-between">
                <RouterLink to="/cart/step2" class="btn-cart-outline p-2">上一頁</RouterLink>
                <button class="btn-cart-fill p-2" @click="goNext">前往付款</button>
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
    padding: 8px 16px;
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