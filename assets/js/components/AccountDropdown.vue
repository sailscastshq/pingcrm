<template>
  <button type="button" @click="show = !show">
    <slot />
    <div class="fixed inset-0 bg-black opacity-20" v-if="show"></div>
    <div class="absolute right-7" v-if="show" @click.stop="show = !autoClose">
      <slot name="dropdown" />
    </div>
  </button>
</template>
<script setup>
import { ref, onMounted } from 'vue'
let show = ref(false)

defineProps({
  autoClose: {
    type: Boolean,
    default: true
  }
})
onMounted(() => {
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      console.log('Got here')
      show.value = false
    }
  })
})
</script>
