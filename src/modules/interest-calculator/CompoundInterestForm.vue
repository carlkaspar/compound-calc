<template>
  <div class="flex flex-col gap-4">
    <input-wrapper label="Initial investment" :error="errors.initialInvestment">
      <currency-input
        :model-value="initialInvestment"
        label="Initial investment"
        :name="FORM_FIELD_NAME.initialInvestment"
        @on-model-value-update="(val) => (initialInvestment = val)"
      />
    </input-wrapper>

    <input-wrapper
      label="Contribution frequency"
      :error="errors.contributionFrequency"
    >
      <radio-input
        v-model="contributionFrequency"
        :values="FREQUENCY_VALUES as any"
        parent-label="Contribution frequency"
        input-name="contribution_frequency"
        @on-model-value-update="(value) => (contributionFrequency = value)"
      />
    </input-wrapper>

    <input-wrapper
      label="Contribution amount"
      :error="errors.contributionAmount"
    >
      <currency-input
        :model-value="contributionAmount"
        label="Contribution amount"
        :name="FORM_FIELD_NAME.contributionAmount"
        @on-model-value-update="(val) => (contributionAmount = val)"
      />
    </input-wrapper>

    <input-wrapper label="Years of growth" :error="errors.years">
      <number-input
        :model-value="years"
        label="Years of growth"
        :name="FORM_FIELD_NAME.years"
        @on-update-model-value="(val) => (years = val)"
      />
    </input-wrapper>

    <input-wrapper
      label="Estimated average return"
      :error="errors.estimatedReturn"
    >
      <number-input
        :model-value="estimatedReturn"
        label="Estimated average return"
        :name="FORM_FIELD_NAME.estimatedReturn"
        @on-update-model-value="(val) => (estimatedReturn = val)"
      />
    </input-wrapper>
  </div>
</template>

<script setup lang="ts">
import InputWrapper from "@/shared/inputs/InputWrapper";
import CurrencyInput from "@/shared/inputs/CurrencyInput";
import NumberInput from "@/shared/inputs/NumberInput";
import useGenericRadioInput from "@/shared/inputs/RadioInput";
import {
  useCompoundInterestForm,
  FORM_FIELD_NAME,
} from "./composables/useCompoundInterestForm";

const FREQUENCY_VALUES = [
  { value: "YEARLY", label: "Yearly" },
  { value: "MONTHLY", label: "Monthly" },
] as const;

const RadioInput =
  useGenericRadioInput<(typeof FREQUENCY_VALUES)[number]["value"]>();

const {
  initialInvestment,
  contributionFrequency,
  contributionAmount,
  years,
  estimatedReturn,
  errors,
} = useCompoundInterestForm();
</script>
