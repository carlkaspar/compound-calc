import { createSharedComposable } from "@vueuse/core";
import type { CompoundInterestForm } from "../types/compound-interest-form.model";
import { computed, ref } from "vue";
import {
  calculateGrowthByYear,
  calculateTotalContributionsByYear,
} from "../utils/compound-formula.util";

type State = {
  totalFutureValue: number;
  totalContributions: number;
  futureValueByYear: number[];
  contributionsValueByYear: number[];
};

export default createSharedComposable(() => {
  const state = ref<State | undefined>(undefined);

  function calculate(values: CompoundInterestForm | undefined) {
    if (!values) {
      state.value = undefined;
      return;
    }

    const futureValueByYear = calculateGrowthByYear(values);
    const contributionsValueByYear = calculateTotalContributionsByYear(values);

    state.value = {
      totalContributions:
        contributionsValueByYear[contributionsValueByYear.length - 1],
      totalFutureValue: futureValueByYear[futureValueByYear.length - 1],
      futureValueByYear,
      contributionsValueByYear,
    };
  }

  return {
    state: computed(() => state.value),
    calculate,
  };
});
