<script setup>
import { v4 as uuid } from 'uuid'
import { ref, watch } from 'vue'
const props = defineProps({
  id: {
    type: String,
    default() {
      return `select-input-${uuid()}`
    }
  },
  error: String,
  label: String,
  modelValue: [String, Number, Boolean]
})

const selected = ref(props.modelValue)

const emit = defineEmits(['update:modelValue'])

function focus() {
  input.value.focus()
}
function select() {
  input.value.select()
}
watch(selected, (selected) => {
  emit('update:modelValue', selected)
})
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
    <select
      :id="id"
      ref="input"
      v-model="selected"
      v-bind="{ ...$attrs, class: null }"
      class="form-select"
      :class="
        error ? ['border-red-500', 'focus:ring', 'focus:ring-red-200'] : []
      "
    >
      <slot />
    </select>

    <div v-if="error" class="mt-2 text-sm text-red-700">{{ error }}</div>
  </div>
</template>
