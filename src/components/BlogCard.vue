<script setup>
defineProps({
    img: { type: String, required: true },
    smallTitle: { type: String, default: 'Card title' },
    description: { type: String, default: '' },
})
</script>

<template>
    <div class="col-12 col-sm-6 col-md-3 mb-2">
        <div class="card p-2 hover-scale">
            <img :src="img" class="card-img-top" :alt="smallTitle">
            <div class="card-body">
                <h5 class="card-title">{{ smallTitle }}</h5>
                <p class="card-text">{{ description }}</p>
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
</style>