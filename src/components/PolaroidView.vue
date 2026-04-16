<!-- <script setup>
  import LikeButton from './LikeButton.vue'
const props = defineProps({
  photo: Object
})

const emit = defineEmits(['delete'])

const toggleLike = () => {
  if (!props.photo.liked) {
    alert('你按了讚!')
  }
  props.photo.liked = !props.photo.liked
}

const remove = () => {
  emit('delete', props.photo.id)
}
</script>

<template>
  <div class="swiper-slide">
    <div class="polaroid">
      <div class="photo">
        <img :src="photo.url" alt="">
      </div>

      <button class="like-btn" @click="toggleLike">
        {{ photo.liked ? '取消讚' : '按讚' }}
      </button>

      <button class="delete-btn" @click="remove">刪除</button>
      <div class="caption">{{ photo.title }}</div>
      <LikeButton />
    </div>
  </div>
</template>

<style scoped>
.polaroid {
  max-width: 220px;
  width: 100%;
  background: #fff;
  padding: 15px 15px 20px;
  box-shadow: 10px 5px 10px rgba(166, 166, 166, 0.15);
  border-radius: 2px;
  position: relative;
  cursor: grab;
  transition: transform 0.3s ease;
}

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
}

.caption {
  margin-top: 20px;
  text-align: center;
  font-size: 15px;
  color: #ba9393;
  font-family: 'Courier New', monospace;
}

.like-btn {
  position: absolute;
  left: 10px;
  top: 10px;
  font-size: 12px;
}

.delete-btn {
  position: absolute;
  right: 10px;
  top: 10px;
  font-size: 12px;
  color: #a00;
}

.swiper-slide:hover .polaroid {
  transform: rotate(-1.3deg) scale(0.95);
}
</style> -->
<script setup>
import LikeButton from './LikeButton.vue'

// 定義 Props
const props = defineProps({
  photo: {
    type: Object,
    required: true
  }
})

// 定義事件
const emit = defineEmits(['delete', 'toggle-like'])

const handleToggleLike = () => {
  if (!props.photo.liked) {
    alert('你按了讚!')
  }
  // 透過 emit 傳遞，保持單向數據流
  emit('toggle-like', props.photo.id)
}

const remove = () => {
  if (confirm('確定要刪除這張照片嗎？')) {
    emit('delete', props.photo.id)
  }
}
</script>

<template>
  <div class="swiper-slide">
    <div class="polaroid">
      <div class="filter-wrapper">
        <div class="photo">
          <img :src="photo.url" :alt="photo.title">
        </div>
      </div>

      <div class="controls">
        <button class="delete-btn" @click="remove" title="刪除">✕</button>
      </div>

      <LikeButton 
        class="like-btn" 
        :is-liked="photo.liked" 
        @click="handleToggleLike" 
      />

      <div class="caption">{{ photo.title || 'Untitled' }}</div>
    </div>
  </div>
</template>

<style scoped>
.polaroid {
  width: 210px;
  background: #fff;
  padding: 15px 15px 45px; /* 增加底部空間給文字與按鈕 */
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  border-radius: 2px;
  position: relative;
  cursor: grab;
  transition: transform 0.3s ease;
  margin: 10px;
}

/* 相片容器與濾鏡效果 */
.filter-wrapper {
  position: relative;
  width: 100%;
  background: #eee;
  overflow: hidden;
}

.photo {
  width: 100%;
  aspect-ratio: 4 / 5;
}

.photo img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

/* 文字樣式 */
.caption {
  margin-top: 15px;
  text-align: center;
  font-size: 16px;
  color: #6d5d5d;
  font-family: 'Courier New', 'Microsoft JhengHei', monospace;
  word-break: break-all;
}

/* 按鈕樣式：懸浮時才顯示刪除按鈕，看起來更乾淨 */
.controls {
  position: absolute;
  top: 5px;
  right: 5px;
  z-index: 10;
  opacity: 0;
  transition: opacity 0.2s;
}

.polaroid:hover .controls {
  opacity: 1;
}

.delete-btn {
  background: rgba(0, 0, 0, 0.3);
  color: white;
  border: none;
  border-radius: 50%;
  width: 24px;
  height: 24px;
  cursor: pointer;
  font-size: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.delete-btn:hover {
  background: #a00;
}

/* 愛心按鈕位置放置在底部右側 */
.like-btn {
  position: absolute;
  bottom: 10px;
  left: 15px;
  cursor: pointer;
}

/* 互動效果 */
.swiper-slide:hover .polaroid {
  transform: rotate(-1.5deg) scale(1.02);
}
</style>