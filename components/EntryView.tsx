"use client";

import * as React from "react";
import { Separator } from "@/components/ui/separator";
import { MidnightTimer } from "@/components/MidnightTimer";
import { DatePicker } from "@/components/DatePicker";
import { Entry } from "@/lib/types";

interface EntryViewProps {
  todayEntry: Entry;
  todayDate: Date;
}

export function EntryView({ todayEntry, todayDate }: EntryViewProps) {
  const [entry, setEntry] = React.useState<Entry>(todayEntry);

  return (
    <main className="min-h-screen w-full flex flex-col items-center pt-6 pb-32">
      <div className="max-w-2xl w-full mx-auto px-8">

        <div style={{ display: "flex", justifyContent: "flex-end", marginBottom: "2rem" }}>
          <DatePicker
            todayDate={todayDate}
            onSelectEntry={(e) => setEntry(e)}
            onReset={() => setEntry(todayEntry)}
          />
        </div>

        <div style={{ textAlign: "center", marginBottom: "1.5rem" }}>
          <p
            style={{
              fontFamily: "var(--font-inter)",
              fontWeight: 400,
              letterSpacing: "-0.05em",
              color: "#1E1E1E",
              fontSize: 20,
              marginBottom: "0.25rem",
            }}
          >
            {entry.date}
          </p>
          <h1
            style={{
              fontFamily: "var(--font-inter)",
              fontWeight: 700,
              letterSpacing: "-0.05em",
              color: "#1E1E1E",
              fontSize: "2rem",
              lineHeight: 1.2,
              margin: 0,
            }}
          >
            {entry.title}
          </h1>
        </div>

        <Separator style={{ backgroundColor: "#1E1E1E", opacity: 0.15, marginBottom: "1.5rem" }} />

        <div
          className="p-5"
          style={{
            backgroundColor: "#EBDBBC",
            borderRadius: "25px",
            marginBottom: "1.5rem",
          }}
        >
          <p
            style={{
              fontFamily: "var(--font-libertinus-serif)",
              fontStyle: "italic",
              letterSpacing: "-0.03em",
              color: "#1E1E1E",
              fontSize: "1.05rem",
              lineHeight: 1.5,
              marginBottom: "0.75rem",
            }}
          >
            &ldquo;{entry.quote}&rdquo;
          </p>
          <p
            style={{
              fontFamily: "var(--font-inter)",
              fontWeight: 400,
              color: "rgba(30, 30, 30, 0.64)",
              fontSize: "0.8rem",
              margin: 0,
            }}
          >
            {entry.author}
          </p>
        </div>

        <div style={{ marginBottom: "1.5rem" }}>
          {entry.reflection.split("\\n\\n").map((paragraph, index, arr) => (
            <p
              key={index}
              style={{
                fontFamily: "var(--font-noto-serif)",
                fontWeight: 400,
                letterSpacing: "-0.03em",
                color: "#1E1E1E",
                fontSize: "1rem",
                lineHeight: 1.5,
                textAlign: "justify",
                hyphens: "auto",
                wordSpacing: "-0.05em",
                marginBottom: index < arr.length - 1 ? "1rem" : 0,
              }}
            >
              {paragraph}
            </p>
          ))}
        </div>

        <Separator style={{ backgroundColor: "#1E1E1E", opacity: 0.15, marginBottom: "1.5rem" }} />

        <div style={{ textAlign: "center" }}>
          <MidnightTimer />
        </div>

      </div>
    </main>
  );
}



