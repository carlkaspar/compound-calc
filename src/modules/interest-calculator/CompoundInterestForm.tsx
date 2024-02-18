import useGenericRadioInput from "@/shared/inputs/RadioInput";
import { defineComponent } from "vue";
import {
  FORM_FIELD_NAME,
  useCompoundInterestForm,
} from "./composables/useCompoundInterestForm";
import InputWrapper from "@/shared/inputs/InputWrapper";
import CurrencyInput from "@/shared/inputs/CurrencyInput";
import NumberInput from "@/shared/inputs/NumberInput";

const FREQUENCY_VALUES = [
  { value: "YEARLY", label: "Yearly" },
  { value: "MONTHLY", label: "Monthly" },
] as const;

const RadioInput =
  useGenericRadioInput<(typeof FREQUENCY_VALUES)[number]["value"]>();

export default defineComponent(() => {
  const {
    initialInvestment,
    contributionFrequency,
    contributionAmount,
    years,
    estimatedReturn,
    errors,
  } = useCompoundInterestForm();

  return () => (
    <div>
      <div class="flex flex-col gap-4">
        <InputWrapper
          label="Initial investment"
          error={errors.value.initialInvestment}
        >
          <CurrencyInput
            modelValue={initialInvestment.value}
            label="Initial investment"
            name={FORM_FIELD_NAME.initialInvestment}
            onOnModelValueUpdate={(val) => (initialInvestment.value = val)}
          />
        </InputWrapper>

        <InputWrapper
          label="Contribution frequency"
          error={errors.value.contributionFrequency}
        >
          <RadioInput
            modelValue={contributionFrequency.value}
            values={FREQUENCY_VALUES as any}
            parentLabel="Contribution frequency"
            inputName="contribution_frequency"
            onOnModelValueUpdate={(value) =>
              (contributionFrequency.value = value)
            }
          />
        </InputWrapper>

        <InputWrapper
          label="Contribution amount"
          error={errors.value.contributionAmount}
        >
          <CurrencyInput
            modelValue={contributionAmount.value}
            label="Contribution amount"
            name={FORM_FIELD_NAME.contributionAmount}
            onOnModelValueUpdate={(val) => (contributionAmount.value = val)}
          />
        </InputWrapper>

        <InputWrapper label="Years of growth" error={errors.value.years}>
          <NumberInput
            modelValue={years.value}
            label="Years of growth"
            name={FORM_FIELD_NAME.years}
            onOnUpdateModelValue={(val) => (years.value = val)}
          />
        </InputWrapper>

        <InputWrapper
          label="Estimated average return"
          error={errors.value.estimatedReturn}
        >
          <NumberInput
            modelValue={estimatedReturn.value}
            label="Estimated average return"
            name={FORM_FIELD_NAME.estimatedReturn}
            onOnUpdateModelValue={(val) => (estimatedReturn.value = val)}
          />
        </InputWrapper>
      </div>
    </div>
  );
});
