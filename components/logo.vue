<template>
  <div :class="{ 'text-center': props.center }">
    <h1 class="logo-title text-[6rem] -mb-6 text-[#4a6fb5]">Talkiee</h1>
    <h2 class="logo-subtitle text-3xl text-[#50688c]">Домашний кинотеатр</h2>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps<{ center?: boolean }>()
</script>
