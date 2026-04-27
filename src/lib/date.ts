export function toDateOnlyString(date: Date | null | undefined): string | null {
  if (!date) {
    return null;
  }
  return date.toISOString().slice(0, 10);
}

export function startOfToday(): Date {
  const now = new Date();
  return new Date(now.getFullYear(), now.getMonth(), now.getDate());
}

export function addDays(date: Date, days: number): Date {
  const result = new Date(date);
  result.setDate(result.getDate() + days);
  return result;
}

export function daysBetween(start: Date, end: Date): number {
  const millisecondsPerDay = 24 * 60 * 60 * 1000;
  const normalizedStart = new Date(start.getFullYear(), start.getMonth(), start.getDate()).getTime();
  const normalizedEnd = new Date(end.getFullYear(), end.getMonth(), end.getDate()).getTime();
  return Math.floor((normalizedEnd - normalizedStart) / millisecondsPerDay);
}
