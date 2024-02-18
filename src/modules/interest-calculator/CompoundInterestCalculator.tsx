import { defineComponent } from "vue";
import useCompoundInterestCalculator from "./composables/useCompoundInterestCalculator";
import CompoundInterestFormVue from "./CompoundInterestForm.vue";
import CompoundInterestChart from "./CompoundInterestChart";

export default defineComponent(() => {
  const { state } = useCompoundInterestCalculator();

  return () => {
    return (
      <>
        <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div class="mx-auto max-w-3xl flex flex-col gap-4">
            <h1 class="mt-8">Compound interest calculator</h1>

            <CompoundInterestFormVue class="max-w-xl" />

            {state.value ? (
              <>
                <div class="flex flex-col">
                  <span>
                    Total amount of contributions:
                    <b>{state.value.totalContributions} €</b>
                  </span>
                  <span>
                    Total future value after
                    {state.value.futureValueByYear.length - 1} years:
                    <b>{state.value.totalFutureValue} €</b>
                  </span>
                </div>
                <CompoundInterestChart
                  futureValueByYear={state.value.futureValueByYear}
                  contributionsByYear={state.value.contributionsValueByYear}
                />
              </>
            ) : undefined}
          </div>
        </div>
      </>
    );
  };
});
