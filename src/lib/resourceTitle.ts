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

export function isAutoMonthly(title: string): boolean {
  return /^Best\s/i.test(title)
}

export function displayTitle(title: string, date?: Date): string {
  if (!isAutoMonthly(title)) return title
  return `${title} (${monthYearString(date)})`
}
