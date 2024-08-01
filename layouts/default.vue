<template>
  <div class="pb-8 z-30">
    <MyHeader
      ref="headerEl"
      class="transition-colors z-50 fixed left-1/2 -translate-x-1/2 flex justify-start py-2"
    />
    <Navbar />
    <slot />
  </div>
</template>

<script setup lang="ts">
import MyHeader from '~/components/header/myHeader.vue'

const headerEl = ref()

onMounted(() => {
  window.addEventListener('scroll', (e) => {
    const el = headerEl.value?.$el
    if (!el) return
    if (window.scrollY > 30) {
      el.classList.add('bg-white')
    } else {
      el.classList.remove('bg-white')
    }
  })
})
</script>
