<template>
  <div class="relative mt-2 rounded-md shadow-sm">
    <div
      class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3"
    >
      <span class="text-gray-500 sm:text-sm">{{ CURRENCY.symbol }}</span>
    </div>
    <label :for="label.toLowerCase()" class="sr-only">{{ label }}</label>
    <input
      v-model="model"
      type="text"
      :name="label.toLowerCase()"
      id="price"
      class="block w-full rounded-md border-0 py-1.5 pl-7 pr-12 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
      placeholder="0.00"
      aria-describedby="price-currency"
    />
    <div
      class="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3"
    >
      <span class="text-gray-500 sm:text-sm" id="price-currency">{{
        CURRENCY.abbreviation
      }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
const CURRENCY = { abbreviation: "EUR", symbol: "€" } as const;

const model = defineModel<string>();

defineProps<{ label: string }>();
</script>
