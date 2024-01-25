<template>
  <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
    <div class="mx-auto max-w-3xl flex flex-col gap-4">
      <h1 class="mt-8">Compound interest calculator</h1>

      <compound-interest-form class="max-w-xl" />

      <div v-if="state" class="flex flex-col">
        <span
          >Total amount of contributions:
          <b>{{ state.totalContributions }}</b></span
        >
        <span
          >Total future value: <b>{{ state.totalFutureValue }}</b></span
        >
      </div>

      <compound-interest-chart
        v-if="state"
        :future-value-by-year="state.futureValueByYear"
        :contributions-by-year="state.contributionsValueByYear"
        currency="€"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import CompoundInterestForm from "./CompoundInterestForm.vue";
import CompoundInterestChart from "./CompoundInterestChart.vue";
import useCompoundInterestCalculator from "./composables/useCompoundInterestCalculator";

const { state } = useCompoundInterestCalculator();
</script>
