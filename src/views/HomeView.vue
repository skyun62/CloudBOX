<script setup>
//角色role
import Role from '@/components/Role.vue';

// 拍立得
import { onMounted } from 'vue'
import Swiper from 'swiper'
import 'swiper/css'
import LikeButton from '@/components/LikeButton.vue';
// 電影片單
//import Movie from '@/components/Movie.vue';
onMounted(() => {
    new Swiper('.mySwiper', {
        slidesPerView: 1, // 一頁顯示一組
        spaceBetween: 50,
    })
})
//購物卡片
import ShoppingCard from '@/components/ShoppingCard.vue'
const shoppingCards = [
    { img: '/src/assets/img/sea2.jpg', smallTitle: 'Card title A', description: 'Some quick example text', price: 1399 },
    { img: '/src/assets/img/sea2.jpg', smallTitle: 'Card title B', description: 'Some quick example text', price: 1999 },
    { img: '/src/assets/img/sea2.jpg', smallTitle: 'Card title C', description: 'Some quick example text', price: 2999 },
    { img: '/src/assets/img/sea2.jpg', smallTitle: 'Card title D', description: 'Some quick example text', price: 1799 },
]

//圖中有圖
import PhotoMosaic from '@/components/PhotoMosaic.vue'
//表格
import DataTable from '@/components/Datatable.vue'
//圖文區塊(三大區)
import TextImageBlock from '@/components/TextImageBlock.vue'
//地圖資訊
import MapContact from '@/components/MapContact.vue'
//blog卡片
import BlogCard from '@/components/BlogCard.vue'
const blogCards = [
    { img: '/src/assets/img/sea1.jpg', smallTitle: 'Card title', description: 'Some quick example text to build on the card title.' },
    { img: '/src/assets/img/sea1.jpg', smallTitle: 'Card title', description: 'Some quick example text to build on the card title.' },
    { img: '/src/assets/img/sea1.jpg', smallTitle: 'Card title', description: 'Some quick example text to build on the card title.' },
    { img: '/src/assets/img/sea1.jpg', smallTitle: 'Card title', description: 'Some quick example text to build on the card title.' },
]

//頁籤
import { ref } from 'vue'
import TabMenu from '@/components/TabMenu.vue'

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
                    <img src="../assets/img/sea1.jpg" class="d-block w-100" alt="..." style="max-height: 70vh;">
                    <div class="text-start carousel-caption d-none d-md-block">
                        <h2 class="display-1" style="font-weight: bold;">Travel Magazine</h2>
                        <p>Some representative placeholder content for the first slide.</p>
                        <button type="button" class="btn btn-primary btn-mg">Sing up</button>
                    </div>
                </div>
                <div class="carousel-item">
                    <img src="../assets/img/sea2.jpg" class="d-block w-100" alt="..." style="max-height: 70vh;">
                    <div class="text-center carousel-caption d-none d-md-block">
                        <h2 class="display-1" style="font-weight: bold;">Travel Magazine</h2>
                        <p>Some representative placeholder content for the second slide.</p>
                        <button type="button" class="btn btn-primary btn-mg">Sing up</button>
                    </div>
                </div>
                <div class="carousel-item">
                    <img src="../assets/img/sea4.jpg" class="d-block w-100" alt="..." style="max-height: 70vh;">
                    <div class="text-end carousel-caption d-none d-md-block">
                        <h2 class="display-1" style="font-weight: bold;">Travel Magazine</h2>
                        <p>Some representative placeholder content for the third slide.</p>
                        <button type="button" class="btn btn-primary btn-mg">Sing up</button>
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
            <span class="fs-2">Raw Denim Heirloom Man Braid</span>
            <p>Blue bottle crucifix vinyI post-ironic four dollar toast vegan taxidermy. Gastropub
                juice poutine, ramps microdosing banh mi pug.</p>
            <div class="bg-secondary" style="width: 100px; height: 3px;"></div>
        </section>
        <!-- 角色 -->
        <section>
            <div class="container">
                <div class="row col-12 col-lg p-5">
                    <Role />
                    <Role />
                    <Role />
                </div>
            </div>
        </section>

        <section class="mt-5">
            <span class="fs-2">Travel Memories</span>

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
        <!-- 購物卡片 -->
        <section class="row">
            <ShoppingCard v-for="(item, index) in shoppingCards" :key="index" :img="item.img"
                :smallTitle="item.smallTitle" :description="item.description" :price="item.price" :index="index" />
        </section>

        <!-- 圖中有圖的標題 -->
        <section>
            <div class="row p-5">
                <div class="col-12 col-md-4">
                    <span class="fs-4">Master Cleanse Reliac Heirloom.</span>
                </div>
                <div class="col-12 col-md-8">
                    <span>Whatever cardigan tote bag tumbir hexagon brooklyn asymmetrical gentrify, subway tile poke
                        farm-to-
                        table. Franzen you probably haven't heard of them man bun deep jianbing selfies heirloom.</span>
                </div>
            </div>
        </section>

        <!-- 圖中有圖 -->
        <section>
            <PhotoMosaic />
        </section>
        <!-- 表格標題 -->
        <section class="row d-flex justify-content-center justify-content-center text-center p-5">
            <span class="fs-2">Raw Denim Heirloom Man Braid</span>
            <p>Blue bottle crucifix vinyI post-ironic four dollar toast vegan taxidermy. Gastropub
                juice poutine, ramps microdosing banh mi pug.</p>
            <div class="bg-secondary" style="width: 100px; height: 3px;"></div>
        </section>
        <!-- 表格 -->
        <DataTable @select="(row) => console.log('選到', row)" />
        <!-- 表格後標題 -->
        <section>
            <div class="row py-5">
                <div class="col-12 col-md-5">
                    <span class="fs-5">Master Cleanse Reliac Heirloom.</span>
                    <div class="bg-secondary mt-2" style="width: 100px; height: 3px;"></div>
                </div>
                <div class="col-12 col-md-7">
                    <span>Whatever cardigan tote bag tumbir hexagon brooklyn asymmetrical gentrify, subway tile poke
                        farm-to-
                        table. Franzen you probably haven't heard of them man bun deep jianbing selfies heirloom.</span>
                </div>
            </div>
        </section>
        <!-- 圖文區塊 -->
        <TextImageBlock title="HeadingHeading" text="Some placeholder..." img="..." />
        <TextImageBlock title="HeadingHeading" text="Some placeholder..." img="..." :reverse="true" />
        <TextImageBlock title="HeadingHeading" text="Some placeholder..." img="..." />
        <!-- 地圖資訊 -->
        <MapContact @submit="(data) => console.log('表單送出', data)" />
        <!-- blog卡片 -->
        <section class="row" id="cardlist">
            <BlogCard v-for="(card, index) in blogCards" :key="index" :img="card.img" :smallTitle="card.smallTitle"
                :description="card.description" />
        </section>

        <section>
            <Movie />
        </section>
        <section>
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

        </section>

    </main>
</template>

<style scoped>
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
    font-family: 'Courier New', monospace;
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
    gap: 10px;
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
