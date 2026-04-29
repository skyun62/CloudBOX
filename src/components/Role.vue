<script setup>

</script>

<template>
  <div class="col-12 col-lg text-center mb-5">
    <slot name="avatar">
      <!-- 預設：灰色圓形 -->
      <div class="circle rounded-circle bg-secondary mx-auto mb-3"></div>
    </slot>
    <h2 class="fs-2">
      <slot name="title">預設標題</slot>
    </h2>
    <p>
      <slot name="content">這是預設的內文內容。</slot>
    </p>
    <slot name="action">
      <button type="button" class="btn btn-secondary">View detail</button>
    </slot>
  </div>
</template>


<style scoped>
.circle {
  width: 150px;
  height: 150px;
}
</style>