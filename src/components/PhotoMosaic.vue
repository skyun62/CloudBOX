<script setup>
defineProps({
    images: {
        type: Array,
        default: () => [
            'https://dummyimage.com/500x300/000/00fffb',
            'https://dummyimage.com/500x300/000/00fffb',
            'https://dummyimage.com/600x360/000/00fffb',
            'https://dummyimage.com/600x360/000/00fffb',
            'https://dummyimage.com/500x300/000/00fffb',
            'https://dummyimage.com/500x300/000/00fffb',
        ]
    }
})
</script>

<template>
    <!-- 左欄：上方兩張小圖 + 下方一張大圖 -->
    <!-- 右欄：上方一張大圖 + 下方兩張小圖 -->
    <div class="row">
        <div class="col-12 col-md-6">
            <div class="row">
                <div class="col p-1">
                    <img class="w-100" :src="images[0]" alt="">
                </div>
                <div class="col p-1">
                    <img class="w-100" :src="images[1]" alt="">
                </div>
            </div>
            <div class="row">
                <div class="col p-1">
                    <img class="w-100" :src="images[2]" alt="">
                </div>
            </div>
        </div>
        <div class="col-12 col-md-6">
            <div class="row">
                <div class="col p-1">
                    <img class="w-100" :src="images[3]" alt="">
                </div>
            </div>
            <div class="row">
                <div class="col p-1">
                    <img class="w-100" :src="images[4]" alt="">
                </div>
                <div class="col p-1">
                    <img class="w-100" :src="images[5]" alt="">
                </div>
            </div>
        </div>
    </div>
</template>