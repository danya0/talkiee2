<template>
  <div class="pt-5 pb-8">
    <MyHeader class="mb-8" />
    <Navbar />
    <slot />
  </div>
</template>

<script setup lang="ts">
import MyHeader from '~/components/header/myHeader.vue'
</script>
