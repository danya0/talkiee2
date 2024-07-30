<template>
  <div
    :class="[
      'h-[20px] w-[20px] flex items-center justify-center border-2 rounded-full p-4',
      borderColor,
    ]"
  >
    {{ props.rating }}
  </div>
</template>

<script lang="ts" setup>
const props = defineProps<{ rating: number }>()
const borderColor = computed(() => {
  if (props.rating > 8) {
    return 'border-green-500'
  } else if (props.rating > 5) {
    return 'border-orange-500'
  } else {
    return 'border-red-500'
  }
})
</script>
