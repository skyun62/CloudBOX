<script setup>
//表格
import DataTable from '@/components/DataTable.vue'
// 旅行日記主題配色：天空藍 #3a8fb7、玫瑰粉 #ba9393
const skills = [
    { label: 'UI/UX Design', icon: 'bi-vector-pen' },
    { label: 'Wireframing', icon: 'bi-layout-text-window' },
    { label: 'Prototyping', icon: 'bi-phone' },
    { label: 'User Research', icon: 'bi-person-search' },
    { label: 'Vue 3', icon: 'bi-code-slash' },
    { label: 'HTML / CSS', icon: 'bi-braces' },
]
</script>

<template>
    <main class="about-page">

        <!-- Hero：大照片 + 名字 -->
        <section class="hero">
            <div class="hero-img-wrap">
                <img src="../assets/img/cloud.jpg" alt="profile photo" class="hero-img">
                <div class="hero-deco"></div>
            </div>

            <div class="hero-text">
                <p class="hero-tag">☁ 工藝 × 品味故事</p>
                <h1 class="hero-name">Cloud<br><span>BOX</span></h1>
                <p class="hero-desc">
                    雲端裡的潘朵拉
                    <br>✦ Curated with intention. Lived in with love.
                </p>
                <div class="hero-btns">
                    <a href="https://www.104.com.tw" target="_blank" rel="noopener" class="btn-primary-custom">
                        Resume <i class="bi bi-arrow-up-right"></i>
                    </a>
                    <RouterLink to="/" class="btn-ghost-custom">
                        Back to Home
                    </RouterLink>
                </div>
            </div>
        </section>

        <div class="divider"></div>

        <!-- 關於我 -->
        <section class="about-section container">
            <div class="about-grid">
                <div class="about-left">
                    <h2 class="section-title">About US</h2>
                    <p>
                        嗨，我們是 CloudBOX ☁️🎁
                        <br>古老神話說，那個盒子裡裝著所有人類的苦與福。而我相信真正的工藝品，也有同樣的重量。
                        <br>它裝著一個工匠的時間、一種瀕臨失傳的技藝、一塊泥土或一根纖維的前世今生。
                        <br>
                    </p>
                    <h2 class="section-title">About Me</h2>
                    <p>
                        嗨，我是SKY ☁️ 這個網站的製作者
                        <br>一直以來，都很欣賞著那些在一個領域持續耕耘的人們，那種廢寢忘食卻快樂地散發能量的樣子，令我著迷。
                        <br>因此我製作了這樣一個觀看的地方，觀看那些用雙手說話的人，觀看那些在日常器物裡藏著宇宙的作品，也想把這樣的美分享給你。
                    </p>

                    <h2 class="section-title">About source</h2>
                    <p>
                        影像版權屬原創者所有。本站經授權後透過Official Instagram Embedding 嵌入，純屬非營利分享，若需調整或移除，請隨時聯繫。
                    </p>
                    <!-- 表格 -->
                    <DataTable @select="(row) => console.log('選到', row)" />
                </div>

                <div class="about-right">
                    <div class="info-list">
                        <div class="info-row">
                            <span class="info-label">地點</span>
                            <span>Taichung, Taiwan</span>
                        </div>
                        <div class="info-row">
                            <span class="info-label">聯繫</span>
                            <a href="mailto:your@email.com" class="info-link">skyhuschi@email.com</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <div class="divider"></div>

        <!-- 旅行照片牆（純裝飾） -->
        <section class="photo-strip container">
            <h2 class="section-title text-center mb-4">Travel Shots</h2>
            <div class="strip-grid">
                <div class="strip-item tall">
                    <img src="https://picsum.photos/400/600?10" alt="">
                </div>
                <div class="strip-col">
                    <div class="strip-item">
                        <img src="https://picsum.photos/400/300?11" alt="">
                    </div>
                    <div class="strip-item">
                        <img src="https://picsum.photos/400/300?12" alt="">
                    </div>
                </div>
                <div class="strip-item tall">
                    <img src="https://picsum.photos/400/600?13" alt="">
                </div>
                <div class="strip-col">
                    <div class="strip-item">
                        <img src="https://picsum.photos/400/300?14" alt="">
                    </div>
                    <div class="strip-item">
                        <img src="https://picsum.photos/400/300?15" alt="">
                    </div>
                </div>
            </div>
        </section>

    </main>
</template>

<style scoped>
/* ===== 全頁底色 ===== */
.about-page {
    background: #f8f6f3;
    min-height: 100vh;
    font-family: 'Jost', 'Noto Serif TC', sans-serif;
    font-weight: 300;
}

/* ===== Hero ===== */
.hero {
    display: flex;
    align-items: center;
    gap: 100px;
    padding: 80px 10vw 60px;
    background: linear-gradient(135deg, #eaf4fb 0%, #f8f6f3 60%);
    flex-wrap: wrap;
}

.hero-img-wrap {
    position: relative;
    flex-shrink: 0;
}

.hero-img {
    width: 340px;
    height: 340px;
    object-fit: cover;
    border-radius: 4px 40px 4px 40px;
    display: block;
    position: relative;
    z-index: 1;
}

/* 右下角裝飾方塊 */
.hero-deco {
    position: absolute;
    bottom: -14px;
    right: -14px;
    width: 100%;
    height: 100%;
    border: 2px solid #ba9393;
    border-radius: 4px 40px 4px 40px;
    z-index: 0;
}

.hero-tag {
    font-size: 13px;
    letter-spacing: 3px;
    text-transform: uppercase;
    color: #3a8fb7;
    margin-bottom: 12px;
    font-family: 'Jost', 'Noto Serif TC', sans-serif;
    font-weight: 300;
}

.hero-name {
    font-family: 'Playfair Display', 'Noto Serif TC', serif;
    font-weight: 400;
    font-size: clamp(2.4rem, 5vw, 4rem);
    line-height: 1.15;
    color: #2c2c2c;
    margin-bottom: 20px;
}

.hero-name span {
    color: #ba9393;
}

.hero-desc {
    color: #555;
    line-height: 1.9;
    font-size: 15px;
    margin-bottom: 32px;
    max-width: 380px;
    font-family: 'Jost', 'Noto Serif TC', sans-serif;
    font-weight: 300;
}

.hero-btns {
    display: flex;
    gap: 16px;
    flex-wrap: wrap;
}

.btn-primary-custom {
    background: #3a8fb7;
    color: #fff;
    padding: 12px 28px;
    border-radius: 4px;
    text-decoration: none;
    font-size: 14px;
    letter-spacing: 0.5px;
    transition: background 0.2s, transform 0.2s;
    display: inline-flex;
    align-items: center;
    gap: 6px;
    font-family: 'Jost', sans-serif;
    font-weight: 300;
}

.btn-primary-custom:hover {
    background: #2f7da0;
    transform: translateY(-2px);
    color: #fff;
}

.btn-ghost-custom {
    border: 1px solid #ba9393;
    color: #ba9393;
    padding: 12px 28px;
    border-radius: 4px;
    text-decoration: none;
    font-size: 14px;
    transition: background 0.2s, transform 0.2s;
    font-family: 'Jost', sans-serif;
    font-weight: 300;
}

.btn-ghost-custom:hover {
    background: #fdf4f4;
    transform: translateY(-2px);
}

/* ===== 分隔線 ===== */
.divider {
    width: 80px;
    height: 2px;
    background: #ba9393;
    margin: 60px auto;
    border-radius: 2px;
}

/* ===== About + Skills ===== */
.about-section {
    padding: 0 60px;
}

.about-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 60px;
    align-items: start;
}

@media (max-width: 768px) {
    .about-grid {
        grid-template-columns: 1fr;
        gap: 40px;
    }

    .hero {
        padding: 50px 6vw 40px;
        justify-content: center;
        text-align: center;
        flex-direction: column;
    }

    .hero-desc {
        margin: 0 auto 32px;
    }

    .hero-btns {
        justify-content: center;
    }
}

.section-title {
    font-size: 1.1rem;
    letter-spacing: 3px;
    text-transform: uppercase;
    color: #3a8fb7;
    font-family: 'Playfair Display', 'Noto Serif TC', serif;
    font-weight: 400;
    margin-bottom: 10px;
}

.about-left p {
    color: #555;
    line-height: 1.9;
    margin-bottom: 30px;
    font-size: 15px;
    font-family: 'Jost', 'Noto Serif TC', sans-serif;
    font-weight: 300;
}

/* Skills chips */
.skills-grid {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    margin-bottom: 32px;
}

.skill-chip {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    background: #fff;
    border: 1px solid #e0d4d4;
    padding: 8px 16px;
    border-radius: 100px;
    font-size: 13px;
    color: #555;
    transition: border-color 0.2s, color 0.2s;
    font-family: 'Jost', sans-serif;
    font-weight: 300;
}

.skill-chip:hover {
    border-color: #ba9393;
    color: #ba9393;
}

.skill-chip i {
    font-size: 14px;
    color: #3a8fb7;
}

/* Info list */
.info-list {
    display: flex;
    flex-direction: column;
    gap: 12px;
    border-top: 1px solid #e8e0e0;
    padding-top: 20px;
}

.info-row {
    display: flex;
    gap: 20px;
    font-size: 14px;
    color: #555;
    font-family: 'Jost', sans-serif;
    font-weight: 300;
}

.info-label {
    width: 50px;
    color: #ba9393;
    font-family: 'Jost', sans-serif;
    font-weight: 300;
    font-size: 13px;
    flex-shrink: 0;
}

.info-link {
    color: #3a8fb7;
    text-decoration: none;
    font-family: 'Jost', sans-serif;
}

.info-link:hover {
    text-decoration: underline;
}

/* ===== Photo Strip ===== */
.photo-strip {
    padding-bottom: 80px;
}

.strip-grid {
    display: flex;
    gap: 10px;
    align-items: stretch;
    height: 360px;
}

.strip-item {
    overflow: hidden;
    border-radius: 4px;
    flex: 1;
}

.strip-item img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s ease;
    display: block;
}

.strip-item:hover img {
    transform: scale(1.04);
}

.strip-item.tall {
    flex: 1.2;
}

.strip-col {
    display: flex;
    flex-direction: column;
    gap: 10px;
    flex: 1;
}

.strip-col .strip-item {
    flex: 1;
}

@media (max-width: 576px) {
    .strip-grid {
        height: auto;
        flex-wrap: wrap;
    }

    .strip-item.tall,
    .strip-col {
        flex: 1 1 45%;
    }
}
</style>