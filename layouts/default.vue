<template>
  <div>
    <MyHeader class="mb-8" />
    <slot />
  </div>
</template>
<script setup lang="ts">
import MyHeader from '~/components/header/myHeader.vue'
</script>
