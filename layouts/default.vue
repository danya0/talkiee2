<template>
  <div class="pb-8 sm:pl-8 z-30">
    <MyHeader
      ref="headerEl"
      class="transition-colors z-50 fixed left-1/2 -translate-x-1/2 flex justify-start py-2"
    >
      <TopNavbar class="flex sm:hidden max-w-[230px]" />
    </MyHeader>
    <Navbar class="hidden sm:block" />
    <slot />
  </div>
</template>

<script setup lang="ts">
import MyHeader from '~/components/header/myHeader.vue'
import TopNavbar from '~/components/navbar/topNavbar.vue'

const headerEl = ref()

onMounted(() => {
  window.addEventListener('scroll', () => {
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
