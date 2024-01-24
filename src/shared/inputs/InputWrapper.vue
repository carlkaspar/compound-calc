<template>
  <div>
    <span class="block text-sm font-medium leading-6 text-gray-900">{{
      label
    }}</span>
    <slot />
    <p class="mt-2 text-sm text-red-600">
      {{ error }}
    </p>
  </div>
</template>

<script setup lang="ts">
withDefaults(defineProps<{ error: string; label: string }>(), { error: "" });
</script>
