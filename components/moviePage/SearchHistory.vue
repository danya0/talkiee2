<template>
  <div class="flex flex-wrap items-center gap-x-1 gap-y-1 mb-6">
    <span>Недавно искали:</span>
    <span
      v-for="item in history"
      :key="item"
      class="text-white/70 inline-block hover:underline py-1 px-2 rounded-md bg-black/40 cursor-pointer"
      @click="emits('research', item)"
    >
      {{ item }}
    </span>
    <span
      class="underline cursor-pointer text-white/80"
      @click="emits('clearHistory')"
    >
      Очистить историю
    </span>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps<{ history: string[] }>()
const emits = defineEmits(['clearHistory', 'research'])
</script>
