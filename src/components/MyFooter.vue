<script setup></script>

<template>
    <footer class="footer-wrap">
        <div class="footer-main">
            <div class="footer-grid">

                <!-- 品牌欄 -->
                <div>
                    <div class="footer-brand-name">雲端裡的潘朵拉</div>
                    <p class="footer-brand-tagline">
                        只是一個純粹因為喜歡<br>
                        而凝視的人，<br>
                        把這份欣賞分享給你。
                    </p>
                    <div class="footer-social">
                        <a href="https://www.instagram.com/" target="_blank" aria-label="Instagram">
                            <i class="bi bi-instagram"></i>
                        </a>
                        <a href="https://www.facebook.com/" target="_blank" aria-label="Facebook">
                            <i class="fa-brands fa-facebook-f"></i>
                        </a>
                        <a href="https://twitter.com/" target="_blank" aria-label="Twitter">
                            <i class="bi bi-twitter-x"></i>
                        </a>
                    </div>
                </div>

                <!-- 探索 -->
                <div>
                    <div class="footer-col-title">探索</div>
                    <ul class="footer-links">
                        <li><router-link to="/craftsman/1">工藝家介紹</router-link></li>
                        <li><router-link to="/photo">作品圖輯</router-link></li>
                        <li><a href="#">玻璃工藝</a></li>
                        <li><a href="#">最新消息</a></li>
                    </ul>
                </div>

                <!-- 關於 -->
                <div>
                    <div class="footer-col-title">關於</div>
                    <ul class="footer-links">
                        <li><a href="#">我們的故事</a></li>
                        <li><a href="#">合作提案</a></li>
                        <li><a href="#">聯絡我們</a></li>
                        <li><a href="#">地圖導覽</a></li>
                    </ul>
                </div>

                <!-- 訂閱 -->
                <div>
                    <div class="footer-col-title">訂閱電子報</div>
                    <p class="footer-subscribe-desc">不定期寄出工藝故事與展覽資訊</p>
                    <div class="footer-subscribe-form">
                        <input type="email" placeholder="your@email.com" />
                        <button type="button">送出</button>
                    </div>
                </div>

            </div>
        </div>

        <hr class="footer-divider" />

        <div class="footer-bottom">
            <span class="footer-copy">© 2026 skyun_62 · 雲端裡的潘朵拉</span>
            <div class="footer-bottom-links">
                <a href="#">隱私政策</a>
                <a href="#">使用條款</a>
            </div>
        </div>
    </footer>
</template>

<style scoped>
.footer-wrap {
    font-family: inherit;
}

.footer-main {
    background: #f7f3f0;
    padding: 3rem 2rem 2rem;
    border-top: 0.5px solid #d9cece;
}

.footer-grid {
    display: grid;
    grid-template-columns: 1.6fr 1fr 1fr 1fr;
    gap: 2rem;
    max-width: 960px;
    margin: 0 auto;
}

.footer-brand-name {
    font-size: 15px;
    font-weight: 500;
    color: #3a2e2e;
    letter-spacing: 0.08em;
    margin-bottom: 6px;
}

.footer-brand-tagline {
    font-size: 12px;
    color: #9a7878;
    line-height: 1.8;
    margin-bottom: 1.2rem;
}

.footer-social {
    display: flex;
    gap: 10px;
}

.footer-social a {
    width: 30px;
    height: 30px;
    border-radius: 50%;
    border: 0.5px solid #c9b5b5;
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    color: #9a7878;
    font-size: 12px;
    transition: border-color 0.2s, color 0.2s;
}

.footer-social a:hover {
    border-color: #ba9393;
    color: #ba9393;
}

.footer-col-title {
    font-size: 11px;
    font-weight: 500;
    letter-spacing: 0.15em;
    color: #ba9393;
    margin-bottom: 1rem;
    text-transform: uppercase;
}

.footer-links {
    list-style: none;
    padding: 0;
    margin: 0;
}

.footer-links li {
    margin-bottom: 8px;
}

.footer-links a {
    font-size: 13px;
    color: #7a6262;
    text-decoration: none;
    transition: color 0.2s;
}

.footer-links a:hover {
    color: #3a2e2e;
}

.footer-subscribe-desc {
    font-size: 12px;
    color: #9a7878;
    line-height: 1.7;
    margin-bottom: 10px;
}

.footer-subscribe-form {
    display: flex;
    border: 0.5px solid #c9b5b5;
    border-radius: 4px;
    overflow: hidden;
    max-width: 200px;
}

.footer-subscribe-form input {
    border: none;
    background: transparent;
    padding: 7px 10px;
    font-size: 12px;
    color: #3a2e2e;
    flex: 1;
    outline: none;
    min-width: 0;
}

.footer-subscribe-form button {
    background: #ba9393;
    border: none;
    padding: 7px 12px;
    font-size: 11px;
    color: #fff;
    cursor: pointer;
    letter-spacing: 0.05em;
    transition: background 0.2s;
}

.footer-subscribe-form button:hover {
    background: #a07878;
}

.footer-divider {
    border: none;
    border-top: 0.5px solid #d9cece;
    margin: 0;
}

.footer-bottom {
    background: #f7f3f0;
    padding: 0.9rem 2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.footer-copy {
    font-size: 12px;
    color: #a08888;
}

.footer-bottom-links {
    display: flex;
    gap: 16px;
}

.footer-bottom-links a {
    font-size: 12px;
    color: #a08888;
    text-decoration: none;
    transition: color 0.2s;
}

.footer-bottom-links a:hover {
    color: #ba9393;
}

/* 手機版 */
@media (max-width: 768px) {
    .footer-grid {
        grid-template-columns: 1fr 1fr;
        gap: 1.5rem;
    }

    .footer-bottom {
        flex-direction: column;
        gap: 8px;
        text-align: center;
    }
}
</style>