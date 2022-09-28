<template>
  <button
    :disabled="loading"
    class="flex items-center focus:outline-none active:outline-none"
  >
    <p v-if="loading">loading...</p>
    <slot v-else />
  </button>
</template>

<script setup>
defineProps({
  loading: Boolean
})
</script>
