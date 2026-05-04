<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import LikeButton from '@/components/LikeButton.vue'
import articles from '@/data/blogArticles.json'

const route = useRoute()

const article = computed(() => {
    const id = Number(route.params.id)
    return articles.find(a => a.id === id) || null
})

const relatedArticles = computed(() => {
    if (!article.value) return []
    return article.value.relatedArticles
        .map(id => articles.find(a => a.id === id))
        .filter(Boolean)
})

const headings = computed(() =>
    article.value?.content.filter(b => b.type === 'heading').map(b => b.text) || []
)
</script>

<template>
    <div v-if="!article" class="container py-5 text-center">
        <p style="color: #9a7878; font-size: 16px;">找不到這篇文章。</p>
        <router-link to="/" style="color: #ba9393; font-size: 14px;">← 回到首頁</router-link>
    </div>

    <div v-else style="background: #faf8f6; min-height: 100vh;">

        <!-- Hero -->
        <div class="position-relative overflow-hidden" style="max-height: 520px;">
            <img :src="article.coverImg" :alt="article.title" class="w-100 d-block"
                style="object-fit: cover; height: 520px; filter: brightness(0.72);" />
            <div class="position-absolute bottom-0 start-0 w-100 px-4 px-md-5 pb-5"
                style="background: linear-gradient(to top, rgba(30,20,20,0.75) 0%, transparent 100%);">
                <div class="d-flex align-items-center gap-3 mb-3">
                    <span class="px-3 py-1 rounded-pill"
                        style="background: #ba9393; color: #fff; font-size: 12px; letter-spacing: 0.08em;">
                        {{ article.category }}
                    </span>
                    <span style="color: rgba(255,255,255,0.7); font-size: 13px;">{{ article.date }}</span>
                    <span style="color: rgba(255,255,255,0.5); font-size: 12px;">· {{ article.readTime }}</span>
                </div>
                <h1 class="mb-2"
                    style="color: #fff; font-size: clamp(1.4rem, 4vw, 2.4rem); font-weight: 700; line-height: 1.3; max-width: 720px;">
                    {{ article.title }}
                </h1>
                <p style="color: rgba(255,255,255,0.75); font-size: 15px; max-width: 620px; margin: 0;">
                    {{ article.subtitle }}
                </p>
            </div>
        </div>

        <!-- 主內容 -->
        <div class="container py-5">
            <div class="row justify-content-center">

                <!-- 文章主體 -->
                <div class="col-12 col-lg-7">

                    <!-- 工藝家列 -->
                    <div class="d-flex align-items-center gap-3 mb-5 pb-4" style="border-bottom: 0.5px solid #d9cece;">
                        <img :src="article.craftsman.avatar" class="rounded-circle"
                            style="width: 48px; height: 48px; object-fit: cover;" :alt="article.craftsman.name" />
                        <div>
                            <div style="font-size: 14px; font-weight: 500; color: #3a2e2e;">{{ article.craftsman.name }}
                            </div>
                            <a :href="article.craftsman.ig" target="_blank"
                                style="font-size: 12px; color: #ba9393; text-decoration: none;">
                                {{ article.craftsman.igHandle }} ↗
                            </a>
                        </div>
                        <div class="ms-auto">
                            <LikeButton />
                        </div>
                    </div>

                    <!-- 內容區塊 -->
                    <div class="article-body">
                        <template v-for="(block, i) in article.content" :key="i">

                            <p v-if="block.type === 'paragraph'"
                                style="font-size: 16px; line-height: 2; color: #4a3c3c; margin-bottom: 1.8rem;">
                                {{ block.text }}
                            </p>

                            <blockquote v-else-if="block.type === 'quote'" class="my-5 ps-4"
                                style="border-left: 3px solid #ba9393;">
                                <p
                                    style="font-size: 17px; line-height: 1.9; color: #3a2e2e; font-style: italic; margin-bottom: 8px;">
                                    {{ block.text }}
                                </p>
                                <cite style="font-size: 13px; color: #9a7878;">— {{ block.author }}</cite>
                            </blockquote>

                            <h2 v-else-if="block.type === 'heading'" class="mt-5 mb-3"
                                style="font-size: 20px; font-weight: 600; color: #3a2e2e; letter-spacing: 0.02em;">
                                {{ block.text }}
                            </h2>

                            <figure v-else-if="block.type === 'image'" class="my-5"
                                style="margin-left:0;margin-right:0;">
                                <img :src="block.src" :alt="block.caption" class="w-100 rounded"
                                    style="object-fit: cover; max-height: 420px;" />
                                <figcaption class="mt-2 text-center"
                                    style="font-size: 12px; color: #9a7878; letter-spacing: 0.04em;">
                                    {{ block.caption }}
                                </figcaption>
                            </figure>

                        </template>
                    </div>

                    <!-- Tags -->
                    <div class="d-flex flex-wrap gap-2 mt-5 pt-4" style="border-top: 0.5px solid #d9cece;">
                        <span v-for="tag in article.tags" :key="tag" class="px-3 py-1 rounded-pill"
                            style="background: #f3eded; color: #7a6262; font-size: 12px; border: 0.5px solid #d9cece;">
                            # {{ tag }}
                        </span>
                    </div>

                    <!-- 外部連結 -->
                    <div class="mt-5 p-4 rounded-3" style="background: #f7f3f0; border: 0.5px solid #d9cece;">
                        <div class="mb-3"
                            style="font-size: 11px; font-weight: 500; letter-spacing: 0.15em; color: #ba9393; text-transform: uppercase;">
                            延伸閱讀 &amp; 相關連結
                        </div>
                        <ul class="list-unstyled mb-0">
                            <li v-for="(link, idx) in article.externalLinks" :key="idx"
                                class="d-flex align-items-center gap-2 py-2"
                                :style="idx < article.externalLinks.length - 1 ? 'border-bottom: 0.5px solid #d9cece;' : ''">
                                <span style="color: #ba9393;">↗</span>
                                <a :href="link.url" target="_blank" rel="noopener noreferrer" class="link-hover"
                                    style="font-size: 14px; color: #4a3c3c; text-decoration: none;">
                                    {{ link.label }}
                                </a>
                            </li>
                        </ul>
                    </div>

                </div>

                <!-- Sidebar -->
                <div class="col-12 col-lg-3 offset-lg-1 mt-5 mt-lg-0">
                    <div style="position: sticky; top: 100px;">

                        <!-- 目錄 -->
                        <div class="mb-4 p-3 rounded-3" style="background: #f7f3f0; border: 0.5px solid #d9cece;">
                            <div class="mb-3"
                                style="font-size: 11px; font-weight: 500; letter-spacing: 0.15em; color: #ba9393; text-transform: uppercase;">
                                本文目錄
                            </div>
                            <ul class="list-unstyled mb-0">
                                <li v-for="(h, idx) in headings" :key="idx" class="py-2"
                                    style="font-size: 13px; color: #7a6262; border-bottom: 0.5px solid #e8e0e0; line-height: 1.5;">
                                    {{ h }}
                                </li>
                            </ul>
                        </div>

                        <!-- 工藝家卡片 -->
                        <div class="p-3 rounded-3" style="background: #f7f3f0; border: 0.5px solid #d9cece;">
                            <div class="mb-3"
                                style="font-size: 11px; font-weight: 500; letter-spacing: 0.15em; color: #ba9393; text-transform: uppercase;">
                                關於工藝家
                            </div>
                            <div class="d-flex align-items-center gap-2 mb-3">
                                <img :src="article.craftsman.avatar" class="rounded-circle"
                                    style="width: 40px; height: 40px; object-fit: cover;" />
                                <div>
                                    <div style="font-size: 13px; font-weight: 500; color: #3a2e2e;">{{
                                        article.craftsman.name }}</div>
                                    <a :href="article.craftsman.ig" target="_blank"
                                        style="font-size: 11px; color: #ba9393; text-decoration: none;">
                                        {{ article.craftsman.igHandle }}
                                    </a>
                                </div>
                            </div>
                            <router-link :to="`/craftsman/${article.craftsman.id}`" class="btn w-100 btn-sm"
                                style="background: transparent; border: 0.5px solid #ba9393; color: #ba9393; font-size: 12px; border-radius: 4px;">
                                查看完整介紹 →
                            </router-link>
                        </div>

                    </div>
                </div>

            </div>

            <!-- 相關文章 -->
            <div class="mt-5 pt-5" style="border-top: 0.5px solid #d9cece;">
                <div class="row mb-4">
                    <div class="col-12 col-md-4">
                        <span class="fs-5" style="color: #3a2e2e;">你可能也會喜歡</span>
                        <div class="mt-2" style="width: 60px; height: 2px; background: #ba9393;"></div>
                    </div>
                    <div class="col-12 col-md-8 d-flex align-items-center">
                        <span style="color: #9a7878; font-size: 14px;">每一件工藝，都有自己的故事。</span>
                    </div>
                </div>
                <div class="row g-4">
                    <div v-for="rel in relatedArticles" :key="rel.id" class="col-12 col-md-4">
                        <router-link :to="`/blog/${rel.id}`" class="text-decoration-none">
                            <div class="related-card rounded-3 overflow-hidden"
                                style="background: #fff; border: 0.5px solid #d9cece;">
                                <img :src="rel.coverImg" :alt="rel.title" class="w-100"
                                    style="height: 180px; object-fit: cover;" />
                                <div class="p-3">
                                    <span class="d-inline-block mb-2 px-2 py-1 rounded"
                                        style="font-size: 11px; background: #f3eded; color: #7a6262;">
                                        {{ rel.category }}
                                    </span>
                                    <p
                                        style="font-size: 14px; color: #3a2e2e; font-weight: 500; line-height: 1.5; margin: 0;">
                                        {{ rel.title }}
                                    </p>
                                </div>
                            </div>
                        </router-link>
                    </div>
                </div>
            </div>

            <div class="d-flex justify-content-end mt-5">
                <router-link to="/" style="color: #ba9393; font-size: 14px; text-decoration: none;">
                    ← 返回首頁
                </router-link>
            </div>

        </div>
    </div>
</template>

<style scoped>
.link-hover:hover {
    color: #ba9393 !important;
}

.article-body p:first-child::first-letter {
    font-size: 3rem;
    font-weight: 700;
    color: #ba9393;
    float: left;
    line-height: 0.85;
    margin-right: 8px;
    margin-top: 4px;
}

.related-card {
    transition: transform 0.25s ease;
}

.related-card:hover {
    transform: translateY(-4px);
}

@media (max-width: 768px) {
    img[style*="height: 520px"] {
        height: 300px !important;
    }
}
</style>
