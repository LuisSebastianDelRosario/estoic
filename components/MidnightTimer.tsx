"use client";

import { useCountdown } from "@/hooks/useCountdown";
import { useMemo } from "react";

export function MidnightTimer() {
  const { hours, minutes, seconds } = useCountdown();

  const pad = (n: number) => String(n).padStart(2, "0");

  const display = useMemo(
    () => `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`,
    [hours, minutes, seconds]
  );

  return (
    <div
      style={{
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: "#FFF4DD",
        padding: "1rem 0 1.5rem",
        textAlign: "center",
        zIndex: 10,
        boxShadow: "0 -4px 12px rgba(30, 30, 30, 0.06)",
      }}
    >
      <p
        style={{
          fontFamily: "var(--font-inter)",
          fontWeight: 700,
          letterSpacing: "-0.05em",
          color: "#1E1E1E",
          fontSize: "0.875rem",
        }}
      >
        New wisdom refresh every midnight
      </p>
      <p
        suppressHydrationWarning
        style={{
          fontFamily: "var(--font-inter)",
          fontWeight: 400,
          letterSpacing: "-0.05em",
          color: "rgba(30, 30, 30, 0.67)",
          fontSize: "0.875rem",
          marginTop: "0.25rem",
        }}
      >
        Timer: {display}
      </p>
      <p
        style={{
          fontFamily: "var(--font-inter)",
          fontWeight: 400,
          letterSpacing: "-0.05em",
          color: "rgba(30, 30, 30, 0.67)",
          fontSize: "0.700rem",
          marginTop: "0.2rem",
        }}
      >
        developed by:{" "}
        <span style={{ fontWeight: 700, color: "#1E1E1E" }}>
          iamluisdelrosario
        </span>
      </p>
    </div>
  );
}