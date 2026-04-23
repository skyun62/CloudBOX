# CloudBOX家飾選物店 Home Deco Shop

**A home decor e-commerce front-end practice project built with Vue 3.**

🔗 Live Demo → https://your-github-username.github.io/home-deco-shop/

---

## 專案介紹

這是一個以「家飾選物」為主題的前端練習專案，結合了商品瀏覽、風格展示與完整購物流程，從一份靜態 HTML / Bootstrap 原型，逐步重構為 Vue 3 元件化架構。

整個開發過程涵蓋：

- 將原始 HTML + CSS 轉換成 Vue SFC（Single File Component）
- 抽取共用邏輯為可重複使用的 components
- 使用 Vue Router 建立多頁面 SPA 流程（購物車四步驟）
- 以 `localStorage` 實作跨頁狀態管理

---

## 技術棧

| 類別 | 使用技術 |
|------|----------|
| 框架 | Vue 3 (`<script setup>`) |
| 路由 | Vue Router 4 |
| CSS 框架 | Bootstrap 5 |
| 圖示 | Bootstrap Icons |
| 建置工具 | Vite |
| 部署 | GitHub Pages |

---

## 功能說明

### 首頁（HomeView）

| 區塊 | 說明 |
|------|------|
| Carousel 輪播 | Bootstrap Carousel，展示風格情境圖與品牌標語 |
| 商品卡片列表 | `ShoppingCard.vue`，統一圖片規格（`object-fit: cover`），加入購物車後自動跳轉 |
| 風格介紹區塊 | 品牌理念與選品風格說明 |
| 圖文交錯區塊 | `TextImageBlock.vue`，支援 `:reverse` prop 切換左右版型 |
| Google Maps 聯絡 | `MapContact.vue`，地圖 iframe + 聯絡表單 |

### 購物車流程（4 步驟 SPA）

```
確認購物車 → 付款與運送 → 填寫資料 → 完成訂單
 /cart/step1    /cart/step2    /cart/step3    /cart/step4
```

| 步驟 | 主要功能 |
|------|----------|
| Step 1 | 顯示購物清單、調整數量（+ / −）、刪除單品、清空購物車、計算總金額 |
| Step 2 | 選擇付款方式（宅配 / 超商 / 自取）與運送方式，儲存至 `localStorage` |
| Step 3 | 填寫收件人姓名、電話、Email、地址，儲存至 `localStorage` |
| Step 4 | 顯示完整訂單明細與收件資料確認 |

---

## 元件架構

```
src/
├── views/
│   ├── HomeView.vue
│   ├── CartStep1.vue
│   ├── CartStep2.vue
│   ├── CartStep3.vue
│   └── CartStep4.vue
│
└── components/
    ├── 共用
    │   ├── CartProgress.vue     # 購物車步驟進度條（1–4）
    │   └── CartSummary.vue      # 金額摘要（數量、小計、運費、總計）
    │
    └── 首頁區塊
        ├── ShoppingCard.vue     # 商品卡片（統一圖片尺寸、加入購物車）
        ├── TextImageBlock.vue   # 圖文交錯區塊（支援 reverse）
        └── MapContact.vue       # 地圖 + 聯絡表單
```

---

## 資料流（localStorage）

```
首頁點擊「Add to cart」
        ↓
  cart（陣列）寫入 localStorage
        ↓
  自動導向 /cart/step1
        ↓
Step 2 儲存 orderInfo.payMethod / deliveryMethod
        ↓
Step 3 儲存 orderInfo.receiver（姓名、電話、地址…）
        ↓
Step 4 讀取 cart + orderInfo 顯示完整訂單
```

---

## 商品資料結構

商品資料以陣列形式統一管理於父元件，傳遞至 `ShoppingCard.vue`：

```js
const products = [
  {
    img: lamp2,           // import 自 src/assets/img/
    smallTitle: '商品名稱',
    description: '商品描述',
    price: 1200,
  },
  // ...
]
```

---

## 本地啟動

```bash
# 安裝依賴
npm install

# 啟動開發伺服器
npm run dev

# 建置正式版
npm run build
```

---

## 設計說明

本專案以「溫暖、質感、北歐簡約」為視覺核心，設計決策如下：

- **商品卡片**：統一 `height: 220px` + `object-fit: cover`，確保所有商品圖片規格一致，視覺整齊
- **主色調**：`#ba9393`（玫瑰粉）貫穿價格標示、按鈕邊框與 hover 效果，呼應溫暖居家氛圍
- **hover 互動**：卡片 `transform: scale(1.05)` 輕微放大，增加選品的探索感
- **版型節奏**：圖文交錯的 `TextImageBlock` 交替左右對齊，避免單調的垂直堆疊

---

## 作者

**skyun_62** — UI/UX Designer & Front-end Learner
git add README.md
git commit
git push
