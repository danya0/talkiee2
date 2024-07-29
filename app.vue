<template>
  <NuxtLayout>
    <NuxtPage :keepalive="{ include: 'index' }" />
  </NuxtLayout>
</template>

<script setup lang="ts">
useHead({
  bodyAttrs: {
    class: 'bg-dark-bg text-white',
  },
})
</script>

<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.3s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
}
</style>
