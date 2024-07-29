<template>
  <Container>
    <section class="flex flex-col items-center gap-y-5">
      <SearchBox class="w-1/2" v-model="searchText" />
    </section>
  </Container>
</template>

<script lang="ts" setup>
const searchText = ref('')
</script>
