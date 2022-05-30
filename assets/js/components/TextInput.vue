<script setup>
import { v4 as uuid } from 'uuid'
import { ref } from 'vue'
const input = ref(null)

defineEmits(['update:modelValue'])

defineProps({
  id: {
    type: String,
    default() {
      return `text-input-${uuid()}`
    }
  },
  type: {
    type: String,
    default: 'text'
  },
  error: String,
  label: String,
  modelValue: String
})

function focus() {
  input.value.focus()
}
function select() {
  input.value.select()
}
function setSelectionRange(start, end) {
  input.value.setSelectionRange(start, end)
}
</script>
<script>
export default {
  inheritAttrs: false
}
</script>

<template>
  <div :class="$attrs.class">
    <label v-if="label" class="mb-2 block select-none text-gray-700" :for="id"
      >{{ label }}:</label
    >
    <input
      :id="id"
      ref="input"
      v-bind="{ ...$attrs, class: null }"
      class="relative block w-full appearance-none rounded border bg-white p-2 text-left font-sans leading-normal text-gray-700 placeholder:text-gray-500 placeholder:opacity-100 focus:border-indigo-400 focus:outline-none focus:ring active:outline-none"
      :class="
        error ? ['border-red-500', 'focus:ring', 'focus:ring-red-200'] : []
      "
      :type="type"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
    />
    <div v-if="error" class="mt-2 text-sm text-red-700">{{ error }}</div>
  </div>
</template>
