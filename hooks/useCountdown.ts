import { useState, useEffect } from "react";

const APP_TIMEZONE = "Asia/Manila"; // keep in sync with getDailyEntry.ts

function getTimeUntilMidnight() {
  const now = new Date();

  // Re-interpret "now" as wall-clock time in APP_TIMEZONE
  const nowInTz = new Date(now.toLocaleString("en-US", { timeZone: APP_TIMEZONE }));

  const midnightInTz = new Date(nowInTz);
  midnightInTz.setHours(24, 0, 0, 0);

  const diff = midnightInTz.getTime() - nowInTz.getTime();

  return {
    hours: Math.floor(diff / (1000 * 60 * 60)),
    minutes: Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)),
    seconds: Math.floor((diff % (1000 * 60)) / 1000),
  };
}

export function useCountdown() {
  const [time, setTime] = useState(getTimeUntilMidnight);

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(getTimeUntilMidnight());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return time;
}