<template>
  <div class="rounded-xl overflow-hidden flex items-stretch gap-x-1">
    <label
      class="has-[:checked]:bg-[#304c7a] block bg-[#4a6fb5] cursor-pointer transition-colors"
      v-for="item in selectedTypes"
      :key="item.key"
    >
      <input
        v-model="pick"
        class="appearance-none absolute"
        :value="item.key"
        type="radio"
      />
      <span class="block p-4 border-black">{{ item.name }}</span>
    </label>
  </div>
</template>

<script lang="ts" setup>
const selectedTypes = ref([
  { key: 'all', name: 'Все' },
  { key: 'movie', name: 'Фильмы' },
  { key: 'series', name: 'Сериалы' },
])
const pick = defineModel()
</script>
