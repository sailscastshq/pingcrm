<script setup>
import { ref, watch } from 'vue'
const file = ref(null)

const emit = defineEmits(['update:modelValue'])
defineProps({
  modelValue: File,
  label: String,
  accept: String,
  errors: {
    type: Array,
    default: () => []
  }
})
function browse() {
  file.click()
}

watch(emit.modelValue, (value) => {
  if (!value) {
    file.value = ''
  }
})

function change(e) {
  emit('update:modelValue', e.target.files[0])
}
function remove() {
  emit('update:modelValue', null)
}
function filesize(size) {
  var i = Math.floor(Math.log(size) / Math.log(1024))
  return (
    (size / Math.pow(1024, i)).toFixed(2) * 1 +
    ' ' +
    ['B', 'kB', 'MB', 'GB', 'TB'][i]
  )
}
</script>
<template>
  <div>
    <label v-if="label" class="mb-2 block select-none text-gray-700"
      >{{ label }}:</label
    >
    <div
      class="relative block w-full appearance-none rounded border bg-white p-0 text-left font-sans leading-normal text-gray-700 focus:border-indigo-400 focus:ring"
      :class="{ error: errors.length }"
    >
      <input
        ref="file"
        type="file"
        :accept="accept"
        class="hidden"
        @change="change"
      />
      <div v-if="!modelValue" class="p-2">
        <button
          type="button"
          class="rounded-sm bg-gray-500 px-4 py-1 text-xs font-medium text-white hover:bg-gray-700"
          @click="browse"
        >
          Browse
        </button>
      </div>
      <div v-else class="flex items-center justify-between p-2">
        <div class="flex-1 pr-1">
          {{ modelValue.name }}
          <span class="text-xs text-gray-500"
            >({{ filesize(modelValue.size) }})</span
          >
        </div>
        <button
          type="button"
          class="rounded-sm bg-gray-500 px-4 py-1 text-xs font-medium text-white hover:bg-gray-700"
          @click="remove"
        >
          Remove
        </button>
      </div>
    </div>
    <div v-if="errors.length" class="mt-2 text-sm text-red-700">
      {{ errors[0] }}
    </div>
  </div>
</template>
