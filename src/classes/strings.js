export const cap = (s) => {
  return s.replace(/\b\w/g, l => l.toUpperCase())
}
