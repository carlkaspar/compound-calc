import { z } from "zod";

export type CompoundInterestForm = z.infer<typeof CompoundInterestFormSchema>;

const FrequencySchema = z.enum(["YEARLY", "MONTHLY"]);

const TransformStringToNumber = z
  .union([z.number(), z.string()])
  .transform((val) => {
    return typeof val === "number" ? val : undefined;
  });

export const CompoundInterestFormSchema = z.object({
  initialInvestment: TransformStringToNumber.pipe(
    z.number({
      required_error: "Initial investment is required, enter 0 to skip",
    }),
  ),
  contributionFrequency: FrequencySchema,
  contributionAmount: TransformStringToNumber.pipe(
    z.number({
      required_error: "Contribution amount is required, enter 0 to skip",
    }),
  ),
  years: TransformStringToNumber.pipe(
    z
      .number({ required_error: "Year is required" })
      .min(1, "Minimal year count is 1"),
  ),
  estimatedReturn: TransformStringToNumber.pipe(
    z.number({
      required_error: "Estimated return is required, enter 0 to skip",
    }),
  ),
});
