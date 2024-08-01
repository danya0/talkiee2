<template>
  <div class="pb-8 z-30">
    <MyHeader
      class="z-40 fixed left-1/2 -translate-x-1/2 flex justify-start py-2"
    />
    <Navbar />
    <slot />
  </div>
</template>

<script setup lang="ts">
import MyHeader from '~/components/header/myHeader.vue'
</script>
