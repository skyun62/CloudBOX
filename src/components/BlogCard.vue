<script setup>
defineProps({
    id: { type: Number, required: true },
    img: { type: String, required: true },
    smallTitle: { type: String, default: 'Card title' },
    description: { type: String, default: '' },
})
</script>

<template>
    <div class="col-12 col-sm-6 col-md-3 mb-2">
        <div class="card p-2 hover-scale">
            <img :src="img" class="card-img-top" :alt="smallTitle" style="height: 220px; object-fit: cover;">
            <div class="card-body">
                <h5 class="card-title">{{ smallTitle }}</h5>
                <p class="card-text">{{ description }}</p>
                <router-link :to="`/blog/${id}`" class="btn" style="background-color: #ba9393; color: white;">
                    read more
                </router-link>
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