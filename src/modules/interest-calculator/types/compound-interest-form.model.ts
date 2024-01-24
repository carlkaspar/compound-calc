import { z } from "zod";

export type CompoundInterestForm = z.infer<typeof CompoundInterestFormSchema>;

const FrequencySchema = z.enum(["YEARLY", "MONTHLY"]);

export const CompoundInterestFormSchema = z.object({
  initialInvestment: z.number(),
  contributionFrequency: FrequencySchema,
  contributionAmount: z.number(),
  years: z.number(),
  estimatedReturn: z.number().min(1),
});
