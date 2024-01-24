<template>
  <div>
    <label :for="inputName" class="sr-only">{{ label }}</label>
    <div class="mt-2">
      <input
        v-model="model"
        type="number"
        :name="inputName"
        :id="label"
        class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { inputNameFromLabel } from "./util";

const model = defineModel<number>();
const inputName = computed(() => inputNameFromLabel(props.label));

const props = defineProps<{
  label: string;
}>();
</script>
