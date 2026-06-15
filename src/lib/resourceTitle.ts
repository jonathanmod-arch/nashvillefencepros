/**
 * Auto-monthly title helpers for resource articles.
 *
 * "Best X in Nashville" style roundups get a fresh `(Month Year)` suffix
 * appended to the title and an "Updated {Month Year}" badge in the body,
 * both computed from the current date so the article reads as freshly
 * maintained without any manual edits month to month.
 */

export function monthYearString(date: Date = new Date()): string {
  return date.toLocaleString('en-US', { month: 'long', year: 'numeric' })
}

// "Last updated on" pill format for resource articles: "Jun 15, 2026".
// Accepts ISO date-only or full ISO strings. Anchors date-only inputs at
// noon UTC and formats in America/Chicago so 'YYYY-MM-DD' values don't
// kick back to the previous day in any U.S. timezone.
export function shortDateString(iso: string): string {
  const isoSafe = iso.includes('T') ? iso : `${iso}T12:00:00Z`
  return new Date(isoSafe).toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
    timeZone: 'America/Chicago',
  })
}

export function isAutoMonthly(title: string): boolean {
  return /^Best\s/i.test(title)
}

export function displayTitle(title: string, date?: Date): string {
  if (!isAutoMonthly(title)) return title
  return `${title} (${monthYearString(date)})`
}
