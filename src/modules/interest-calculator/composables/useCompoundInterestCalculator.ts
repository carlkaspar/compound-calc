import { createSharedComposable } from "@vueuse/core";
import type { CompoundInterestForm } from "../types/compound-interest-form.model";
import { computed, ref } from "vue";
import {
  calculateGrowth,
  calculateTotalContributions,
} from "../utils/compound-formula.util";

type State = {
  totalFutureValue: number;
  totalContributions: number;
  valueByYear: number[];
};

export default createSharedComposable(() => {
  const state = ref<State | undefined>(undefined);

  function calculate(values: CompoundInterestForm | undefined) {
    if (!values) {
      state.value = undefined;
      return;
    }

    const valueByYear = calculateGrowth(values);

    state.value = {
      totalContributions: calculateTotalContributions(values),
      totalFutureValue: valueByYear[valueByYear.length - 1],
      valueByYear,
    };
  }

  return {
    state: computed(() => state.value),
    calculate,
  };
});
