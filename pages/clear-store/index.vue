<template>
  <Container class="pt-20">
    <button
      class="border border-black rounded-xl bg-white text-black px-3 py-1"
      @click="clear"
    >
      Remove Local Store
    </button>
  </Container>
</template>

<script setup lang="ts">
const router = useRouter()
const clear = () => {
  if (!confirm('Remove local store?')) return
  LsParser.clear()
  router.push('/')
}
</script>
