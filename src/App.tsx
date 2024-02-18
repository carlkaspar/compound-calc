import { defineComponent } from "vue";
import CompoundInterestCalculatorVue from "./modules/interest-calculator/CompoundInterestCalculator";

export default defineComponent(() => {
  return () => {
    return <CompoundInterestCalculatorVue />;
  };
});
