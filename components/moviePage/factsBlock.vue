<template>
  <div class="flex flex-col overflow-y-hidden">
    <div class="flex items-center justify-between mb-4">
      <label>
        <input v-model="noSpoiler" type="checkbox" />
        Без спойлеров
      </label>
    </div>
    <div class="overflow-y-auto">
      <ol class="list-decimal ml-7">
        <li
          :class="[
            'tracking-normal leading-relaxed my-2',
            fact.spoiler && noSpoiler ? 'blur-sm' : '',
          ]"
          v-for="fact in props.facts"
        >
          {{ fact.text }}
        </li>
      </ol>
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { MovieFact } from '~/types/movie'

const props = defineProps<{ facts: MovieFact[] }>()
const noSpoiler = ref<boolean>(true)
</script>
