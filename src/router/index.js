import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '@/views/HomeView.vue'
import AboutView from '@/views/AboutView.vue'
import AlbumView from '@/views/AlbumView.vue'
import PhotoView from '@/views/PhotoView.vue'
import BlogDetail from '@/views/BlogDetail.vue'
import CraftsmanDetail from '@/views/CraftsmanDetail.vue'

import CartStep1 from '@/views/CartStep1.vue'
import CartStep2 from '@/views/CartStep2.vue'
import CartStep3 from '@/views/CartStep3.vue'
import CartStep4 from '@/views/CartStep4.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  scrollBehavior() {
    return { top: 0 }
  },
  routes: [
    {
      path: '/',//網址路徑
      name: 'home',
      component: HomeView,//這是要用變數而非字串，連到哪裡
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView,
    },
    //當設定路徑參數後，如果沒有帶參數的話就會進不了 
    {
      path: '/album',//透過:id可以自定義路徑參數，對應userview裡面的id
      name: 'album',
      component: AlbumView,
    },
    {
      path: '/photo',
      name: 'photo',
      component: PhotoView,
    },
    {
      path: '/craftsman/:id', name: 'CraftsmanDetail', component: CraftsmanDetail
    },
    {
      path: '/blog/:id', name: 'BlogDetail', component: BlogDetail
    },
    { path: '/cart/step1', name: 'cart-step1', component: CartStep1 },
    { path: '/cart/step2', name: 'cart-step2', component: CartStep2 },
    { path: '/cart/step3', name: 'cart-step3', component: CartStep3 },
    { path: '/cart/step4', name: 'cart-step4', component: CartStep4 },
  ],
})



export default router
