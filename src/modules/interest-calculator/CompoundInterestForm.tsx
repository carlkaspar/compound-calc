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
            onModelValueUpdate={(val) =>
              (initialInvestment.value = val as number)
            }
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
            onModelValueUpdate={(value) =>
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
            onModelValueUpdate={(val) =>
              (contributionAmount.value = val as number)
            }
          />
        </InputWrapper>

        <InputWrapper label="Years of growth" error={errors.value.years}>
          <NumberInput
            modelValue={years.value}
            label="Years of growth"
            name={FORM_FIELD_NAME.years}
            onUpdateModelValue={(val) => (years.value = val as number)}
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
            onUpdateModelValue={(val) =>
              (estimatedReturn.value = val as number)
            }
          />
        </InputWrapper>
      </div>
    </div>
  );
});
