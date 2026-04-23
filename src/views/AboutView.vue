<script setup>
// About 頁面：UI/UX 設計師個人介紹
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
                <p class="hero-tag">UI / UX Designer</p>
                <h1 class="hero-name">Hi, I'm<br><span>Sky</span></h1>
                <p class="hero-desc">
                    熱愛旅行與設計的創作者。<br>
                    我相信好的設計像一趟好的旅程——<br>
                    每個細節都有意義，每個轉角都值得期待。
                </p>
                <div class="hero-btns">
                    <a href="https://www.104.com.tw" target="_blank" rel="noopener" class="btn-primary-custom">
                        查看履歷 <i class="bi bi-arrow-up-right"></i>
                    </a>
                    <RouterLink to="/" class="btn-ghost-custom">
                        回首頁
                    </RouterLink>
                </div>
            </div>
        </section>

        <div class="divider"></div>

        <!-- 關於我 -->
        <section class="about-section container">
            <div class="about-grid">
                <div class="about-left">
                    <h2 class="section-title">About Me</h2>
                    <p>
                        我是一名 UI/UX 設計師，專注於創造直覺、有溫度的使用者體驗。
                        設計之於我，是解決問題的語言——用視覺說清楚邏輯，用互動傳遞情感。
                    </p>
                    <p>
                        旅行是我的靈感來源。每到一個新地方，我都會觀察當地的標誌設計、
                        空間配色、資訊排版，這些細節都悄悄滲入我的設計思維裡。
                    </p>
                    <p>
                        這個網站是我的練習場：從靜態 HTML 重構為 Vue 3，
                        在技術與設計之間找到自己的節奏。
                    </p>
                </div>

                <div class="about-right">
                    <h2 class="section-title">Skills</h2>
                    <div class="skills-grid">
                        <div v-for="skill in skills" :key="skill.label" class="skill-chip">
                            <i :class="['bi', skill.icon]"></i>
                            <span>{{ skill.label }}</span>
                        </div>
                    </div>

                    <div class="info-list">
                        <div class="info-row">
                            <span class="info-label">地點</span>
                            <span>台中，台灣</span>
                        </div>
                        <div class="info-row">
                            <span class="info-label">現況</span>
                            <span>Open to opportunities</span>
                        </div>
                        <div class="info-row">
                            <span class="info-label">聯繫</span>
                            <a href="mailto:your@email.com" class="info-link">your@email.com</a>
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
    font-family: 'Georgia', serif;
}

/* ===== Hero ===== */
.hero {
    display: flex;
    align-items: center;
    gap: 60px;
    padding: 80px 10vw 60px;
    background: linear-gradient(135deg, #eaf4fb 0%, #f8f6f3 60%);
    flex-wrap: wrap;
}

.hero-img-wrap {
    position: relative;
    flex-shrink: 0;
}

.hero-img {
    width: 280px;
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
    font-family: 'Courier New', monospace;
}

.hero-name {
    font-size: clamp(2.4rem, 5vw, 4rem);
    font-weight: 700;
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
    padding: 0 0 20px;
}

.about-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
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
    font-family: 'Courier New', monospace;
    margin-bottom: 20px;
}

.about-left p {
    color: #555;
    line-height: 1.9;
    margin-bottom: 16px;
    font-size: 15px;
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
}

.info-label {
    width: 50px;
    color: #ba9393;
    font-family: 'Courier New', monospace;
    font-size: 13px;
    flex-shrink: 0;
}

.info-link {
    color: #3a8fb7;
    text-decoration: none;
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
