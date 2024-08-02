<template>
  <section class="mt-6 sm:mt-16">
    <h3 class="text-3xl mb-4">{{ props.title }}</h3>
    <div class="flex flex-col gap-y-4">
      <slot />
    </div>
  </section>
</template>

<script lang="ts" setup>
const props = defineProps<{ title: string }>()
</script>
