<template>
  <div class="mb-1">
    <div class="flex justify-between">
      <span class="block text-sm font-medium leading-6 text-gray-900">{{
        label
      }}</span>

      <span class="mt-2 text-xs text-red-600 h-4">
        {{ error }}
      </span>
    </div>
    <slot />
  </div>
</template>

<script setup lang="ts">
withDefaults(defineProps<{ error: string; label: string }>(), { error: "" });
</script>
