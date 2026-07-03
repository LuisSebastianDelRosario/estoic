import { entries } from "./entries";
import { Entry } from "./types";

export function getDailyEntry(): Entry {
  const now = new Date();
  const start = new Date(now.getFullYear(), 0, 0);
  const diff = now.getTime() - start.getTime();
  const dayOfYear = Math.floor(diff / (1000 * 60 * 60 * 24));

  // fallback to first entry if day exceeds available entries
  return entries[dayOfYear - 1] ?? entries[0];
}