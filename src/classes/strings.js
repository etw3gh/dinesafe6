export const cap = (s) => {
  return s.replace(/\b\w/g, l => l.toUpperCase()).replace(/'S/g, '\'s')
}
export const niceDate = (d) => {
  return d.replace('T', ' ').replace('Z', '')
}
export const stripSingles = (s) => {
  return s.replace(/'/g, '')
}
export const idify = (s) => {
  return s.replace(/-/g, '_').replace(/\:/g, '_').replace(/\./g, '_') .replace(/ /g, '_')
}
export const nodata = (s) => {
  const strim = s.trim()
  return strim === '' ? '-----' : strim
}

// https://stackoverflow.com/a/901144/6826791
export const getParameterByName = p => {
    const url = window.location.href
    p = p.replace(/[\[\]]/g, "\\$&")

    const regex = new RegExp("[?&]" + p + "(=([^&#]*)|&|#|$)")
    const results = regex.exec(url)
    if (!results) return null
    if (!results[2]) return ''
    let param = decodeURIComponent(results[2].replace(/\+/g, " "))
    return param
}
