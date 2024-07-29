<template>
  <div>
    <MyHeader />
    <slot />
  </div>
</template>
<script setup lang="ts">
import MyHeader from '~/components/header/myHeader.vue'
</script>
