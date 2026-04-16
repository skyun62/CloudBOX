<script setup>
defineProps({
    title: {
        type: String,
        default: 'HeadingHeading'
    },
    text: {
        type: String,
        default: 'Some representative placeholder content for the first slide.'
    },
    img: {
        type: String,
        default: 'https://dummyimage.com/500x500/000/fff'
    },
    // reverse: true → 圖在左、文在右（原始 HTML 第二組）
    reverse: {
        type: Boolean,
        default: false
    }
})
</script>

<template>
    <section class="row py-5">
        <!-- 文字欄 -->
        <div class="col-12 col-md-7 d-flex align-content-center flex-wrap" :class="{ 'order-md-2': reverse }">
            <h2 class="display-4 fw-bold">{{ title }}</h2>
            <p>{{ text }}</p>
        </div>

        <!-- 圖片欄 -->
        <div class="col-12 col-md-5" :class="reverse ? 'order-md-1 order-5' : ''">
            <img class="w-100" :src="img" :alt="title">
        </div>
    </section>
    <hr>
</template>