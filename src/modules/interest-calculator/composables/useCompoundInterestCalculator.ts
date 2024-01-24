import { createSharedComposable } from "@vueuse/core";
import type { CompoundInterestForm } from "../types/compound-interest-form.model";
import { computed, ref } from "vue";

type State = {
  totalFutureValue: number;
  totalContributions: number;
};

const CONTRIBUTIONS_PER_YEAR = {
  MONTHLY: 12,
  YEARLY: 1,
} as const satisfies {
  [Key in CompoundInterestForm["contributionFrequency"]]: number;
};

export default createSharedComposable(() => {
  const state = ref<State | undefined>(undefined);

  function calculate(values: CompoundInterestForm | undefined) {
    if (!values) {
      state.value = undefined;
      return;
    }

    const {
      initialInvestment,
      contributionAmount,
      contributionFrequency,
      years,
    } = values;

    state.value = {
      totalContributions:
        initialInvestment +
        contributionAmount *
          CONTRIBUTIONS_PER_YEAR[
            contributionFrequency as keyof typeof CONTRIBUTIONS_PER_YEAR
          ] *
          years,
      totalFutureValue: 0,
    };
  }

  return {
    state: computed(() => state.value),
    calculate,
  };
});
