import type { CompoundInterestForm } from "../types/compound-interest-form.model";

export const DAYS_IN_YEAR = 365;
export const DAYS_IN_MONTH = 30.437;
export const MONTHS_IN_YEAR = 12;

export function calculateGrowth({
  initialInvestment,
  contributionFrequency,
  contributionAmount,
  years,
  estimatedReturn,
}: CompoundInterestForm) {
  const amountByYear: number[] = [initialInvestment];

  for (let year = 0; year < years; year++) {
    let cumulatedAmount = amountByYear[amountByYear.length - 1];

    for (let month = 0; month < MONTHS_IN_YEAR; month++) {
      const monthValue = compoundInterestFormulaPerMonth({
        principal: cumulatedAmount,
        estimatedReturn,
      });

      cumulatedAmount =
        contributionFrequency === "MONTHLY"
          ? monthValue + contributionAmount
          : monthValue;
    }

    amountByYear.push(
      contributionFrequency === "YEARLY"
        ? cumulatedAmount + contributionAmount
        : cumulatedAmount,
    );
  }

  return amountByYear.map((amount) => Math.floor(amount));
}

export function calculateTotalContributions({
  initialInvestment,
  contributionFrequency,
  contributionAmount,
  years,
}: CompoundInterestForm) {
  const totalContributionsPerYear =
    contributionFrequency === "YEARLY"
      ? contributionAmount
      : contributionAmount * 12;
  const totalContributions = totalContributionsPerYear * years;

  return initialInvestment + totalContributions;
}

function compoundInterestFormulaPerMonth({
  principal,
  estimatedReturn,
}: {
  principal: number;
  estimatedReturn: number;
}) {
  const dailyRateOfReturn = estimatedReturn / 100 / DAYS_IN_YEAR;

  return principal * Math.pow(1 + dailyRateOfReturn, DAYS_IN_MONTH);
}
