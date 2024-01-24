import { v4 as uuid } from "uuid";

export function inputNameFromLabel(label: string) {
  if (!label) return uuid();

  return label.replace(/\s/g, "").toLowerCase();
}
