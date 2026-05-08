<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import glasser_geme2 from '../assets/img/glasser_geme2.png'
import glasser_japan from '../assets/img/glasser_japan.jpg'
import glasser_taiwan from '../assets/img/glasser_taiwan.jpg'

const craftsmen = [
    {
        "id": 1,
        "name": "Marten Herma Anderson",
        "origin": "德國",
        "year": 1989,
        "material": "建築 / 陶藝",
        "quote": "Sometimes things don't work out the way you thought they would...\n有時候，事情總會不如預期...",
        "description": "Marten Herma Anderson 是一位穿梭於雕塑、設計與建築領域的多棲藝術家。他出生並成長於波羅的海的呂根島（Rügen），幼年時期深受海岸景觀的荒涼之美與東德時期（GDR）建築的重複結構影響。",
        "story": "他擁有深厚的建築背景，目前於柏林的知名設計工作室 Gisbert Pöppler 工作，專注於室內設計與家具細節。\n其實說了這麼多，筆者我倒覺得他不像一個特別商業的藝術家，反而有時候，像個也正在質疑生活、將這份質疑轉化為創作靈感的一個熱愛自拍的帥哥與普通人，他不吝嗇表露自己在創作上遇到的瓶頸，例如：拍攝一塊雕刻精美卻掉落於地板的陶土，配上一段「事情總是不如預期」的文案\n在他的藝術創作生涯中，也許不一定一帆風順，卻總有「驚奇」",
        "special": "欲探索更多作品故事，請至藝術家官方網站。本站旨在分享與介紹其創作精神。",
        "tags": ["#MartenHermaAnderson", "#當代藝術", "#建築", "#德國藝術家", "#物質記憶", "#柏林設計"],
        "works": 'n',
        "exhibitions": 'n',
        "awards": 'n',
        "image": glasser_geme2
    },
    {
        "id": 2,
        "name": "いとう みわ (伊藤美和)",
        "origin": "日本",
        "year": '1987–1988',
        "material": "玻璃",
        "quote": "My glassblowing practice begins with faith in what cannot be seen.\n對無形之物的信念，是我玻璃創作的起點",
        "description": "居住在日本大阪的玻璃藝術家。\n出生於大阪。 2018年畢業於近台大學藝術系玻璃工藝專業。\n從那時起，她就一直在玻璃吹製工作室 GGG 擔任員工。\n她的作品透過從動物、食物和日常物品中汲取靈感的趣味形式，探索了生活、感恩和靜謐之美等主題。",
        "story": "將指尖下的吹製玻璃轉化為虔誠的禱告。深受金光教『大地即神祇』的宇宙觀啟蒙，她致力於捕捉日常中微小而神聖的瞬間。透過通透的玻璃媒介，她將無形的感恩與平靜的內在力量，淬煉成一件件溫潤且充滿韌性的藝術品。",
        "special": "欲探索更多作品故事，請至藝術家官方網站。本站旨在分享與介紹其創作精神。",
        "tags": ["#MartenHermaAnderson", "#當代藝術", "#建築", "#德國藝術家", "#物質記憶", "#柏林設計"],
        "tags": ["#MiwaIto", "#玻璃藝術", "#精神存在", "#金光教", "#靈性創作", "#無形之美"],
        "works": 'n',
        "exhibitions": 'n',
        "awards": 'n',
        "image": glasser_japan
    },
    {
        "id": 3,
        "name": "陳建志 (Chien-Chih, Chen)",
        "origin": "台灣",
        "year": 1987,
        "material": "吹製玻璃",
        "quote": "我花了好幾年才克服瓶子拉直的問題，又花了幾年才發現歪歪的，也不錯。",
        "description": "一位深耕於台灣新竹的玻璃工藝家。他的藝術生涯始於最基層的學徒制磨練。他擅長捕捉玻璃在液態與固態轉換間的瞬間美感，也關注環境永續議題，致力於將廢棄素材轉化為高品質的藝術創作。",
        "story": "出生於南投，銘傳大學商品設計系畢業後，在一次偶然中深受玻璃製作過程吸引，決定投入新竹「玲瓏窯」跟隨林瑤農大師學習。\n筆者我出社會後有經歷一段迷茫的日子，曾經有想過要去當全職學徒，就是在那樣渴求創造的形況下知道原來台灣有這樣一位玻璃工藝家，碰巧，老師一開始也是由學徒開始，他的故事讓我多了分親切感。\n每個作品、每張貼文都有工藝家自己的體悟，有時候是小品文，有時候只是隨口呢喃，不管哪一種，我鮮少嗅到太過商業的味道，至少，在我看來，只是一個匠人在紀錄自己的工作日常，匠心獨運。",
        "special": "欲探索更多作品故事，請至藝術家官方網站。本站旨在分享與介紹其創作精神。",
        "tags": ["#ChienChihChen", "#台灣玻璃工藝", "#黑玉系列", "#職人精神", "#當代工藝", "#永續藝術"],
        "works": 'n',
        "exhibitions": 'n',
        "awards": 'n',
        "image": glasser_taiwan
    }
]

const route = useRoute()
const craftsman = computed(() =>
    craftsmen.find(c => c.id === Number(route.params.id))
)

// 將 image 欄位轉成 hero-img 的 inline style
const heroImgStyle = computed(() => {
    const img = craftsman.value?.image
    if (img) {
        return {
            backgroundImage: `url('${img}')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
        }
    }
    // 無圖片時顯示預設佔位漸層
    return {
        background: 'linear-gradient(160deg, #e4e0d8 0%, #cdc8be 100%)',
    }
})
</script>

<template>
    <div v-if="craftsman" class="page">
        <!-- NAV -->
        <nav class="nav">
            <router-link to="/" class="back">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                    <path d="M19 12H5M5 12l7-7M5 12l7 7" />
                </svg>
                返回
            </router-link>
            <span class="nav-brand">工藝誌</span>
            <span class="nav-origin">{{ craftsman.origin }}</span>
        </nav>

        <!-- HERO -->
        <header class="hero">
            <div class="hero-left">
                <div class="hero-img-wrap">
                    <!-- ✅ 用 heroImgStyle 動態帶入圖片 -->
                    <div class="hero-img" :style="heroImgStyle"></div>
                    <div class="hero-img-meta">
                        <span>{{ craftsman.material }}</span>
                        <span>Born in {{ craftsman.year }}</span>
                    </div>
                </div>
            </div>
            <div class="hero-right">
                <p class="hero-index">No.0{{ craftsman.id }}</p>
                <h1 class="hero-name">{{ craftsman.name }}</h1>
                <p class="hero-origin">{{ craftsman.origin }}</p>
                <div class="tags">
                    <span v-for="tag in craftsman.tags" :key="tag" class="tag">{{ tag }}</span>
                </div>
                <div class="hero-rule"></div>
                <p class="hero-desc">{{ craftsman.description }}</p>
                <div class="stats">
                    <div class="stat">
                        <span class="stat-val">{{ craftsman.works }}</span>
                        <span class="stat-key">件作品</span>
                    </div>
                    <div class="stat">
                        <span class="stat-val">{{ craftsman.exhibitions }}</span>
                        <span class="stat-key">次展覽</span>
                    </div>
                    <div class="stat">
                        <span class="stat-val">{{ craftsman.awards }}</span>
                        <span class="stat-key">項獎項</span>
                    </div>
                </div>
            </div>
        </header>

        <!-- QUOTE -->
        <section class="quote-section">
            <div class="quote-inner">
                <span class="qmark">"</span>
                <p class="qtext">{{ craftsman.quote }}</p>
                <p class="qauthor">— {{ craftsman.name }}</p>
            </div>
        </section>

        <!-- STORY -->
        <section class="story-section">
            <div class="story-label">
                <span>創作故事</span>
            </div>
            <div class="story-body">
                <p>{{ craftsman.story }}</p>
            </div>
        </section>

        <!-- 特色事跡 -->
        <section class="story-section">
            <div class="story-label">
                <span>其他作品與特色事跡</span>
            </div>
            <div class="story-body">
                <p>{{ craftsman.special }}</p>
            </div>
        </section>
    </div>

    <!-- NOT FOUND -->
    <div v-else class="not-found">
        <p>找不到此設計師</p>
        <router-link to="/">← 返回首頁</router-link>
    </div>
</template>

<style scoped>
/* ── RESET & BASE ── */
* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

.page {
    background: #fff;
    color: #111;
    font-family: 'Georgia', 'Noto Serif TC', serif;
    min-height: 100vh;
}

/* ── NAV ── */
.nav {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 100;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 2.5rem;
    height: 58px;
    background: rgba(255, 255, 255, 0.93);
    backdrop-filter: blur(14px);
    border-bottom: 1px solid #e8e8e8;
}

.back {
    display: flex;
    align-items: center;
    gap: 6px;
    font-family: 'Helvetica Neue', sans-serif;
    font-size: 11px;
    letter-spacing: 0.18em;
    text-transform: uppercase;
    color: #999;
    text-decoration: none;
    transition: color 0.2s;
}

.back:hover {
    color: #111;
}

.nav-brand {
    font-size: 15px;
    letter-spacing: 0.2em;
    color: #111;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
}

.nav-origin {
    font-family: 'Helvetica Neue', sans-serif;
    font-size: 11px;
    letter-spacing: 0.15em;
    text-transform: uppercase;
    color: #ccc;
}

/* ── HERO ── */
.hero {
    padding: 50px;
    display: grid;
    grid-template-columns: 55% 45%;
    min-height: 100vh;
}

.hero-left {
    position: relative;
    overflow: hidden;
}

.hero-img-wrap {
    position: relative;
    width: 100%;
    height: 100%;
}

.hero-img {
    width: 100%;
    height: 100%;
    min-height: 600px;
    /* background 由 :style binding 控制，這裡只保留尺寸設定 */
}

.hero-img-meta {
    position: absolute;
    bottom: 2rem;
    left: 2rem;
    display: flex;
    flex-direction: column;
    gap: 4px;
}

.hero-img-meta span {
    font-family: 'Helvetica Neue', sans-serif;
    font-size: 10px;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    color: rgba(80, 75, 68, 0.7);
    background: rgba(255, 255, 255, 0.6);
    padding: 3px 8px;
    backdrop-filter: blur(6px);
    width: fit-content;
}

.hero-right {
    padding: 3rem 0 3rem 4rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    border-left: 1px solid #e8e8e8;
}

.hero-index {
    font-family: 'Helvetica Neue', sans-serif;
    font-size: 11px;
    letter-spacing: 0.3em;
    color: #ccc;
    margin-bottom: 1.5rem;
}

.hero-name {
    font-size: clamp(1.8rem, 3vw, 3.2rem);
    font-weight: 400;
    line-height: 1.1;
    color: #111;
    margin-bottom: 0.4rem;
}

.hero-origin {
    font-family: 'Helvetica Neue', sans-serif;
    font-size: 12px;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    color: #aaa;
    margin-bottom: 2rem;
}

/* TAGS */
.tags {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    margin-bottom: 2.5rem;
}

.tag {
    font-family: 'Helvetica Neue', sans-serif;
    font-size: 11px;
    letter-spacing: 0.08em;
    color: #888;
    border: 1px solid #e0e0e0;
    padding: 4px 10px;
    border-radius: 8px;
    transition: border-color 0.2s, color 0.2s;
    cursor: default;
}

.tag:hover {
    border-color: #aaa;
    color: #444;
}

.hero-rule {
    width: 36px;
    height: 1px;
    background: #ddd;
    margin-bottom: 2rem;
}

.hero-desc {
    font-size: 15px;
    line-height: 1.9;
    color: #666;
    margin-bottom: 3rem;
}

/* STATS */
.stats {
    display: flex;
    gap: 2.5rem;
    padding-top: 2rem;
    border-top: 1px solid #e8e8e8;
}

.stat {
    display: flex;
    flex-direction: column;
    gap: 4px;
}

.stat-val {
    font-size: 1.8rem;
    font-weight: 400;
    color: #111;
    line-height: 1;
}

.stat-key {
    font-family: 'Helvetica Neue', sans-serif;
    font-size: 10px;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    color: #bbb;
}

/* ── QUOTE ── */
.quote-section {
    white-space: pre-line;
    border-top: 1px solid #e8e8e8;
    border-bottom: 1px solid #e8e8e8;
}

.quote-inner {
    white-space: pre-line;
    max-width: 760px;
    margin: 0 auto;
    padding: 3rem 2rem;
    text-align: center;
}

.qmark {
    display: block;
    font-size: 5rem;
    line-height: 0.5;
    color: #e0e0e0;
    margin-bottom: 2rem;
}

.qtext {
    font-size: clamp(1.3rem, 2vw, 1.9rem);
    font-weight: 400;
    line-height: 1.65;
    color: #111;
    letter-spacing: 0.03em;
    margin-bottom: 2rem;
}

.qauthor {
    font-family: 'Helvetica Neue', sans-serif;
    font-size: 11px;
    letter-spacing: 0.25em;
    text-transform: uppercase;
    color: #bbb;
}

/* ── STORY ── */
.story-section {
    display: grid;
    grid-template-columns: 240px 1fr;
    max-width: 1100px;
    margin: 0 auto;
    padding: 3rem 4rem;
    gap: 4rem;
    border-bottom: 1px solid #e8e8e8;
}

.story-label {
    font-family: 'Helvetica Neue', sans-serif;
    font-size: 11px;
    letter-spacing: 0.3em;
    text-transform: uppercase;
    color: #bbb;
    padding-top: 4px;
}

.story-body p {
    white-space: pre-line;
    font-size: 15px;
    line-height: 2;
    color: #555;
}

/* ── NOT FOUND ── */
.not-found {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
    gap: 1.5rem;
    font-size: 14px;
    color: #aaa;
    font-family: 'Helvetica Neue', sans-serif;
}

.not-found a {
    color: #888;
    text-decoration: none;
    letter-spacing: 0.1em;
}

/* ── RWD ── */
@media (max-width: 860px) {
    .nav {
        padding: 0 1.5rem;
    }

    .nav-brand {
        display: none;
    }

    .hero {
        grid-template-columns: 1fr;
        min-height: auto;
    }

    .hero-img {
        min-height: 320px;
    }

    .hero-right {
        padding: 3rem 1.5rem;
        border-left: none;
        border-top: 1px solid #e8e8e8;
    }

    .story-section {
        grid-template-columns: 1fr;
        padding: 4rem 3rem;
        gap: 1.5rem;
    }
}
</style>