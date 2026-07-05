import { getDailyEntry, getTodayMonthDay } from "@/lib/getDailyEntry";
import { EntryView } from "@/components/EntryView";

export const dynamic = "force-dynamic";

export default function DailyPage() {
  const entry = getDailyEntry();
  const { month, day } = getTodayMonthDay();
  const todayDate = new Date(2024, month - 1, day);

  return <EntryView todayEntry={entry} todayDate={todayDate} />;
}
