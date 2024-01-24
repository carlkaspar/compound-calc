<template>
  <div>
    <label class="sr-only">{{ parentLabel }}</label>
    <fieldset class="mt-4">
      <div class="space-y-4 sm:flex sm:items-center sm:space-x-10 sm:space-y-0">
        <div
          v-for="value in values"
          :key="value.value"
          class="flex items-center"
        >
          <input
            v-model="model"
            :id="value.value"
            :name="inputName"
            type="radio"
            :value="value.value"
            class="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
          />
          <label
            :for="value.value"
            class="ml-3 block text-sm font-medium leading-6 text-gray-900"
            >{{ value.label }}</label
          >
        </div>
      </div>
    </fieldset>
  </div>
</template>

<script setup lang="ts">
const model = defineModel();

defineProps<{
  values: { value: string; label: string }[];
  parentLabel: string;
  inputName: string;
}>();
</script>
