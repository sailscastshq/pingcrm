<script setup>
import { Link } from '@inertiajs/inertia-vue3'
defineProps({
  links: Array
})
</script>
<template>
  <div v-if="links.length > 3">
    <div class="-mb-1 flex flex-wrap">
      <template v-for="(link, key) in links">
        <div
          v-if="link.url === null"
          :key="key"
          class="mb-1 mr-1 rounded border px-4 py-3 text-sm leading-4 text-gray-400"
        >
          {{ link.label }}
        </div>
        <Link
          v-else
          :key="`link-${key}`"
          class="mb-1 mr-1 rounded border px-4 py-3 text-sm leading-4 hover:border-indigo-500 hover:bg-white hover:text-indigo-500 focus:border-indigo-500 focus:text-indigo-500"
          :class="{ 'bg-white': link.active }"
          :href="link.url"
          >{{ link.label }}</Link
        >
      </template>
    </div>
  </div>
</template>
