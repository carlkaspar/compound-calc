<template>
  <div>
    <h1>Compound interest calculator</h1>

    <input-wrapper label="Initial investment" :error="errors.initialInvestment">
      <currency-input
        v-model="initialInvestment"
        label="Initial investment"
        :name="FORM_FIELD_NAME.initialInvestment"
      />
    </input-wrapper>

    <input-wrapper
      label="Contribution frequency"
      :error="errors.contributionFrequency"
    >
      <radio-input
        v-model="contributionFrequency"
        :values="FREQUENCY_VALUES"
        parent-label="Contribution frequency"
        input-name="contribution_frequency"
      />
    </input-wrapper>

    <input-wrapper
      label="Contribution amount"
      :error="errors.contributionAmount"
    >
      <currency-input
        v-model="contributionAmount"
        label="Contribution amount"
        :name="FORM_FIELD_NAME.contributionAmount"
      />
    </input-wrapper>

    <input-wrapper label="Years of growth" :error="errors.years">
      <number-input
        v-model="years"
        label="Years of growth"
        :name="FORM_FIELD_NAME.years"
      />
    </input-wrapper>

    <input-wrapper
      label="Estimated average return"
      :error="errors.estimatedReturn"
    >
      <number-input
        v-model="estimatedReturn"
        label="Estimated average return"
        :name="FORM_FIELD_NAME.estimatedReturn"
      />
    </input-wrapper>
  </div>
</template>

<script setup lang="ts">
import InputWrapper from "@/shared/inputs/InputWrapper.vue";
import CurrencyInput from "@/shared/inputs/CurrencyInput.vue";
import NumberInput from "@/shared/inputs/NumberInput.vue";
import RadioInput from "@/shared/inputs/RadioInput.vue";
import {
  useCompoundInterestForm,
  FORM_FIELD_NAME,
} from "./composables/useCompoundInterestForm";

const FREQUENCY_VALUES = [
  { value: "YEARLY", label: "Yearly" },
  { value: "MONTHLY", label: "Monthly" },
] as const;

const {
  initialInvestment,
  contributionFrequency,
  contributionAmount,
  years,
  estimatedReturn,
  errors,
} = useCompoundInterestForm();
</script>
