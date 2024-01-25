<template>
  <compound-interest-form />

  <compound-interest-chart
    v-if="state"
    :future-value-by-year="state.futureValueByYear"
    :contributions-by-year="state.contributionsValueByYear"
    currency="€"
  />
</template>

<script setup lang="ts">
import CompoundInterestForm from "./CompoundInterestForm.vue";
import CompoundInterestChart from "./CompoundInterestChart.vue";
import useCompoundInterestCalculator from "./composables/useCompoundInterestCalculator";

const { state } = useCompoundInterestCalculator();
</script>
