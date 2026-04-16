<script setup>
const props = defineProps({
    img: { type: String, required: true },
    smallTitle: { type: String, default: 'Card title' },
    description: { type: String, default: '' },
    price: { type: Number, default: 0 },
    index: { type: Number, default: 0 },
})
 
const emit = defineEmits(['add'])
 
function addToCart() {
    // 寫入 localStorage（與原始邏輯相同）
    let cart = JSON.parse(localStorage.getItem('cart')) || []
    cart.push({
        img: props.img,
        smallTitle: props.smallTitle,
        description: props.description,
        price: props.price,
    })
    localStorage.setItem('cart', JSON.stringify(cart))
 
    // 通知父層
    emit('add', { index: props.index })
    alert('已加入購物車')
}
</script>
 
<template>
    <div class="col-12 col-sm-6 col-md-3 mt-5 mb-2">
        <div class="card p-2 hover-scale">
            <img :src="img" class="card-img-top" :alt="smallTitle">
            <div class="card-body">
                <h5 class="card-title">{{ smallTitle }}</h5>
                <p class="card-text">{{ description }}</p>
                <p class="card-text price">$ {{ price }}</p>
                <button class="shopping-btn" type="button" @click="addToCart">
                    Add to cart <i class="bi bi-bag-plus-fill"></i>
                </button>
            </div>
        </div>
    </div>
</template>
 
<style scoped>
.hover-scale {
    transition: transform 0.3s;
}
.hover-scale:hover {
    transform: scale(1.05);
}
.price {
    font-weight: 500;
    color: #ba9393;
}
.shopping-btn {
    background: none;
    border: 1px solid #ba9393;
    color: #ba9393;
    padding: 6px 14px;
    border-radius: 6px;
    cursor: pointer;
    transition: background 0.2s, color 0.2s;
}
.shopping-btn:hover {
    background: #ba9393;
    color: #fff;
}
</style>