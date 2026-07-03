import { entries } from "./entries";
import { Entry } from "./types";

const APP_TIMEZONE = "Asia/Manila";

// Fixed 366-day layout — matches entries.ts, which always reserves Feb 29
// as id 60 regardless of whether the current year is a leap year.
const CANONICAL_MONTH_DAYS = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

export function getDailyEntry(): Entry {
  const now = new Date();
  const formatter = new Intl.DateTimeFormat("en-US", {
    timeZone: APP_TIMEZONE,
    year: "numeric",
    month: "numeric",
    day: "numeric",
  });
  const parts = formatter.formatToParts(now);
  const month = Number(parts.find(p => p.type === "month")?.value); // 1–12
  const day = Number(parts.find(p => p.type === "day")?.value);     // 1–31

  let index = 0;
  for (let m = 0; m < month - 1; m++) {
    index += CANONICAL_MONTH_DAYS[m];
  }
  index += day - 1;

  return entries[index] ?? entries[0];
}