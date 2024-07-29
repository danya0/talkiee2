<template>
  <div class="">
    <NuxtRouteAnnouncer />
    <h1 class="text-6xl">Hello world! {{value}}</h1>
    <button @click="value++">Plus</button>
    <button @click="value--">Minus</button>
  </div>
</template>

<script setup lang="ts">
const value = useState(() => 12)
</script>
