import { readFileSync, writeFileSync, mkdirSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const publicDir = join(__dirname, '..', 'public')
const BASE = 'https://outfitamman.com'

const products = JSON.parse(readFileSync(join(publicDir, 'products.json'), 'utf8'))
const today = new Date().toISOString().slice(0, 10)
const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')

const pages = [
  { loc: '/', priority: 1.0, changefreq: 'daily' },
  { loc: '/shop', priority: 0.9, changefreq: 'daily' },
  { loc: '/shop/new', priority: 0.8, changefreq: 'daily' },
  { loc: '/shop/men', priority: 0.8, changefreq: 'weekly' },
  { loc: '/shop/kids', priority: 0.8, changefreq: 'weekly' },
  { loc: '/shop/sale', priority: 0.7, changefreq: 'weekly' },
]

const productUrls = (Array.isArray(products) ? products : [])
  .filter((p) => p && p.slug)
  .map((p) => ({ loc: `/product/${p.slug}`, priority: 0.6, changefreq: 'monthly' }))

const all = [...pages, ...productUrls]

let xml = '<?xml version="1.0" encoding="UTF-8"?>\n'
xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n'
for (const u of all) {
  xml += '  <url>\n'
  xml += `    <loc>${BASE}${esc(u.loc)}</loc>\n`
  xml += `    <lastmod>${today}</lastmod>\n`
  xml += `    <changefreq>${u.changefreq}</changefreq>\n`
  xml += `    <priority>${u.priority}</priority>\n`
  xml += '  </url>\n'
}
xml += '</urlset>\n'

writeFileSync(join(publicDir, 'sitemap.xml'), xml)
console.log(`sitemap.xml generated: ${all.length} URLs`)
