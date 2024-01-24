<template>
  <compound-interest-form />

  {{ state }}
</template>

<script setup lang="ts">
import CompoundInterestForm from "./CompoundInterestForm.vue";
import useCompoundInterestCalculator from "./composables/useCompoundInterestCalculator";

const { state } = useCompoundInterestCalculator();
</script>
