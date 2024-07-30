<template>
  <Container>
    <header class="flex flex-col items-center">
      <Logo center class="mb-5" />
      <ul class="flex gap-x-4">
        <li><router-link to="/">Главная</router-link></li>
        <li><router-link to="/favorite">Избранное</router-link></li>
      </ul>
    </header>
  </Container>
</template>
<script setup lang="ts"></script>
