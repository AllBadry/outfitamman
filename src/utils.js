export function formatPrice(price, t) {
  const n = Number(price)
  const s = Number.isInteger(n) ? n.toFixed(0) : n.toFixed(2)
  return `${s} ${t.currencyLabel}`
}

export function productInStock(product) {
  return product.in_stock && product.variants.some((v) => v.sizes.some((s) => s.stock > 0))
}

export const ACTIVE_CATEGORIES = ['rgal', 'atfal']

export function isActiveCategory(product) {
  return ACTIVE_CATEGORIES.includes(product.main_category)
}

const UNDERWEAR_RE =
  /\b(underwear|intimates?|lingerie|bras?|panties|pantie|briefs?|boyshort|g-string|thong|bralette|shapewear|underpants|panties set)\b/i

export function isUnderwear(product) {
  if (product.main_category !== 'woman') return false
  return UNDERWEAR_RE.test(product.name || '')
}

const COLOR_MAP = {
  black: '#1c1c1c',
  white: '#f4f4f0',
  red: '#e6312a',
  navy: '#1b2a4a',
  beige: '#d9c3a3',
  olive: '#708238',
  grey: '#9a9a9a',
  gray: '#9a9a9a',
  blue: '#2f5da8',
  green: '#3a7d44',
  yellow: '#f2c14e',
  orange: '#e8762d',
  pink: '#e8a0b4',
  brown: '#7a5230',
  khaki: '#b8a06a',
  'future white': '#f2f2f2',
}

export function colorHex(name) {
  const key = String(name || '').toLowerCase()
  if (COLOR_MAP[key]) return COLOR_MAP[key]
  let hash = 0
  for (let i = 0; i < key.length; i++) hash = (hash * 31 + key.charCodeAt(i)) >>> 0
  return `hsl(${hash % 360} 45% 55%)`
}
