export type Entry = {
  id: number;          // day of year (1–366)
  date: string;        // e.g. "January 1"
  title: string;       // e.g. "Control and Choice"
  quote: string;       // the stoic quote
  author: string;      // e.g. "Epictetus, Discourses 2.5.4–5"
  reflection: string;  // the daily reflection text
};