<script setup>
//Skeleton Screen
import SkeletonScreen from '@/components/SkeletonScreen.vue';

//角色role
import Role from '@/components/Role.vue';
import glasser_japan from '@/assets/img/glasser_japan.jpg'
import glasser_taiwan from '@/assets/img/glasser_taiwan.jpg'
import glasser_geme from '@/assets/img/glasser_geme.png'

// 拍立得
import { onMounted } from 'vue'
import Swiper from 'swiper'
import 'swiper/css'
import LikeButton from '@/components/LikeButton.vue';

//購物卡片
import ShoppingCard from '@/components/ShoppingCard.vue'
import c_5 from '@/assets/img/c_5.jpg'
import c_6 from '@/assets/img/c_6.jpg'
import c_7 from '@/assets/img/c_7.jpg'
import c_8 from '@/assets/img/c_8.jpg'
//圖中有圖
import PhotoMosaic from '@/components/PhotoMosaic.vue'

//圖文區塊(三大區)
import TextImageBlock from '@/components/TextImageBlock.vue'
import glass_candy from '@/assets/img/glass_candy.png'
import glass_fish from '@/assets/img/glass_fish.png'
import glass_black from '@/assets/img/glass_black.png'
import MapContact from '@/components/MapContact.vue'
//blog卡片
import BlogCard from '@/components/BlogCard.vue'
import c_1 from '@/assets/img/c_1.jpg'
import c_2 from '@/assets/img/c_2.jpg'
import c_3 from '@/assets/img/c_3.jpg'
import c_4 from '@/assets/img/c_4.jpg'
//頁籤
import { ref } from 'vue'
import TabMenu from '@/components/TabMenu.vue'

// 電影片單
//import Movie from '@/components/Movie.vue';
onMounted(() => {
    new Swiper('.mySwiper', {
        slidesPerView: 1,
        spaceBetween: 50,
    })
    if (window.instgrm) {
        window.instgrm.Embeds.process()
    }
})

const shoppingCards = [
    { img: c_5, smallTitle: '合作提案A', description: 'This is a UI concept project. No actual purchase is available.', price: "電洽" },
    { img: c_6, smallTitle: '合作提案B', description: 'This is a UI concept project. No actual purchase is available.', price: "電洽" },
    { img: c_7, smallTitle: '合作提案C', description: 'This is a UI concept project. No actual purchase is available.', price: "電洽" },
    { img: c_8, smallTitle: '合作提案D', description: 'This is a UI concept project. No actual purchase is available.', price: "電洽" },
]

const blogCards = [
    { id: 1, img: c_1, smallTitle: 'Card title', description: 'Some quick example text to build on the card title.' },
    { id: 2, img: c_2, smallTitle: 'Card title', description: 'Some quick example text to build on the card title.' },
    { id: 3, img: c_3, smallTitle: 'Card title', description: 'Some quick example text to build on the card title.' },
    { id: 4, img: c_4, smallTitle: 'Card title', description: 'Some quick example text to build on the card title.' },
]

const tabs = ['NEWS', 'HOT', '推薦']
const currentTab = ref('NEWS')
</script>

<template>
    <header class="mb-5">
        <div id="carouselExampleCaptions" class="carousel slide">
            <div class="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active"
                    aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1"
                    aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2"
                    aria-label="Slide 3"></button>
            </div>
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <!-- <video class="d-block w-100" style="max-height: 80vh; object-fit: cover;" autoplay muted loop
                        playsinline>
                        <source src="../assets/video/video_2.mp4" type="video/mp4">
                    </video> -->
                    <img src="../assets/img/c_5.jpg" class="d-block w-100" alt="..." style="max-height: 80vh;">
                    <div class="text-start carousel-caption d-none d-md-block">
                        <h2 class="display-1" style="font-weight: bold;">雲端裡的潘朵拉</h2>
                        <p>一個裝滿了驚喜、細節與「不妥協」的盒子。</p>
                    </div>
                </div>



                <div class="carousel-item">
                    <img src="../assets/img/b_222.jpg" class="d-block w-100" alt="..." style="max-height: 80vh;">
                    <div class="text-center carousel-caption d-none d-md-block">
                        <h2 class="display-1" style="font-weight: bold;">一種瀕臨失傳的技藝</h2>
                        <p>一塊泥土，或一根纖維的前世今生</p>
                    </div>
                </div>
                <div class="carousel-item">
                    <img src="../assets/img/b_333.jpg" class="d-block w-100" alt="..." style="max-height: 80vh;">
                    <div class="text-end carousel-caption d-none d-md-block">
                        <h2 class="display-1" style="font-weight: bold;">火光點燃的瞬間</h2>
                        <p>也是我們想留住的時刻</p>
                    </div>
                </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions"
                data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions"
                data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
        </div>
    </header>

    <main class="container py-3">
        <!-- 角色標題 -->
        <section class="row d-flex justify-content-center justify-content-center text-center p-4">
            <span class="fs-2">雲端裡的潘朵拉</span>
            <p>只是一個純粹因為喜歡而凝視的人，然後把這份欣賞，分享給同樣想看見美的你。</p>
            <div class="bg-secondary" style="width: 100px; height: 3px;"></div>
        </section>
        <!-- 角色 -->
        <section>
            <div class="container">
                <div class="row col-12 col-lg p-5">
                    <Role>
                        <template #avatar>
                            <img :src="glasser_geme" class="rounded-circle mx-auto mb-3 d-block"
                                style="width: 150px; height: 150px; object-fit: cover;" />
                        </template>
                        <template #title>Marten Herma Anderson</template>
                        <template #content>
                            粗獷的原始材料中加入鮮豔、溫暖的色彩，讓作品在冷靜的結構中帶有玩味與感性
                        </template>
                        <template #action>
                            <router-link to="/craftsman/1" class="btn btn-secondary" style="background-color: #ba9393; color: white;"">
                                read more
                            </router-link>
                        </template>
                    </Role>
                    <Role>
                        <template #avatar>
                            <img :src="glasser_japan" class="rounded-circle mx-auto mb-3 d-block"
                                style="width: 150px; height: 150px; object-fit: cover;" />
                        </template>
                        <template #title>いとう みわ<br>(伊藤美和)</template>
                        <template #content>
                            專注於讓日常器皿具備藝術裝飾性，平衡了實用功能與詩意的美學
                        </template>
                        <template #action>
                            <router-link to="/craftsman/2" class="btn btn-secondary" style="background-color: #ba9393; color: white;"">
                                read more
                            </router-link>
                        </template>
                    </Role>
                    <Role>
                        <template #avatar>
                            <img :src="glasser_taiwan" class="rounded-circle mx-auto mb-3 d-block"
                                style="width: 150px; height: 150px; object-fit: cover;" />
                        </template>
                        <template #title>陳建志<br>(Chien Chih Chen)</template>
                        <template #content>
                            台灣玻璃工藝者，從工業設計走向傳統玲瓏窯，將日常記憶凝結成晶瑩的工藝詩篇。
                        </template>
                        <template #action>
                            <router-link to="/craftsman/3" class="btn btn-secondary" style="background-color: #ba9393; color: white;"">
                                read more
                            </router-link>
                        </template>
                    </Role>
                </div>
            </div>
        </section>
        <!-- 表格標題 -->
        <section class="row d-flex justify-content-center justify-content-center text-center p-5">
            <span class="fs-2">每一件工藝品，也許都是某個人一生的偏執</span>
            <p>感受那種「用心」的瞬間，那一刻，便是分享的起點。</p>
            <div class="bg-secondary" style="width: 100px; height: 3px;"></div>
        </section>

        <!-- 圖文區塊 -->
        <section class="row py-5 align-items-center">
            <div class="col-12 col-md-5 d-flex justify-content-center">
                <img :src="glass_candy" alt="Marten Herma Anderson 作品" class="w-100" style="object-fit: cover;" />
            </div>
            <div class="col-12 col-md-7 d-flex flex-column justify-content-center">
                <h2 class="display-4 fw-bold">Marten Herma Anderson</h2>
                <p class="mt-3">粗獷的原始材料中加入鮮豔、溫暖的色彩，讓作品在冷靜的結構中帶有玩味與感性。</p>
                <a href="https://www.instagram.com/mrtn.ndrsn/" target="_blank" class="mt-3 d-inline-block text-muted"
                    style="font-size: 13px; letter-spacing: 0.1em;">
                    @mrtn.ndrsn ↗
                </a>
            </div>
        </section>
        <hr>
        <section class="row py-5 align-items-center">
            <div class="col-12 col-md-7 d-flex flex-column justify-content-center">
                <h2 class="display-4 fw-bold">いとう みわ(伊藤美和)</h2>
                <p class="mt-3">專注於讓日常器皿具備藝術裝飾性，平衡了實用功能與詩意的美學。</p>
                <a href="https://www.instagram.com/miwaito.official/" target="_blank"
                    class="mt-3 d-inline-block text-muted" style="font-size: 13px; letter-spacing: 0.1em;">
                    @miwaito.official ↗
                </a>
            </div>
            <div class="col-12 col-md-5 d-flex justify-content-center">
                <img :src="glass_fish" alt="Marten Herma Anderson 作品" class="w-100" style="object-fit: cover;" />
            </div>
        </section>
        <hr>
        <section class="row py-5 align-items-center">
            <!-- 左：IG embed -->
            <div class="col-12 col-md-5 d-flex justify-content-center">
                <img :src="glass_black" alt="Marten Herma Anderson 作品" class="w-100" style="object-fit: cover;" />
            </div>
            <!-- 右：文字 -->
            <div class="col-12 col-md-7 d-flex flex-column justify-content-center">
                <h2 class="display-4 fw-bold">陳建志(Chien Chih Chen)</h2>
                <p class="mt-3">台灣玻璃工藝者，從工業設計走向傳統玲瓏窯，將日常記憶凝結成晶瑩的工藝詩篇。</p>
                <a href="https://www.instagram.com/ccc.117/" target="_blank" class="mt-3 d-inline-block text-muted"
                    style="font-size: 13px; letter-spacing: 0.1em;">
                    @ccc.117 ↗
                </a>
            </div>
        </section>
        <!-- 圖中有圖的標題 -->
        <section>
            <div class="row p-5">
                <div class="col-12 col-md-4">
                    <span class="fs-4">作品是生命的縮影</span>
                    <div class="bg-secondary m-2" style="width: 100px; height: 3px;"></div>
                </div>
                <div class="col-12 col-md-8 d-flex align-items-center">
                    <span>曾經有個朋友跟我說過一段我很喜歡的話，他說：「買一個人的產品就像是買了他的故事、奮鬥，是因為有這些經歷他才可以做出這個東西、然後賣給你。」</span>
                </div>
            </div>
        </section>

        <!-- 圖中有圖 -->
        <section>
            <PhotoMosaic />
        </section>
        <section class="mt-5" style="overflow: hidden;">
            <div class="row p-5">
                <div class="col-12 col-md-4">
                    <span class="fs-4">一輩子專心做一件事的工藝家</span>
                </div>
                <div class="col-12 col-md-8 d-flex align-items-center">
                    <span>擇所愛，讓靈感在舒適中自由流動。</span>
                </div>
            </div>

            <div class="swiper mySwiper">
                <div class="swiper-wrapper">

                    <!-- 第一頁 -->
                    <div class="swiper-slide">
                        <div class="polaroid">
                            <div class="filter">
                                <div class="photo">
                                    <img src="https://picsum.photos/400/500?1" alt="">
                                </div>
                            </div>
                            <LikeButton class="like-btn" @update="getNum" />
                            <div class="caption">nice day</div>
                        </div>
                        <div class="polaroid">
                            <div class="filter">
                                <div class="photo">
                                    <img src="https://picsum.photos/400/500?2" alt="">
                                </div>
                            </div>
                            <LikeButton class="like-btn" />
                            <div class="caption">(❁´◡`❁)</div>
                        </div>
                        <div class="polaroid">
                            <div class="filter">
                                <div class="photo">
                                    <img src="https://picsum.photos/400/500?3" alt="">
                                </div>
                            </div>
                            <LikeButton class="like-btn" />
                            <div class="caption">happyyyy✨</div>
                        </div>
                    </div>

                    <!-- 第二頁 -->
                    <div class="swiper-slide">
                        <div class="polaroid">
                            <div class="filter">
                                <div class="photo">
                                    <img src="https://picsum.photos/400/500?4" alt="">
                                </div>
                            </div>
                            <LikeButton class="like-btn" />
                            <div class="caption">At the café</div>
                        </div>
                        <div class="polaroid">
                            <div class="filter">
                                <div class="photo">
                                    <img src="https://picsum.photos/400/500?5" alt="">
                                </div>
                            </div>
                            <LikeButton class="like-btn" />
                            <div class="caption">with friend</div>
                        </div>
                    </div>

                    <!-- 第三頁 -->
                    <div class="swiper-slide">
                        <div class="polaroid">
                            <div class="filter">
                                <div class="photo">
                                    <img src="https://picsum.photos/400/500?6" alt="">
                                </div>
                            </div>
                            <LikeButton class="like-btn" />
                            <div class="caption">lovely</div>
                        </div>
                        <div class="polaroid">
                            <div class="filter">
                                <div class="photo">
                                    <img src="https://picsum.photos/400/500?7" alt="">
                                </div>
                            </div>
                            <LikeButton class="like-btn" />
                            <div class="caption">have fun</div>
                        </div>
                    </div>

                    <!-- 第四頁 -->
                    <div class="swiper-slide">
                        <div class="polaroid">
                            <div class="filter">
                                <div class="photo">
                                    <img src="https://picsum.photos/400/500?8" alt="">
                                </div>
                            </div>
                            <LikeButton class="like-btn" />
                            <div class="caption">have fun</div>
                        </div>
                        <div class="polaroid">
                            <div class="filter">
                                <div class="photo">
                                    <img src="https://picsum.photos/400/500?9" alt="">
                                </div>
                            </div>
                            <LikeButton class="like-btn" />
                            <div class="caption">╰(*°▽°*)╯</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- look more -->
        <div class="row d-flex justify-content-center align-items-center p-5">
            <RouterLink to="/photo" class="fs-5 d-flex justify-content-center align-items-center" style="
      width: 200px;
      height: 30px;
      text-decoration: none;
      color: #ba9393;
    ">
                Look more<i class="fa-solid fa-arrow-right"></i>
            </RouterLink>
        </div>
        <!-- 部落格卡片 -->
        <section class="row">
            <BlogCard v-for="(card, index) in blogCards" :id="card.id" :key="index" :img="card.img" :smallTitle="card.smallTitle"
                :description="card.description" />

        </section>






        <!-- 地圖資訊 -->
        <div class="row p-5">
            <div class="col-12 col-md-4">
                <span class="fs-4">座標</span>
            </div>
            <div class="col-12 col-md-8">
                <span>我們在城市的角落安置<br>地址：408臺中市南屯區向上路二段168號4樓
                </span>
            </div>
        </div>
        <MapContact @submit="(data) => console.log('表單送出', data)" />
        <!-- 購物卡片 -->
        <section class="row py-5" id="cardlist">
            <div class="row p-3">
                <div class="col-12 col-md-4">
                    <span class="fs-4">或許，你也會喜歡</span>
                </div>
                <div class="col-12 col-md-8 d-flex align-items-center">
                    <span>相遇是意外或是巧合。</span>
                </div>
            </div>
            <ShoppingCard v-for="(item, index) in shoppingCards" :key="index" :img="item.img"
                :smallTitle="item.smallTitle" :description="item.description" :price="item.price" :index="index" />

        </section>

        <!-- <section>
            <TabMenu :tabs="tabs" :activeTab="currentTab" @change-tab="currentTab = $event" />
            <div class="tab-content">
                <div v-show="currentTab === 'NEWS'" class="content-box">
                    <h3>最新消息</h3>
                    <ul>
                        <li>📢 系統公告更新</li>
                        <li>📢 新功能即將上線</li>
                        <li>📢 活動開跑中</li>
                    </ul>
                </div>

                <div v-show="currentTab === 'HOT'" class="content-box">
                    <h3>HOT</h3>
                    <div class="product-list">
                        <div class="product-card">商品 A</div>
                        <div class="product-card">商品 B</div>
                        <div class="product-card">商品 C</div>
                    </div>
                </div>
                <div v-show="currentTab === '推薦'" class="content-box">
                    <h3>推薦</h3>
                    <ul>
                        <li>推薦序1</li>
                        <li>推薦序2</li>
                        <li>推薦序3</li>
                    </ul>
                </div>
            </div>
        </section> -->
        <div class="d-flex flex-wrap justify-content-end align-items-center gap-3 p-3">
            <a href="#" class="btn-link fs-5 text-black p-2 d-flex justify-content-center align-items-center"
                style="width: 200px; height: 40px;">
                Go top <i class="fa-solid fa-arrow-up ms-2"></i>
            </a>
        </div>
    </main>
</template>

<style scoped>
/* ===== 修正手機版 PhotoMosaic 溢出問題 ===== */
section:has(> .photo-mosaic),
/* 若 PhotoMosaic 根元素有 class */
section {
    overflow: hidden;
    /* 防止子元素絕對定位溢出 */
    position: relative;
}

/* ===== 修正手機版 Swiper 拍立得排列 ===== */
@media (max-width: 768px) {
    .swiper-slide {
        flex-wrap: wrap;
        /* 允許換行，不強制一排 */
        gap: 16px;
        justify-content: center;
        padding: 10px 0;
    }

    .polaroid {
        max-width: 160px;
        /* 手機版縮小拍立得 */
    }
}

/*================== 拍立得滑動 */
.swiper-slide {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 30px;
    /* 每頁拍立得間距 */
}

/* 拍立得本體 */
.polaroid {
    max-width: 220px;
    background: #fff;
    padding: 15px 15px 20px;
    box-shadow: 10px 5px 10px rgba(166, 166, 166, 0.15);
    border-radius: 2px;
    transition: transform 0.3s ease;
    position: relative;
    cursor: grab;
}

/* 照片區（比例控制） */
.photo {
    width: 100%;
    aspect-ratio: 4 / 5;
    overflow: hidden;
    background: #eee;
}

.photo img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
}

/* 拍立得文字 */
.caption {
    margin-top: 20px;
    text-align: center;
    font-size: 15px;
    color: #ba9393;
}

.like-btn {
    font-size: 12px;
    position: absolute;
    left: 10px;
    z-index: 10;
    cursor: pointer;
}

/* hover */
.swiper-slide:hover .polaroid {
    transform: rotate(-1.3deg) scale(0.95);
}

/* =======================頁籤 */
.tab-menu {
    display: flex;
    justify-content: center;
    gap: 0px;
    margin-bottom: 0px;
    /* 與內容區的間距 */
}

.tab-menu button {
    background: #fff;
    border: 1px solid #ccc;
    padding: 8px 20px;
    border-radius: 8px;
    cursor: pointer;
    font-weight: 500;
    transition: all 0.2s ease;
}

.tab-content {
    background-color: #ba9393;
    max-width: 700px;
    margin: 0 auto;
    padding: 20px;
}

.content-box {
    background: #fff;
    border-radius: 12px;
    padding: 24px;
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.08);
    animation: fadeIn 0.3s ease;
}

.content-box h3 {
    margin-bottom: 12px;
    color: #ba9393;
}

.content-box p {
    color: #555;
    margin-bottom: 16px;
}

/* 最新消息列表 */
.content-box ul {
    padding-left: 18px;
}

.content-box li {
    margin-bottom: 8px;
    color: #444;
}

/* 熱門 */
.product-list {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 12px;
}

.product-card {
    background: #f6f2f2;
    padding: 16px;
    border-radius: 10px;
    text-align: center;
    font-weight: 500;
    transition: transform 0.2s ease;
}

.product-card:hover {
    transform: translateY(-4px);
}

/* 置頂 */
.btn-link {
    text-decoration: none;
}

/* 切換動畫 */
@keyframes fadeIn {
    from {
        opacity: 0;
        transform: translateY(6px);
    }

    to {
        opacity: 1;
        transform: translateY(0);
    }
}
</style>
