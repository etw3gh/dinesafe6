export const cap = (s) => {
  return s.replace(/\b\w/g, l => l.toUpperCase()).replace(/'S/g, '\'s')
}
export const niceDate = (d) => {
  return d.replace('T', ' ').replace('Z', '')
}
export const stripSingles = (s) => {
  return s.replace(/'/g, '')
}
