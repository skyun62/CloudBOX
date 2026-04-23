<script setup>
const props = defineProps({
    currentStep: { type: Number, default: 1 }
})

const steps = ['確認購物車', '付款與運送', '填寫資料', '完成訂單']
</script>

<template>
    <div class="progress-pills">
        <template v-for="(label, index) in steps" :key="index">
            <!-- Pill -->
            <div
                class="pill"
                :class="{
                    done: index + 1 < currentStep,
                    now:  index + 1 === currentStep
                }"
            >
                {{ label }}
            </div>
            <!-- 連接線（最後一個後面不加） -->
            <div
                v-if="index < steps.length - 1"
                class="sep"
                :class="{ done: index + 1 < currentStep }"
            ></div>
        </template>
    </div>
</template>

<style scoped>
.progress-pills {
    display: flex;
    align-items: center;
    flex-wrap: nowrap;
    gap: 0;
    padding: 16px 0 8px;
    overflow-x: auto;          /* 手機過窄時可左右捲動，不會擠壞版型 */
    scrollbar-width: none;
}
.progress-pills::-webkit-scrollbar { display: none; }

.pill {
    padding: 6px 14px;
    border-radius: 100px;
    font-size: 18px;
    font-weight: bold;
    white-space: nowrap;
    flex: 1;
    border: 1px solid #dce8f0;
    color: #aaa;
    background: #fff;
    transition: background 0.2s, color 0.2s, border-color 0.2s;
    text-overflow: ellipsis;
    
    display: flex;            /* 開啟彈性佈局 */
    justify-content: center;  /* 水平方向居中 */
    align-items: center;      /* 垂直方向居中 (預防萬一高度不一) */
    text-overflow: ellipsis;
    overflow: hidden;
}

/* 已完成：實心藍 */
.pill.done {
    background: #3a8fb7;
    color: #fff;
    border-color: #3a8fb7;
}

/* 目前步驟：白底藍框 */
.pill.now {
    background: #fff;
    color: #3a8fb7;
    border-color: #3a8fb7;
    font-weight: 600;
}

/* 連接線 */
.sep {
    flex: 1; 
    max-width: 40px;
    height: 1px;
    background: #dce8f0;
    flex-shrink: 0;
    transition: background 0.2s;
}

.sep.done {
    background: #3a8fb7;
}
</style>