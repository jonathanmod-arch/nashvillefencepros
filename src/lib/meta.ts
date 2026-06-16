// Format a string for use as <meta name="description">. Google
// truncates around 155-160 characters; mid-word truncation looks bad
// in SERPs and can trip the heuristic that decides to auto-extract
// from body text instead. This helper trims to a sentence or word
// boundary under the cap so descriptions always read as complete.
const SOFT_CAP = 158
export function cleanMetaDescription(input: string, cap = SOFT_CAP): string {
  const trimmed = input.replace(/\s+/g, ' ').trim()
  if (trimmed.length <= cap) return trimmed
  const window = trimmed.slice(0, cap)
  // Prefer a sentence boundary (last period/question/exclamation).
  const lastSentence = Math.max(
    window.lastIndexOf('. '),
    window.lastIndexOf('! '),
    window.lastIndexOf('? '),
  )
  if (lastSentence >= cap - 60) {
    return window.slice(0, lastSentence + 1)
  }
  // Otherwise cut at the last word boundary.
  const lastSpace = window.lastIndexOf(' ')
  return lastSpace > 0 ? `${window.slice(0, lastSpace)}…` : window
}
