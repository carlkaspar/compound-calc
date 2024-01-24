import { toTypedSchema } from "@vee-validate/zod";
import { useField, useForm } from "vee-validate";
import {
  CompoundInterestFormSchema,
  type CompoundInterestForm,
} from "../types/compound-interest-form.model";
import { watch } from "vue";
import useCompoundInterestCalculator from "./useCompoundInterestCalculator";

const initialValues: CompoundInterestForm = {
  initialInvestment: 5000,
  contributionFrequency: "MONTHLY",
  contributionAmount: 500,
  years: 30,
  estimatedReturn: 8,
};

export const FORM_FIELD_NAME = {
  initialInvestment: "initialInvestment",
  contributionFrequency: "contributionFrequency",
  contributionAmount: "contributionAmount",
  years: "years",
  estimatedReturn: "estimatedReturn",
} as const;

export function useCompoundInterestForm() {
  const { calculate } = useCompoundInterestCalculator();

  const { errors, values, handleSubmit } = useForm({
    validationSchema: toTypedSchema(CompoundInterestFormSchema),
    initialValues,
  });

  watch(values, () => submit());

  const submit = handleSubmit((values) => calculate(values));

  const { value: initialInvestment, errorMessage: initialInvestmentError } =
    useField<CompoundInterestForm["initialInvestment"]>(
      FORM_FIELD_NAME.initialInvestment,
    );

  const { value: contributionFrequency } = useField<
    CompoundInterestForm["contributionFrequency"]
  >(FORM_FIELD_NAME.contributionFrequency);

  const { value: contributionAmount } = useField<
    CompoundInterestForm["contributionAmount"]
  >(FORM_FIELD_NAME.contributionAmount);

  const { value: years } = useField<CompoundInterestForm["years"]>(
    FORM_FIELD_NAME.years,
  );

  const { value: estimatedReturn } = useField<
    CompoundInterestForm["estimatedReturn"]
  >(FORM_FIELD_NAME.estimatedReturn);

  return {
    initialInvestment,
    contributionFrequency,
    contributionAmount,
    years,
    estimatedReturn,
    errors,
  };
}
