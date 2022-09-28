<script setup>
import { ref } from 'vue'
import { useEventListener } from '@/composables/event'
let show = ref(false)
defineProps({
  autoClose: {
    type: Boolean,
    default: true
  }
})

useEventListener(document, 'keydown', (e) => {
  if (e.key === 'Escape') {
    show.value = false
  }
})
</script>
<template>
  <button type="button" @click="show = !show">
    <slot />
    <div class="fixed inset-0 bg-black opacity-20" v-if="show"></div>
    <div class="absolute right-7" v-if="show" @click.stop="show = !autoClose">
      <slot name="dropdown" />
    </div>
  </button>
</template>
