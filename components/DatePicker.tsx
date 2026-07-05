"use client";

import * as React from "react";
import { CalendarIcon } from "lucide-react";
import { format } from "date-fns";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { getEntryForMonthDay } from "@/lib/getDailyEntry";
import { Entry } from "@/lib/types";

interface DatePickerProps {
  onSelectEntry: (entry: Entry) => void;
  onReset: () => void;
  todayDate: Date;
}

export function DatePicker({ onSelectEntry, onReset, todayDate }: DatePickerProps) {
  const [open, setOpen] = React.useState(false);
  const [selectedDate, setSelectedDate] = React.useState<Date>(todayDate);
  const [month, setMonth] = React.useState<Date>(todayDate);

  const handleSelect = (date: Date | undefined) => {
    if (!date) return;
    setSelectedDate(date);
    const entry = getEntryForMonthDay(date.getMonth() + 1, date.getDate());
    onSelectEntry(entry);
    setOpen(false);
  };

  const handleToday = () => {
    setSelectedDate(todayDate);
    setMonth(todayDate);
    onReset();
    setOpen(false);
  };

  const handleMonthChange = (newMonth: Date) => {
    setMonth(new Date(2024, newMonth.getMonth(), 1));
  };

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          style={{ color: "#1E1E1E" }}
          className="rounded-full hover:bg-[#1E1E1E]/10"
        >
          <CalendarIcon className="h-5 w-5" />
        </Button>
      </PopoverTrigger>
      <PopoverContent
        className="w-auto p-0"
        style={{ backgroundColor: "#FFF4DD", border: "1px solid rgba(30,30,30,0.15)" }}
        align="end"
      >
        <Calendar
          mode="single"
          selected={selectedDate}
          onSelect={handleSelect}
          month={month}
          onMonthChange={handleMonthChange}
          formatters={{
            formatCaption: (date: Date) => format(date, "MMMM"),
          }}
          className="bg-transparent"
          style={{ fontFamily: "var(--font-inter)", color: "#1E1E1E" }}
        />
        <div className="p-2" style={{ borderTop: "1px solid rgba(30,30,30,0.15)" }}>
          <Button
            variant="ghost"
            className="w-full hover:bg-[#1E1E1E]/10"
            style={{ color: "#1E1E1E" }}
            onClick={handleToday}
          >
            Today
          </Button>
        </div>
      </PopoverContent>
    </Popover>
  );
}


