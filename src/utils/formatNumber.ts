/**
 * Format large numbers to human-readable format
 * e.g., 20000000000 -> "20 billion"
 */
export const formatPopulation = (value: string): string => {
  // Handle non-numeric values like "unknown"
  if (!value || isNaN(Number(value))) {
    return value
  }

  const num = Number(value)

  if (num >= 1_000_000_000_000) {
    return `${(num / 1_000_000_000_000).toFixed(1).replace(/\.0$/, '')} trillion`
  }
  if (num >= 1_000_000_000) {
    return `${(num / 1_000_000_000).toFixed(1).replace(/\.0$/, '')} billion`
  }
  if (num >= 1_000_000) {
    return `${(num / 1_000_000).toFixed(1).replace(/\.0$/, '')} million`
  }
  if (num >= 1_000) {
    return `${(num / 1_000).toFixed(1).replace(/\.0$/, '')} thousand`
  }

  return value
}
